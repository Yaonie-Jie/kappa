<template>
  <van-swipe class="goods-swipe" :autoplay="3000">
    <van-swipe-item v-for="item in imgList" :key="item">
      <img :src="item.banner_image_url">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {
    Swipe,
    SwipeItem
  } from 'vant';
  export default {
    name: "banner",
    props: {
      imgList: {
        type: Array,
        default: []
      }
    },
    mounted() {

    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    }
  };
</script>
<style lang="less" scoped>
  .goods-swipe {
    height: 3.3rem;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
</style>