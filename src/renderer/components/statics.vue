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
                <div class="grid-content">
                  <div class="function-item">众数</div>
                </div>
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
                <div class="grid-content">
                  <div class="function-item">均值</div>
                </div>
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
        </div>
      </el-main>
    </el-container>  
  </div>  
</template>

<script>
import XLSX from 'xlsx'
import vHeader from './header'
import index from 'vue';
export default {
  name: 'statics',
  components: {
    vHeader
  },
  mounted () {

    const wb = JSON.parse(localStorage.getItem('excelWorkBook'))
    wb.SheetNames.forEach((sheetName) => {
      const excelJson = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])

      const allGrades = excelJson.map((row, index) => {
        // console.log(excelJson)
        const grades = Object.assign({}, row)
        delete grades['题号']
        // console.log(grades);
        const keys = Object.keys(grades).slice(0)
        const result = keys.map((str, index) => {
          let trimStr = str.trim()
          if (trimStr.length === 1) {
            
            return {
              id: trimStr,
              grade: parseFloat(grades[str].trim()),
              parentId: '0',
              children: null
            }
          }
          // console.log(trimStr, grades[trimStr]);
          return {
            id: trimStr,
            grade: parseFloat(grades[str].trim()),
            parentId: trimStr.substring(0, trimStr.lastIndexOf('.')),
            children: null
          }
        })
        let resultRowData = []
        try {
          resultRowData = this.list_to_tree(result)
        } catch (error) {
          
        }
        return resultRowData
      }).filter(item => item.length > 0)

      console.log(allGrades);
    })
  },
  methods: {
    list_to_tree(list) {
      let map = {}, node, roots = [], i;
      for (i = 0; i < list.length; i += 1) {
          map[list[i].id] = i; // initialize the map
          list[i].children = []; // initialize the children
      }
      for (i = 0; i < list.length; i += 1) {
          node = list[i];
          if (node.parentId !== "0") {
              // if you have dangling branches check that map[node.parentId] exists
              // console.log(node.parentId);
              // console.log(map);
              // console.log(map[node.parentId]);
              // console.log(list[map[node.parentId]]);
              list[map[node.parentId]].children.push(node);
          } else {
              roots.push(node);
          }
      }
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

