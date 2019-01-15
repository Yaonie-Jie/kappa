<template>
    <div class="content flex flex-col">
        <div class="flex-row head">
            <img class="userIcon" src="~images/20150802102918_UZYdH.jpg" alt="">
            <div class="nickName">用户a</div>
        </div>
        <ul class="menu flex-row flex-x-around">
            <li class="flex-col flex-x-center flex-y-center" @click="goOrderList()">
                <img class="menuIcon" src="~images/dingdan.png" alt="">
                <span>全部订单</span>
            </li>
            <li class="flex-col flex-x-center flex-y-center" @click="goOrderList(1)">
                <img class="menuIcon" src="~images/weibiaoti2fuzhi04.png" alt="">
                <span>待付款</span>
            </li>
            <li class="flex-col flex-x-center flex-y-center" @click="goOrderList(2)">
                <img class="menuIcon" src="~images/daifahuo.png" alt="">
                <span>待发货</span>
            </li>
            <li class="flex-col flex-x-center flex-y-center" @click="goOrderList(3)">
                <img class="menuIcon" src="~images/daishouhuo.png" alt="">
                <span>待收货</span>
            </li>
            <div class="xian"></div>
        </ul>

        <ul class="carteList">
            <li class="flex-row flex-y-center" @click="goReceiveAddress">
                <img class="cartLeft flex-grow-0" src="~images/shouhuodizhi.png" alt="">
                <span class="flex-grow-1">收货地址</span>
                <img class="cartRight flex-grow-0" src="~images/icon_right.png" alt="">
            </li>
            <li class="flex-row flex-y-center">
                <img class="cartLeft flex-grow-0" src="~images/kefuzhongxin.png" alt="">
                <span class="flex-grow-1">客服中心</span>
                <img class="cartRight flex-grow-0" src="~images/icon_right.png" alt="">
            </li>
        </ul>



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
            },
            goOrderList(id) {
                this.$router.push({
                    name: "order_list",
                    query: {id:id}
                });
            },
            goReceiveAddress(){
                 this.$router.push({
                    name: "address_list"
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .head {
        width: 100%;
        height: 4.36rem;
        background: url("~images/myBg.png") no-repeat center center;
        background-size: contain;

        .userIcon {
            margin: .88rem .3rem .68rem .48rem;
            height: 1.22rem;
            width: 1.22rem;
            border-radius: 100px;
        }

        .nickName {
            margin-top: 1.3rem;
            color: #fff;
            font-size: .36rem;
        }

    }

    .menu {
        width: 7rem;
        height: 1.6rem;
        background: #fff;
        margin: -1.2rem auto .18rem auto;
        position: relative;
        border-radius: .1rem;

        .xian {
            width: 1px;
            height: .8rem;
            background: #eee;
            position: absolute;
            left: 1.8rem;
            top: .3rem;
        }

        span {
            color: #333;
            font-size: .26rem;
        }

        .menuIcon {
            width: .5rem;
            height: .5rem;
            margin-bottom: .2rem;
        }
    }

    .carteList {
        width: 7rem;
        background: #fff;
        margin: .1rem auto;
        border-radius: .1rem;

        li {
            height: .9rem;
            padding: 0 .31rem 0 .22rem;
            border-bottom: 1px solid #eee;

            .cartLeft {
                width: .35rem;
                height: .35rem;
                margin-right: .22rem;
            }

            .cartRight {
                width: .13rem;
                height: .25rem;
            }
        }
    }
</style>