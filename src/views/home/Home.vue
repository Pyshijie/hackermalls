<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
  //  当组件被创建完成时，就去异步请求所有的数据
  //  本次任务 getHomeMultidata 完成轮播图设计
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<!--通过var来使用定义在base.css中的变量来设置背景颜色-->
<style scoped>

  .home-nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
