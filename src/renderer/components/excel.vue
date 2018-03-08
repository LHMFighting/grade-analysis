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
    for (var key in sheetObj) {
      var regex = RegExp('[A-Z]+2$');
      var qidArr = {}
      var firstNum = 0;
      // if (regex.test(key)) {
      //   // console.log(sheetObj[key].w);
      //   var splitNum = sheetObj[key].w.split('.');
      //   if (firstNum != splitNum[0] && !isNaN(splitNum[0])) {
      //     firstNum = splitNum[0];
      //     allGrade.push(student);
      //   }
      //   console.log('第一位数', firstNum);
      //   console.log('分隔的数', splitNum);
      //   console.log('是否为数字', !isNaN(splitNum[0]));
      //   for (let i = 1; i < splitNum.length; i++) {
      //     allGrade
      //   }
      // }

    }
    console.log(sheetObj.A2.w);
    wb.SheetNames.forEach((sheetName) => {
      const htmlstr = XLSX.utils.sheet_to_html(wb.Sheets[sheetName])
      this.$refs.excelHtml.innerHTML += htmlstr
    })
  }
}
</script>

<style lang="postcss" scoped>

</style>

