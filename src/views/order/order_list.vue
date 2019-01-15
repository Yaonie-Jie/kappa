<template>
    <div class="content flex flex-col">
        <ul class="menu flex-row flex-x-around">
            <li class="flex-x-center flex-y-center" @click="goOrderList(item)" v-for="(item,index) in menuList" :key="index"
                :class="{'borderRed':trade_status==item.id}">{{item.name}}</li>
        </ul>
        <div class="flex-col">
            <div class="ordershow flex-col" v-for="item in list" :key="item.id">
                <div class="commodityMsg flex-row" v-for="i in item.order_goods_list" :key="i.id" @click="toOrderDetail(item)">
                    <div class="flex-grow-0 commodityImg">
                        <img :src="i.goods.goods_front_image_url" alt="">
                    </div>
                    <div class="flex-grow-1 commodityIntro flex-col flex-x-center">
                        <div class="commodityTitle">{{i.goods.name}}</div>
                        <div class="commoditySpeci flex-x-between ">
                            <div>已选：{{i.colorName +'-'+i.sizeName}}</div>
                            <div>X1</div>
                        </div>
                    </div>
                </div>
                <div class="commodityNum flex-x-end"> 共1件 金额:￥{{item.order_mount}}</div>
                <div class="commodityState flex-x-end">
                    <!-- <div class="operationBut">申请售后</div> -->
                    <div class="operationBut" v-if="item.pay_status == 'paying'" @click="cancal(item)">取消订单</div>
                    <a class="operationBut payBut" v-if="item.pay_status == 'paying'" :href="item.alipay_url">去支付</a>
                </div>
            </div>
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
                trade_status: '',
                menuList: [{
                    name: '全部',
                    id: ''
                }, {
                    name: '待付款',
                    id: 1
                }, {
                    name: '待发货',
                    id: 2
                }, {
                    name: '待收货',
                    id: 3
                }, {
                    name: '待评价',
                    id: 4
                }],
                list: []
            }
        },
        mounted: function () {
            this.trade_status = this.$route.query.id || ''
            this.init()
        },
        methods: {
            ...mapActions(["showMsg"]),
            init() {
                this.list = []
                this.axios
                    .get(api.orders, {
                        params: {
                            trade_status: this.trade_status
                        }
                    })
                    .then(res => {
                        res.forEach(item => {
                            let goods_list = item.order_goods_list
                            goods_list.forEach(goods => {
                                let color = goods.color
                                let size = goods.size
                                let sizeName = ''
                                let colorName = ''
                                let sub_list = goods.goods.subgoods_list
                                sub_list.forEach(sub => {
                                    if (color == sub.color.id) {
                                        colorName = sub.color.desc
                                        let size_list = sub.sizegoods_list
                                        size_list.forEach(siz => {
                                            if (size == siz.size.id) {
                                                sizeName = siz.size.desc
                                            }
                                        })
                                    }
                                })
                                goods.colorName = colorName
                                goods.sizeName = sizeName
                            })
                        })
                        this.list = res
                    });
            },
            goOrderList(item) {
                this.trade_status = item.id
                this.init()
            },
            toOrderDetail(i) {
                sessionStorage.setItem('order_detail',JSON.stringify(i))
                this.$router.push({
                    name: "order_detail",
                });
            },
            cancal(item) {
                this.axios
                    .delete(api.orders + item.id + '/')
                    .then(res => {
                        this.showMsg('取消订单成功')
                        this.init()
                    });
            }
        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .borderRed {
        border-bottom: #C02C28 solid 2px;
    }

    .menu {
        width: 7.5rem;
        height: 0.7rem;
        background: #fff;
    }

    .payBut {
        border: solid 1px #C02C28 !important;
        color: #C02C28 !important;
    }

    .ordershow {
        margin-top: 0.2rem;
        background: #fff;

        .commodityMsg {
            border-bottom: solid rgb(250, 250, 250) 1px;

            .commodityImg {
                width: 1.86rem;
                height: 1.86rem;
                margin: 0.14rem 0.26rem;
            }

            .commodityIntro {
                padding: 0 0.26rem;
            }

            .commodityTitle {
                font-size: 0.26rem;
                color: #333;
                font-weight: 400;
            }

            .commoditySpeci {
                margin-top: 0.16rem;
                color: #999999;
                font-size: 0.24rem;
            }
        }

        .commodityNum {
            line-height: 0.7rem;
            font-size: 0.24rem;
            color: #333;
            padding: 0 0.26rem;
            border-bottom: solid rgb(250, 250, 250) 1px;
        }

        .commodityState {
            padding: 0.13rem;

            .operationBut {
                width: 1.4rem;
                height: 0.5rem;
                border: 1px solid #999;
                border-radius: 0.25rem;
                color: #666;
                font-size: 0.24rem;
                line-height: 0.5rem;
                margin: 0 0.1rem;
                text-align: center;
            }
        }
    }
</style>