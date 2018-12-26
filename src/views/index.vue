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

    <ul class="nav flex-y-center">
      <li :class="{'active':navType==item.id}" v-for="(item,index) in navList" :key="index" @click="changeNav(item)">{{item.name}}</li>
    </ul>

    <banner></banner>

    <div class="hot flex-row flex-x-between">
      <div class="hotImg"></div>
      <div class="hotImg"></div>
    </div>

    <ul class="shopList flex-col">
      <li class="shopItem flex-col">
        <div class="title flex-row flex-y-center">
          <div class="xian flex-grow-0"></div>
          <div class="titleFont flex-grow-1">第二中学</div>
          <div class="f28 flex-grow-0" style="color:#666666;">更多</div>
          <img class="icon_right flex-grow-0" src="~images/icon_right.png" alt="">
        </div>
        <ul class=" flex-col">
          <li class="shopContent flex-row">
            <img src="~images/20150802102918_UZYdH.jpg" alt="">
            <div class="shopMsg flex-col flex-x-around">
              <div>KAPPA服装-长袖图案衫(珊瑚红)</div>
              <div class="price">
                <span>¥4534.00</span>
                <span style="color:#666;font-size:.18rem;padding-left:.1rem;">销量2039</span>
              </div>
            </div>
          </li>

          <li class="shopContent flex-row">
            <img src="~images/20150802102918_UZYdH.jpg" alt="">
            <div class="shopMsg flex-col flex-x-around">
              <div>KAPPA服装-长袖图案衫(珊瑚红)</div>
              <div class="price">
                <span>¥4534.00</span>
                <span style="color:#666;font-size:.18rem;padding-left:.1rem;">销量2039</span>
              </div>
            </div>
          </li>

                  <li class="shopContent flex-row">
            <img src="~images/20150802102918_UZYdH.jpg" alt="">
            <div class="shopMsg flex-col flex-x-around">
              <div>KAPPA服装-长袖图案衫(珊瑚红)</div>
              <div class="price">
                <span>¥4534.00</span>
                <span style="color:#666;font-size:.18rem;padding-left:.1rem;">销量2039</span>
              </div>
            </div>
          </li>
  
        </ul>
      </li>
    </ul>


  </div>
</template>

<script>
  import banner from "@/components/banner";

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
        navType: 1,
        navList: [{
          name: '首页',
          id: 1
        }, {
          name: 'shiqwe',
          id: 2
        }, {
          name: 'ffff',
          id: 3
        }],
      }
    },
    mounted: function () {},
    methods: {
      ...mapActions(["showMsg"]),
      changeNav(item) {
        this.navType = item.id
      }
    }
  };
</script>

<style lang="less" scoped>
  .content {
    padding-bottom: .98rem;
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

  .bg_red {
    background: #C02C28;
  }
</style>