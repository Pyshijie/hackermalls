<template>
  <div class="wrapper">
    <ul class="content">
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
      <li>列表信息1</li>
    </ul>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    mounted() {
      const bscroll = new BScroll(document.querySelector('.wrapper'),{
        click:true,
        probeType:3
      });
    },
  }

</script>

<style scoped>

  .wrapper{
    height: 100px;
    background-color: #bfa;
    overflow: hidden;
  }

</style>
