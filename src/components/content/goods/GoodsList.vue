<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList" :goods-item="item" class="goods-list-item"></goods-list-item>
  </div>
</template>

<script>

  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    props:{
      goodsList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem,

    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>
