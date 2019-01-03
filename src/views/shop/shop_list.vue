<template>
    <div class="content flex flex-col">
        <div class="flex-col shopList">
            <div class="commodity flex-row flex-y-center" v-for="(i,index) in shopList" :key="index">
                <div class="flex-grow-0 flex-y-center checkBut">
                    <van-checkbox v-model="i.checked" checked-color="#5BC36D" ref="checkboxes" @change="checkChange(i)" />
                </div>
                <div class="flex-grow-0 flex-y-center flex-x-center shopImg">
                    <img :src="i.goods.goods_front_image_url" alt="">
                </div>
                <div class="flex-grow-1 flex-x-center flex-col shopMsg">
                    <div class="shopTitle">{{i.goods.name}}</div>
                    <div class="flex-row">
                        <div class="flex-grow-1 flex-col">
                            <div class="shopColor">{{i.color_name}} {{i.size_name}}</div>
                            <div class="shopPrice">￥{{i.goods.discount_price}}</div>
                        </div>
                        <div class="flex-grow-0 flex-y-center">
                            <van-stepper v-model="i.nums" @plus="plusStep(i,index)" @minus="minusStep(i,index)"
                                disable-input />
                        </div>
                    </div>
                </div>
            </div>
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
    import Vue from "vue";
    import api from "@/utils/api";
    import {
        mapState,
        mapActions
    } from "vuex";
    import {
        Checkbox,
        CheckboxGroup
    } from 'vant';
    Vue.use(Checkbox).use(CheckboxGroup);
    import {
        Stepper
    } from 'vant';
    Vue.use(Stepper);
    import {
        SubmitBar
    } from 'vant';
    Vue.use(SubmitBar);

    export default {
        data() {
            return {
                shopList: [],
                totlaPrice: 0,
                goodNum: 0,
            }
        },
        mounted: function () {
            this.axios.get(api.addshopcarts).then(res => {
                for (var i = 0; i < res.length; i++) {
                    res[i].checked = false
                }
                this.shopList = res
            });
        },
        methods: {
            ...mapActions(["showMsg"]),
            goOrderList(item) {
                this.navType = item.id
            },
            checkChange(event) {
                if (event.checked == true) {
                    this.totlaPrice += (event.goods.discount_price) * (event.nums)
                    this.goodNum++
                } else if (event.checked == false) {
                    this.totlaPrice -= (event.goods.discount_price) * (event.nums)
                    this.goodNum--
                }
            },
            plusStep(event, index) {
                console.log(event)
                this.axios.patch(api.addshopcarts + event.goods.id + '/', {
                    nums: event.nums+1,
                    color: event.color,
                    size: event.size
                }).then(res => {
                    if (event.checked == true) {
                        this.totlaPrice += event.goods.discount_price
                        // this.goodNum++
                    }
                });
            },
            minusStep(event, index) {
                this.axios.patch(api.addshopcarts + event.goods.id + '/', {
                    nums: event.nums-1,
                    color: event.color,
                    size: event.size
                }).then(res => {
                    if (event.checked == true) {
                        this.totlaPrice -= event.goods.discount_price
                        // this.goodNum--
                    }
                });
            },
            changeStep(event, index) {
                this.axios.patch(api.addshopcarts + event.goods.id + '/', {
                    nums: event.nums,
                    color: event.color,
                    size: event.size
                }).then(res => {

                });
            },
            submitOrder() {
                this.$router.push({
                    name: "order_plance"
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .shopList {
        margin-bottom: 2rem;
    }

    .commodity {
        width: 7.5rem;
        height: 2.5rem;
        background: #fff;
        margin-bottom: .02rem;
    }

    .checkBut {
        padding: 0 .16rem 0 .29rem;
    }

    .shopImg {
        width: 1.86rem;
        height: 1.86rem;
    }

    .shopMsg {
        padding: 0 .23rem;

        .shopTitle {
            font-size: .26rem;
            color: #333;
            line-height: .38rem;
        }

        .shopColor {
            font-size: .24rem;
            color: #999;
            margin: .15rem 0;
        }

        .shopPrice {
            font-size: .24rem;
            color: #C02C28;
        }
    }

    .settelBut {
        height: .97rem;
        background: #fff;
        width: 7.5rem;
        padding-left: .24rem;
        line-height: .97rem;
        position: fixed;
        bottom: .98rem;

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