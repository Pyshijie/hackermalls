
<!--封装导航栏组件-->
<template>
  <!--nav-bar不唯一，所以使用class为好-->
  <div class="nav-bar">
    <!--具名插槽-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<!--一般导航栏高度设置为44px-->

<style scoped>

  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left,.right{
    width: 60px;
  }

  .center{
    flex: 1;
  }
</style>
