<template>
    <div class="banner-container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
                    <img :src="item">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import api from "@/utils/api";

    export default {
        name: 'banner',
        data() {
            return {
                imgList: [
                    require("@/assets/images/20150802102918_UZYdH.jpg"),
                    require("@/assets/images/20150802102918_UZYdH.jpg")
                ],
                nowSwiper: '', //swiper对象
            }
        },
        activated() {

        },
        deactivated() {
            //keep-alive页面隐藏时销毁swiper
            try {
                this.nowSwiper.destroy(false);
            } catch (err) {
                console.log(err);
            }
        },
        mounted() {
            this.nowSwiper = new Swiper('.banner-container .swiper-container', {
                direction: 'horizontal',
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });

            this.axios
                .get(api.bannerList)
                .then(res => {
                    console.log(res)
                });
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="less" scoped>
    .banner-container {
        width: 100%;

        .swiper-container {
            height: 3.3rem;
            width: 100%;

            .swiper-wrapper {
                height: 100%;

                .swiper-slide {
                    height: 100%;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }

            .swiper-pagination-bullet {
                background: darkslateblue;
            }

            .swiper-pagination-bullet-active {
                background: #C02C28;
            }
        }
    }
</style>