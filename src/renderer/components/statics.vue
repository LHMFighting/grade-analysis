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
export default {
  name: 'statics',
  components: {
    vHeader
  },
  mounted () {
    const wb = JSON.parse(localStorage.getItem('excelWorkBook'))
    wb.SheetNames.forEach((sheetName) => {
      const excelJson = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
      console.log(excelJson);
    })
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

