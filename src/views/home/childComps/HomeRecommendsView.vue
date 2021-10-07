<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendsView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>

  .recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #666;
    padding: 10px 0 18px;
    border-bottom: 10px solid #eee;
  }

  .recommends-item{
    flex: 1;
  }

  .recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }

</style>
