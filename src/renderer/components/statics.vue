<template>
  <div>
    <v-header></v-header>
    <el-container>
      <el-aside></el-aside>
      <el-header class="header">统计分析</el-header>
      <el-main>
        <div class="container">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <router-link :to="'/statics/most'">
                <div class="grid-content">
                  <div class="function-item">众数</div>
                </div>
              </router-link>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">中位数</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">分位数</div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <router-link :to="{name: 'average'}">
                <div class="grid-content">
                  <div class="function-item">均值</div>
                </div>
              </router-link>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">极差</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">平均差</div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">方差</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="function-item">标准差</div>
              </div>
            </el-col>
            <el-col :span="6">
              <!--<div class="grid-content">
                                <div class="function-item">标准差</div>
                              </div>-->
            </el-col>
          </el-row>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import vHeader from './header'
import index from 'vue';
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'statics',
  components: {
    vHeader
  },
  mounted() {

    const wb = JSON.parse(localStorage.getItem('excelWorkBook'))
    wb.SheetNames.forEach((sheetName) => {
      const excelJson = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
      // console.log(excelJson);
      const temp = Object.assign({}, excelJson[0])
      // console.log(temp)
      delete temp['题号']
      // console.log(temp)
      const keys = Object.keys(temp).slice(0)
      // console.log(keys);

      const allGrades = excelJson.map((row, index) => {
        // console.log(row)
        if (Object.keys(row).length < keys.length) {
          return []
        }

        const grades = Object.assign({}, row)
        delete grades['题号']
        const result = keys.map((str, index) => {
          let trimStr = str.trim()
          // console.log(trimStr, ':', trimStr.substring(0, trimStr.lastIndexOf('.')));
          if (trimStr === '0') {
            return {
              id: trimStr,
              grade: parseFloat(grades[str].trim()),
              parentId: '-1',
              children: null
            }
          }
          else if (trimStr.lastIndexOf('.') === -1) {
            return {
              id: trimStr,
              grade: parseFloat(grades[str].trim()),
              parentId: '0',
              children: null
            }
          }
          return {
            id: trimStr,
            grade: parseFloat(grades[str].trim()),
            parentId: trimStr.substring(0, trimStr.lastIndexOf('.')),
            children: null
          }
        })
        // console.log(result)
        let resultRowData = {}
        try {
          resultRowData = this.list_to_tree(result)
        } catch (error) {

        }
        return resultRowData
      }).filter(item => Object.keys(item).length > 0)
      // localStorage.setItem('allGrades', allGrades)
      this.changeAllGrades(allGrades)
      // console.log(allGrades);
    })
  },
  methods: {
    ...mapActions(['changeAllGrades']),
    list_to_tree(list) {
      let map = {}, node, roots = {}, i;
      for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
      }
      for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parentId !== "-1") {
          // if you have dangling branches check that map[node.parentId] exists
          // console.log(node.parentId);
          // console.log(map);
          // console.log(map[node.parentId]);
          // console.log(list[map[node.parentId]]);
          list[map[node.parentId]].children.push(node);
        } else {
          roots = node;
        }
      }
      // console.log(roots);
      return roots;
    }
  }
}
</script>

<style lang="postcss" scoped>
.header {
  margin-top: 10%;
  font-size: 25px;
  text-align: center;
}

.container {
  margin-left: 5%;
}

.function-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  width: 300px;
  height: 200px;
  cursor: pointer;
  background-color: #409eff;
}

.function-item:hover {
  background-color: #4790da;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

