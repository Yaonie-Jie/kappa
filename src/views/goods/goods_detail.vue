<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell class="goodMsg">
        <div class="goods-price">￥{{ goods.price }}</div>
        <div class="goods-title">{{ goods.title }}</div>
      </van-cell>
    </van-cell-group>

    <div class="flex-row selectSize" @click="showSku">
      <div class="flex-grow-1 flex-row">
        <div class="flex-grow-0 selectFont">选择</div>
        <div class="flex-grow-1 sizeFont">颜色，尺码</div>
      </div>
      <div class="flex-grow-0 flex-y-center">
        <van-icon name="ellipsis" size="20px" />
      </div>
    </div>

    <div class="flex-col selectSize">
      <div class="flex-row">
        <div class="flex-grow-1 flex-row">
          <div class="flex-grow-0 selectFont">配送</div>
          <div class="flex-grow-1 sizeFont">杭州 至 北京市东城区</div>
        </div>
        <div class="flex-grow-0 flex-y-center">
          <van-icon name="ellipsis" size="20px" />
        </div>
      </div>
      <div class="flex-row freeShip">{{goods.express}}</div>
    </div>



    <van-goods-action>
      <van-goods-action-big-btn @click="sorry" class="greenBut">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry" class="redBut">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>

    <van-sku v-model="showBase" :sku="sku.sku" :goods="sku.goods" :goods-id="goods.goodsId" :hide-stock="sku.hide_stock"
      :quota="sku.quota" :quota-used="sku.quotaUsed" :reset-stepper-on-hide="sku.resetStepperOnHide"
      :reset-selected-sku-on-hide="sku.resetSelectedSkuOnHide" :close-on-click-overlay="sku.closeOnClickOverlay"
      :disable-stepper-input="sku.disableStepperInput" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />


  </div>
</template>

<script>
  import Vue from "vue";
  import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
  } from 'vant';
  import api from "@/utils/api";
  import {
    Sku
  } from 'vant';

  Vue.use(Sku);

  export default {
    components: {
      [Tag.name]: Tag,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionBigBtn.name]: GoodsActionBigBtn,
      [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },
    data() {
      return {
        showBase: false,
        goods: {
          goodsId: '',
          title: '',
          price: 0,
          express: '',
          thumb: []
        },
        sku: {
          sku: {},
          goods: {},
          hide_stock: true,
          quota: 0,
          quotaUsed: 0,
          resetStepperOnHide: false,
          resetSelectedSkuOnHide: false,
          closeOnClickOverlay: true,
          disableStepperInput: true,
        },
        subgoods_list: []
      };
    },
    created() {
      this.goods.goodsId = this.$route.query.id
      this.init()
    },
    methods: {
      init() {
        this.axios.get(api.goods + this.goods.goodsId + '/').then(res => {
          this.subgoods_list = res.subgoods_list
          //规格
          var subList = []
          let subList2 = []
          let subList3 = []
          let tmpsubList2 = res.subgoods_list[0].sizegoods_list
          for (var i = 0; i < res.subgoods_list.length; i++) {
            subList.push({
              id: res.subgoods_list[i].color.id, // skuValueId：规格值 id
              name: res.subgoods_list[i].color.desc, // skuValueName：规格值名称
              imgUrl: res.subgoods_list[i].image_url, // 规格类目图片，只有第一个规格类目可以定义图片
            })
            for (let w = 0; w < tmpsubList2.length; w++) {
              subList3.push({
                id: res.subgoods_list[i].color.id + tmpsubList2[w].size.id,
                s1: res.subgoods_list[i].color.id,
                s2: tmpsubList2[w].size.id,
                price: tmpsubList2[w].price,
                stock_num: 10 // 当前 sku 组合对应的库存
              })
            }
          }
          for (let w = 0; w < tmpsubList2.length; w++) {
            subList2.push({
              id: tmpsubList2[w].size.id,
              name: tmpsubList2[w].size.desc
            })
          }
          console.log(subList3)

          //图片
          var photoList = []
          for (var i = 0; i < res.images.length; i++) {
            photoList.push(res.images[i].image_url)
          }
          this.goods.thumb = photoList
          this.goods.title = res.name
          this.goods.price = res.price
          this.goods.express = res.ship_desc

          var skulist = {
            // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
            // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
            tree: [{
              k: '颜色', // skuKeyName：规格类目名称
              v: subList,
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }, {
              k: '尺寸', // skuKeyName：规格类目名称
              v: subList2,
              k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }],
            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
            list: subList3,
            price: res.price, // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: false, // 是否无规格商品
            hide_stock: true // 是否隐藏剩余库存
          }

          // this.setSku(res.subgoods_list[0])

          var goodsList = {
            // 商品标题
            title: res.name,
            // 默认商品 sku 缩略图
            picture: photoList[0]
          }

          this.sku.sku = skulist
          this.sku.goods = goodsList
        });
      },
      // formatPrice() {
      //   return '¥' + (this.goods.price / 100).toFixed(2);
      // },
      onClickCart() {
        // this.showBase=true
        this.$router.push('cart');
      },
      showSku() {
        this.showBase = true
      },
      sorry() {
        Toast('暂无后续逻辑~');
      },
      onBuyClicked(e) {
        console.log(e)
      },
      onAddCartClicked() {},
      setSku(pro) {
        console.log(pro)
      },
      setGoods() {

      }
    }
  };
</script>

<style lang="less" scoped>
  .goods {
    padding-bottom: 50px;

    .greenBut {
      background: #5BC36D !important;
      border: 0 !important;
    }

    .redBut {
      background: #C02C28 !important;
      border: 0 !important;
    }

    // .goodMsg {
    //   height: 3.2rem !important;
    // }

    .selectSize {
      padding: 5px 15px;
      border-bottom: 1px solid #ebedf0;
    }

    .selectFont {
      font-size: .28rem;
      color: #666;
      padding-right: 0.2rem;
      line-height: .9rem;
    }

    .sizeFont {
      font-size: .28rem;
      color: #282828;
      line-height: .9rem;
    }

    .freeShip {
      font-size: .24rem;
      color: #666;
      // line-height: .3rem;
      padding-left: 0.8rem;
    }

    &-swipe {
      height: 7.5rem !important;

      img {
        width: 100%;
        display: block;
      }
    }

    &-title {
      font-size: 16px;
    }

    &-price {
      color: #f44;
    }

    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }

    &-cell-group {
      margin: 15px 0;

      .van-cell__value {
        color: #999;
      }
    }

    &-tag {
      margin-left: 5px;
    }
  }


</style>