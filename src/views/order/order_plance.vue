<template>
    <div class="content flex flex-col">
        <div class="flex-row selectAddress flex-y-center" @click="goAddressList">
            <div class="flex-grow-0 select_address"><img src="~images/address.png" alt=""></div>
            <div class="flex-grow-1">请填写收货地址</div>
            <div class="flex-grow-0 select_lat"><img src="~images/right.png" alt=""></div>
        </div>

        <div class="border_floot">
            <img src="~images/border_floot.png" alt="">
        </div>

        <div class="shopNumTitle flex-y-center">{{goodNum}}件商品</div>

        <div class="flex-col shopList">
            <div class="commodity flex-row flex-y-center" v-for="(i,index) in submitList" :key="index">
                <div class="flex-grow-0 flex-y-center flex-x-center shopImg">
                    <img :src="i.goods.goods_front_image_url" alt="">
                </div>
                <div class="flex-grow-1 flex-x-center flex-col shopMsg">
                    <div class="shopTitle">{{i.goods.name}}</div>
                    <div class="flex-row shop_color_price">
                        <div class="flex-grow-1 flex-col">
                            <div class="shopColor">{{i.color_name}} {{i.size_name}}</div>
                        </div>
                        <div class="flex-grow-0 flex-y-center">
                            <div class="shopPrice">￥{{i.goods.discount_price}}</div>
                        </div>
                    </div>
                    <div class="shop_num">X{{i.nums}}</div>
                </div>
            </div>
        </div>

        <div class="flex-x-between shop_div flex-y-center">
            <div>商品合计</div>
            <div>￥{{totlaPrice}}</div>
        </div>
        <div class="flex-x-between shop_div flex-y-center">
            <div>运费</div>
            <div>免运费</div>
        </div>

         <div class="flex-row flex-x-between settelBut">
            <div class="flex-row">
                <div class="setLeftTitle">应付总额:</div>
                <div class="setPrice">￥{{totlaPrice}}</div>
            </div>
            <div class="flex-row">
                <div class="goodsNum">共{{goodNum}}件商品</div>
                <div class="goodsSubmit" @click="submitOrder">提交订单</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex";

    export default {
        data() {
            return {
                totlaPrice:0,
                goodNum:0,
                submitList:[],
            }
        },
        mounted: function () {
            this.submitList=JSON.parse(this.$route.query.submitList)
            this.goodNum=JSON.parse(this.$route.query.submitList).length
            this.getTotalPrice(this.submitList)
        },
        methods: {
            ...mapActions(["showMsg"]),
            goAddressList(){
                 this.$router.push({
                    name: "address_list"
                });
            },
            submitOrder(){

            },
            getTotalPrice(info){
                for(var i=0;i<info.length;i++){
                    if(info[i].checked==true){
                        this.totlaPrice+=(info[i].goods.discount_price)*(info[i].nums)
                    }
                }
            }

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .selectAddress {
        width: 7.5rem;
        height: .9rem;
        background: rgba(255, 255, 255, 1);
        line-height: .9rem;
        font-size: .27rem;
        color: #666;
        padding: 0 .26rem;

        .select_address {
            width: .25rem;
            height: .31rem;
            margin-right: .17rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .select_lat {
            width: .13rem;
            height: .24rem;
            margin-right: .17rem;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .border_floot {
        width: 7.5rem;
        height: .05rem;
        background: #fff;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .shopList {
        margin-bottom: 0.02rem;
    }

    .shopNumTitle {
        width: 7.5rem;
        height: .68rem;
        background: rgba(255, 255, 255, 1);
        color: #343434;
        font-size: .27rem;
        padding: 0 .23rem;
        margin-top: .27rem;
        font-weight: 400;
    }

    .commodity {
        width: 7.5rem;
        height: 2.5rem;
        background: #fff;
        margin-bottom: .02rem;
    }



    .shopImg {
        width: 1.86rem;
        height: 1.86rem;
        margin-left: .2rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .shopMsg {
        padding: 0 .23rem;

        .shopTitle {
            font-size: .26rem;
            color: #333;
            line-height: .38rem;
        }

        .shop_color_price {
            font-size: .24rem;
            padding: 0.3rem 0;

            .shopColor {
                color: #999;
            }

            .shopPrice {
                color: #C02C28;
            }
        }

        .shop_num {
            width: 100%;
            line-height: .3rem;
            font-size: .23rem;
            color: #333;
            padding-right: .1em;
            text-align: right;
        }


    }
    .shop_div{
        width:7.5rem;
        height:.9rem;
        background: #fff;
        margin-top:0.02rem;
        padding:0 .25rem;
        font-size:.27rem;
        color:#343434;
    }
     .settelBut {
        height: .97rem;
        background: #fff;
        width: 7.5rem;
        padding-left: .24rem;
        line-height: .97rem;
        position: fixed;
        bottom: 0;

        .setLeftTitle {
            font-size: .28rem;
            color: #333;
            font-weight: 400;
            margin-right: .12rem;
        }

        .setPrice {
            font-size: .24rem;
            color: #C02C28;
        }

        .goodsNum {
            font-size: .25rem;
            color: #999999;
            margin-right: .28rem;
        }

        .goodsSubmit {
            width: 2.5rem;
            height: .97rem;
            background: rgba(192, 44, 40, 1);
            color: #fff;
            font-size: .36rem;
            text-align: center;
        }

      
    }
</style>