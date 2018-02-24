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
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">功能</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['activeIndex'])
  },
  methods: {
    ...mapActions(['changeIndex']),
    handleSelect(key, keyPath) {
      this.changeIndex(key)
      let name = 'index'
      switch (key) {
        case '1':
          name = 'index'
          break;
        case '2':
          name = 'function'
          break
        case '3':
          name = 'excel'
          break
        case '4': 
          name = 'statics'
          break
        case '5': 
          name = 'quality'
          break
        case '6':
          name = 'graph'
          break
        default:
          break
      }
      this.$router.push({
        name
      })
    },
  }
}
</script>

<style lang="postcss" scoped>

</style>

