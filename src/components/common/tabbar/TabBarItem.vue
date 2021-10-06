<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if=!isActive name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {

      }
    },
    computed:{
      //通过计算属性来代替isActive
      isActive(){
        //判断当前激活路由中是否含有this.path 如果含有那么就表示当前是激活状态
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path).catch(err => {});
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item{
    /*flex：1 设置每个元素均分*/
    flex: 1;
    /*文字居中达到效果*/
    text-align: center;
    /*tabbar中的每一个元素高度最好为49px 有前人调研过*/
    height: 49px;

  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }

  /*.active{*/
    /*color: deeppink;*/
  /*}*/

</style>
