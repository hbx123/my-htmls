<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <h1>关于</h1>
        <p>其实这里也没啥好说的。Vue框架其实说起来到时也不难，但是单文件组件写起来还是不太容易，官方文档也没怎么介绍。
          ElementUI和Vue集成度倒是不错，各种组件用起来也可以，但是组件丰富程度还是感觉不如Bootstrap，很多样式还要我自己添加，
          对于我这前端初学者来说还是挺困难的。所以最后还是做成了这个样子……看来我还是习惯使用Bootstrap，以后再好好研究一下如何在Bootstrap中
          如何集成Vue吧。</p>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    name: 'About',
    data() {
      return {}
    }
  }
</script>
<style>

</style>
