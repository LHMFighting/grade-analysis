<template>
  <div>
    <v-header></v-header>
    <el-container>
      <el-header class="header">选择Excel文件上传</el-header>
      <el-main>
        <label class='upload-zone'>
          <i>&nbsp;</i>
          <input id="file" type="file" @change="uploadFile" />
        </label>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import {mapGetters, mapActions} from 'vuex'

import vHeader from './header'

export default {
  name: 'index',
  data () {
    return {
      fileList: []
    }
  },
  components: {
   vHeader
  },
  methods: {
    ...mapActions(['changeIndex']),
    uploadFile (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        let data = e.target.result
        data = new Uint8Array(data)
        this.process_wb(XLSX.read(data, {type: 'array'}))
      }
      reader.readAsArrayBuffer(file)
    },
    process_wb (wb) {
      wb.SheetNames.forEach((sheetName) => {
        const excelData = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
        localStorage.setItem('excelData', JSON.stringify(excelData))
        this.changeIndex('2')
        this.$router.push({
          path: '/function'
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>

.header {
  margin-top: 280px;
  font-size: 25px;
  text-align: center;
}



.upload-zone {
  padding: 3px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-border-radius: 20%;
  -ms-border-radius: 20%;
  -moz-border-radius: 20%;
  -o-border-radius: 20%;
  border-radius: 20%;
  -webkit-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.upload-zone:before {
  display: block;
  width: 160px;
  height: 160px;
  border: 3px dashed #72C6AD;
  position: relative;
  -webkit-border-radius: 20%;
  -ms-border-radius: 20%;
  -moz-border-radius: 20%;
  -o-border-radius: 20%;
  border-radius: 20%;
  content: " ";
  display: block;
  -webkit-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.upload-zone:hover {
  background: #72C6AD;
}
.upload-zone:hover:before {
  border-color: #fff;
}
.upload-zone:hover i:before, .upload-zone:hover i:after {
  background: #fff;
}
.upload-zone i {
  display: block;
  width: 20%;
  height: 20%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.upload-zone i:before, .upload-zone i:after {
  background: #72C6AD;
  top: 50%;
  left: 50%;
  content: " ";
  display: block;
  -webkit-border-radius: 4px;
  -ms-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.upload-zone i:before {
  width: 100%;
  height: 3px;
}
.upload-zone i:after {
  width: 3px;
  height: 100%;
}
.upload-zone input[type='file'] {
  display: none;
}

</style>
