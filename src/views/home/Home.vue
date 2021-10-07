<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommends-view :recommends="recommends"></home-recommends-view>
    <feature-view/>

    <pre>


































    </pre>

  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendsView from './childComps/HomeRecommendsView'
  import FeatureView from './childComps/FeatureView'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendsView,
      FeatureView,

    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
  //  当组件被创建完成时，就去异步请求所有的数据
  //  本次任务 getHomeMultidata 完成轮播图设计 和 推荐信息展示 因此需要获取banners和recommends的数据
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

  #home{
    padding-top:44px;
  }

  .home-nav-bar{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
