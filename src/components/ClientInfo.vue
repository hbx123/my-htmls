<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <h1>客户端信息</h1>
        <el-table
          :data="getClientInfo"
          border>
          <el-table-column
            prop="key"
            label="属性">
          </el-table-column>
          <el-table-column
            prop="value"
            label="值">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </div>
</template>


<script>
  import platform from 'platform'
  import axios from 'axios'
  import {Message} from 'element-ui'

  export default {
    computed: {
      getClientInfo: function () {
        let os = `${platform.os}`
        let browser = `${platform.name} ${platform.version}`
        let resolution = `${screen.width}X${screen.height}`
        let ua = platform.ua
        let clientInfo = [
          {
            key: '操作系统',
            value: os
          }, {
            key: '浏览器',
            value: browser
          }, {
            key: '分辨率',
            value: resolution
          }, {
            key: '用户代理',
            value: ua
          }
        ]
        axios.get('http://httpbin.org/ip')
          .then(function (response) {
            let ip = response.data.origin
            Message.success('获取IP地址成功')
            clientInfo.push({key: 'IP地址', value: ip})
          })
          .catch(function (error) {
            Message.error(`获取IP地址失败，错误:${error}`)
          })
        return clientInfo
      }
    }
  }
</script>
<style>

</style>
