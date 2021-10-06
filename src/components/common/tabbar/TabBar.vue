<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    /*开启弹性布局*/
    display: flex;
    /*固定定位*/
    position:fixed;
    /*left和right为0 为了让其撑满整个屏幕*/
    left: 0;
    right: 0;
    /*固定在最下部*/
    bottom: 0;
    background-color: #f6f6f6;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

</style>
