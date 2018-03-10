<template>
  <div>
    <v-header></v-header>
    <div ref="excelHtml"></div>
  </div>
</template>

<script>

import XLSX from 'xlsx'
import vHeader from './header'

export default {
  name: 'excel',
  components: {
    vHeader
  },
  mounted() {
    const wb = JSON.parse(localStorage.getItem('excelWorkBook'))
    var sheetObj = wb.Sheets.Sheet1
    var student = {
      sum: 0,
      parent: '',
      questions: []
    };
    var allGrade = [];
    var excelJson
    console.log(wb);
    wb.SheetNames.forEach((sheetName) => {
      console.log(wb.Sheets[sheetName])
      excelJson = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
    })
    console.log(excelJson);
    excelJson.forEach(function (key, i) {
      console.log(i, key);
    })
    wb.SheetNames.forEach((sheetName) => {
      const htmlstr = XLSX.utils.sheet_to_html(wb.Sheets[sheetName])
      this.$refs.excelHtml.innerHTML += htmlstr
    })
  }
}
</script>

<style lang="postcss" scoped>

</style>

