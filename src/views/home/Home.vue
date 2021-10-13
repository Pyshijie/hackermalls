<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物车</div></nav-bar>
    <scroll class="content"
            ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommends-view :recommends="recommends"></home-recommends-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabControlGetType="tabControlGetType"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>

    <back-top class="back-top" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/bscroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from  'components/content/goods/GoodsList'
  import BackTop from  'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendsView from './childComps/HomeRecommendsView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata ,getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,

      HomeSwiper,
      HomeRecommendsView,
      FeatureView,

    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
  //  当组件被创建完成时，就去异步请求所有的数据
  //  本次任务 getHomeMultidata 完成轮播图设计 和 推荐信息展示 因此需要获取banners和recommends的数据
    created() {

      /*
       * 网络数据请求
       * */
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        //获取当前类型当前页数的下一页的数据
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          //res.data.list 为我们最终需要的数据
          //通过 ... 声明可变参数 这是push的特性， ... 会遍历res.data.list中的每一个元素然后push到list中
          this.goods[type].list.push(...res.data.list)
          //添加完数据后，页数应该+1了。
          this.goods[type].page += 1
        })
      },
      tabControlGetType(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0)
      }
    }
  }
</script>

<!--通过var来使用定义在base.css中的变量来设置背景颜色-->
<style scoped>

  #home{
    padding-top:44px;
    height: 100vh;
    position: relative;
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

  .tab-control{
    /*position 的 sticky属性具体用处 ： 该属性需要结合top来使用
    当监测到页面向下滚动 44px的时候，浏览器会自动将position改为 fixed
    当监测到页面向下滚动不足44px的时候，(即人为的向上滚动了，向下卷不足44px后) 它又会将position由fixed改为sticky*/
    position: sticky;
    top: 44px;

    z-index: 9;
    margin-top: -1px;
  }
  
  .content{

    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .back-top{
    z-index: 9;
  }
</style>
