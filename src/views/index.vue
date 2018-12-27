<template>
  <div class="content flex flex-col">
    <div class="flex-row bg_red head">
      <div class="flex-grow-0 userIcon">
        <img src="~images/fenlei.png" alt="">
      </div>
      <div class="flex-grow-1 searchInput">
        <input type="text" placeholder="十一学校">
      </div>
      <div class="flex-grow-0 flex-col flex-y-center">
        <div class="listIcon">
          <img src="~images/fenlei.png" alt="">
        </div>
        <div class="f20 listMsg">学校</div>
      </div>
    </div>

    <ul class="nav flex-y-center" :class="{'fixed':navFixed}">
      <li :class="{'active':navType=='home'}" @click="changeNav('home')">首页</li>
      <li :class="{'active':navType==item.name}" v-for="(item,index) in navList" :key="index" @click="changeNav(item.name)">{{item.name}}</li>
    </ul>

    <div v-if="navType=='home'">
      <banner :imgList="bannerImg"></banner>

      <div class="hot flex-row flex-x-between">
        <div class="hotImg"></div>
        <div class="hotImg"></div>
      </div>

      <ul class="shopList flex-col">
        <li class="shopItem flex-col" v-for="(item,index) in goodsList" :key="index">
          <div class="title flex-row flex-y-center">
            <div class="xian flex-grow-0"></div>
            <div class="titleFont flex-grow-1">{{item.name}}</div>
            <div class="f28 flex-grow-0" style="color:#666666;">更多</div>
            <img class="icon_right flex-grow-0" src="~images/icon_right.png" alt="">
          </div>
          <ul class="flex-col">
            <li class="shopContent flex-row" v-for="(i,ind) in item.goods" :key="ind">
              <img :src="i.goods_front_image_url" alt="">
              <div class="shopMsg flex-col flex-x-around">
                <div>{{i.name}}</div>
                <div class="price">
                  <span>¥{{i.price}}</span>
                  <span style="color:#666;font-size:.18rem;padding-left:.1rem;">销量2039</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-else>
      <img class="schoolImg" v-if="navType==item.name" :src="item.banner_url" v-for="(item,index) in navList" :key="index">
      <ul class="cat_list flex-x-between">
        <li class="flex-col" v-for="(item,index) in catList" :key="index">
          <img :src="item.goods_front_image_url" alt="">
          <div class="catName">{{item.name}}</div>
          <div class="flex-row flex-y-center" style="padding:0 .18rem .18rem .18rem;">
            <span class="price flex-grow-0">¥{{item.price}}</span>
            <span class="xiaoliang flex-grow-1">销量{{item.sold_num}}</span>
            <img class="che flex-grow-0" src="~images/gouwuchered.png">
          </div>
        </li>
      </ul>
    </div>




  </div>
</template>

<script>
  import banner from "@/components/banner";
  import api from "@/utils/api";

  import {
    mapState,
    mapActions
  } from "vuex";

  export default {
    components: {
      banner
    },
    data() {
      return {
        navFixed: false,
        // navType: 'home',
        navType: '一中',
        navList: [],
        goodsList: [],
        bannerImg: [],
        catList: [], //分类商品
      }
    },
    mounted() {
      this.init()
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      ...mapActions(["showMsg"]),
      changeNav(name) {
        if (name != 'home') {
          if (this.navType != name) {
            this.getGoodList(name)
          }
        }
        this.navType = name
      },
      init() {
        //分类
        this.axios.get(api.schools).then(res => {
          this.navList = res
        });
        this.axios.get(api.indexgoods).then(res => {
          this.goodsList = res
          console.log(res)
        });
        //轮播
        this.axios.get(api.bannerList).then(res => {
          this.bannerImg = res;
        });
        //二级轮播
        // this.axios.get(api.subbanners).then(res => {
        //   this.imgList = res;
        // });
      },
      getGoodList() {
        this.axios.get(api.goods, {
          params: {
            school: this.navType
          }
        }).then(res => {
          this.catList = res.results;
        });
      },
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('.nav').offsetTop
        if (scrollTop > offsetTop) {
          this.navFixed = true
        } else {
          this.navFixed = false
        }
      },
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  };
</script>

<style lang="less" scoped>
  .content {
    padding-bottom: .98rem;
    background: #EEEFF0;
  }

  .head {
    padding: 0.2rem 0.26rem;

    .userIcon {
      height: 0.61rem;
      width: 0.61rem;
      border-radius: 100px;
    }

    .searchInput {
      height: 0.62rem;
      padding: 0.02rem 0.3rem;

      input {
        width: 100%;
        height: 100%;
        border-radius: 100rem;
        padding: 0 0.5rem;
      }
    }

    .listIcon {
      height: 0.31rem;
      width: 0.4rem;
    }

    .listMsg {
      padding-top: 0.1rem;
      color: #fff;
    }
  }

  .nav {
    width: 100%;
    height: .88rem;
    background: #C02C28;
    white-space: nowrap;
    overflow: scroll;

    li {
      display: inline-block;
      font-size: .26rem;
      color: #fff;
      padding: 0 .22rem;

      &.active {
        font-size: .3rem;
      }
    }
  }

  .fixed {
    position: fixed;
    top: 0;
    z-index: 99;
  }

  .schoolImg {
    width: 100%;
    height: 3.3rem;
    margin-bottom: .18rem;
  }

  .hot {
    width: 100%;
    height: 2rem;
    background: #fff;
    padding: .18rem;

    .hotImg {
      width: 3.48rem;
      height: 1.7rem;
      border-radius: .1rem;
      background: #C02C28;
    }
  }

  .shopList {
    background: #EEEFF0;
    padding: .18rem 0;

    .shopItem {
      background: #fff;
      margin: .09rem 0;

      .title {
        padding: 0 .2rem;
        border-bottom: 1px solid #eee;
        height: .66rem;

        .xian {
          width: .06rem;
          height: .3rem;
          background: #C02C28;
          border-radius: .1rem;
          margin-right: .1rem;
        }

        .titleFont {
          color: #282828;
          font-size: .32rem;
        }

        .icon_right {
          width: .13rem;
          height: .25rem;
          margin-left: .14rem;
        }
      }

      .shopContent {
        padding: .24rem;

        img {
          width: 1.9rem;
          height: 1.9rem;
          border: 1px solid #999;
        }

        .shopMsg {
          padding-left: .6rem;

          .price {
            font-size: .24rem;
            color: #C02C28;
          }
        }

      }

    }
  }

  .cat_list {
    padding: 0 .27rem;
    flex-wrap: wrap;

    li {
      width: 3.39rem;
      margin-bottom: .18rem;
      background: #fff;

      img {
        width: 100%;
        height: 3.39rem;
      }

      .price {
        font-size: .24rem;
        color: #C02C28;
      }

      .catName {
        font-size: .2rem;
        padding: .22rem;
        color: #282828;
        width: 3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .xiaoliang {
        font-size: .16rem;
        color: #666;
        margin-left: .1rem;
      }

      .che {
        width: .22rem;
        height: .22rem;
      }
    }
  }

  .bg_red {
    background: #C02C28;
  }
</style>