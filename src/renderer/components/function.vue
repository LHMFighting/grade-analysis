<template>
  <div>
    <v-header></v-header>
    <el-container>
      <el-aside></el-aside>
      <el-header class="header">选择一个功能</el-header>
      <el-main>
        <div class="container">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <router-link :to="{name: 'excel'}">
                <div class="grid-content">
                  <div class="function-item">原始Excel</div>
                </div>
              </router-link>
            </el-col>
            <el-col :span="6">
              <router-link :to="{name: 'statics'}">
                <div class="grid-content">
                  <div class="function-item">统计分析</div>
                </div>
              </router-link>
            </el-col>
            <el-col :span="6">
              <router-link :to="{name: 'quality'}">
                <div class="grid-content">
                  <div class="function-item">质量分析</div>
                </div>
              </router-link>
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
  name: 'function',
  components: {
    vHeader
  }
}
</script>

<style lang="postcss" scoped>

.header {
  margin-top: 280px;
  font-size: 25px;
  text-align: center;
}

.container {
  margin-left: 8%;
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

