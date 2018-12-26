<template>
    <div class="bottom-tab" v-show="bottomShow">
        <div class="bottom-item flex-col flex-x-center flex-y-center" v-for="item in clickItems" :key="item.name"
            @click="changeTab(item.name,item.url)">
            <div class="item-img">
                <img v-show="clickTab!==item.name" :src="item.src">
                <transition name="big-tab">
                    <img v-show="clickTab===item.name" :src="item.clicked">
                </transition>
            </div>
            <div class="item-text" :class="{item_click_text:clickTab===item.name}">
                {{item.text}}
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
        name: 'bottom',
        data() {
            return {
                clickItems: [{
                        name: 'home',
                        src: require("@/assets/images/shouye.png"),
                        clicked: require("@/assets/images/shouyered.png"),
                        text: '首页',
                        url: '/',
                    },
                    {
                        name: 'company',
                        src: require("@/assets/images/fenlei-3.png"),
                        clicked: require("@/assets/images/fenlei-3red.png"),
                        text: '学校',
                        url: '/baseIndex/company',
                    },
                    {
                        name: 'articles',
                        src: require("@/assets/images/gouwuche-2.png"),
                        clicked: require("@/assets/images/gouwuchered.png"),
                        text: '购物车',
                        url: '/baseIndex/articles',
                    },
                    {
                        name: 'my',
                        src: require("@/assets/images/wode.png"),
                        clicked: require("@/assets/images/wodered.png"),
                        text: '我的',
                        url: '/my',
                    },
                ],
            }
        },
        computed: mapState({
            bottomShow: state => state.tabbarShow,
            clickTab: state => state.clickTab,
        }),

        methods: {
            ...mapActions(["updata_clickTab"]),

            //切换底部按钮点击事件
            changeTab(name, url) {
                this.updata_clickTab(name);
                this.$router.push(url);
            }
        },
        watch: {
            '$route'(to) {}
        }
    }
</script>
<style lang="less" scoped>
    .bottom-tab {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: .98rem;
        background: #fff;
        display: flex;
        justify-content: space-around;

        .bottom-item {
            height: 100%;
            width: 100%;
            text-align: center;

            .item-img {
                width: .4rem;
                height: .4rem;
            }

            .item-text {
                color: #888888;
                font-size: 0.24rem;
                padding-top: .07rem;
            }

            .item_click_text {
                color: #C02C28;
            }

        }
    }

    .big-tab-enter-active {
        animation: bounce-in 0.5s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
        }
    }
</style>