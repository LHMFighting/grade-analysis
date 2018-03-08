<template>
  <div>
    <v-header></v-header>
    <el-container>
      <el-aside></el-aside>
      <el-header class="header">质量分析</el-header>
      <el-main>
        <div class="container">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">正态分布检测</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">试题难度</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">试卷难度</div>
                </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">区分度</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">信度</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                  <div class="function-item">效度</div>
                </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>  
</template>

<script>
import vHeader from './header'
export default {
  name: 'quality',
  components: {
    vHeader
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

