<template>
    <div class="content flex flex-col">
        <div class="status">
            <span v-if="order_detail.trade_status == 0">交易关闭</span>
            <span v-if="order_detail.trade_status == 1">等待付款</span>
            <span v-if="order_detail.trade_status == 2">待发货</span>
            <span v-if="order_detail.trade_status == 3">已发货</span>
            <span v-if="order_detail.trade_status == 4">交易成功</span>
            <span v-if="order_detail.trade_status == 5">发货失败</span>
        </div>

        <div class="address flex-row flex-y-center">
            <img src="~images/address.png" class="flex-grow-0">
            <div class="flex-col flex-grow-1">
                <div style="padding:.2rem 0;">收货人：{{order_detail.signer_name}} <span style="padding-left:.5rem;">{{order_detail.singer_mobile}}</span>
                </div>
                <div>收获地址：{{order_detail.address_province+order_detail.address_city+order_detail.address_district+order_detail.address_detail}}</div>
            </div>
        </div>

        <div class="shopNumTitle flex-y-center">{{order_detail.order_goods_list.length}}件商品</div>

        <div class="flex-col shopList">
            <div class="commodity flex-row flex-y-center" v-for="(i,index) in order_detail.order_goods_list" :key="index">
                <div class="flex-grow-0 flex-y-center flex-x-center shopImg">
                    <img :src="i.goods.goods_front_image_url" alt="">
                </div>
                <div class="flex-grow-1 flex-x-center flex-col shopMsg">
                    <div class="shopTitle">{{i.goods.name}}</div>
                    <div class="flex-row shop_color_price">
                        <div class="flex-grow-1 flex-col">
                            <div class="shopColor">{{i.colorName}} {{i.sizeName}}</div>
                        </div>
                        <div class="flex-grow-0 flex-y-center">
                            <div class="shopPrice">￥{{i.goods.discount_price}}</div>
                        </div>
                    </div>
                    <div class="shop_num">X{{i.goods_num}}</div>
                </div>
            </div>
        </div>

        <div class="flex-x-between shop_div flex-y-center">
            <div>商品合计</div>
            <div>￥{{order_detail.order_mount}}</div>
        </div>
        <div class="flex-x-between shop_div flex-y-center">
            <div>运费</div>
            <div>{{order_detail.post_fee}}</div>
        </div>
        <div class="flex-x-between shop_div flex-y-center">
            <div>订单编号</div>
            <div>{{order_detail.order_sn}}</div>
        </div>
        <div class="flex-x-between shop_div flex-y-center">
            <div>下单时间</div>
            <div>{{new Date(order_detail.add_time).toLocaleString()}}</div>
        </div>
 
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex";
    import api from "@/utils/api";

    export default {
        data() {
            return {
                order_detail: {},
            }
        },
        created: function () {
            this.order_detail = JSON.parse(sessionStorage.getItem('order_detail'))
            console.log(this.order_detail)
            this.init()
        },
        methods: {
            ...mapActions(["showMsg"]),
            init() {

            },

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .selectAddress {
        width: 7.5rem;
        height: 1rem;
        background: rgba(255, 255, 255, 1);
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
        font-weight: 600;
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

    .shop_div {
        width: 7.5rem;
        height: .9rem;
        background: #fff;
        margin-top: 0.02rem;
        padding: 0 .25rem;
        font-size: .27rem;
        color: #343434;
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

    .status {
        width: 100%;
        height: 1.5rem;
        background: #EC3539;
        color: #fff;
        text-align: center;
        line-height: 1.5rem;
        font-size: .36rem;
    }

    .address {
        width: 100%;
        height: 1.5rem;
        background: #fff;
        margin: .2rem 0;

        img {
            width: .32rem;
            height: .4rem;
            margin-left: .27rem;
            margin-right: .1rem;
        }
    }
</style>