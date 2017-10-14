<template>
  <div id="app">
    <nav>
      <el-menu class="link-anchor" theme="dark" mode="horizontal">
        <a href="#/">
          <el-menu-item index="1">易天的前端页面</el-menu-item>
        </a>
        <el-submenu index="2">
          <template slot="title">小工具</template>
          <a href="#/ClientInfo">
            <el-menu-item index="2-1">客户端信息</el-menu-item>
          </a>
        </el-submenu>
        <a href="#/About">
          <el-menu-item index="3">关于</el-menu-item>
        </a>
      </el-menu>
    </nav>

    <div class="container">
      <router-view/>
    </div>

    <footer>
      <hr/>
      <p>
        <small>&copy;2017 - 今天的天气真好呢</small>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .link-anchor a:link {
    text-decoration: none;
  }

  .container {
    margin: auto;
  }

</style>
