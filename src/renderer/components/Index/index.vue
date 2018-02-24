<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <input id="file" type="file" @change="uploadFile" >
  </div>
</template>

<script>
import xlsl from 'xlsx';
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['activeIndex'])
  },
  methods: {
    ...mapActions(['changeIndex']),
    uploadFile (event) {
      console.log(event.target.files[0])
    },
    handleSelect(key, keyPath) {
      this.changeIndex(key)
    }
  }
}
</script>
