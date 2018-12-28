<template>
    <div class="content flex flex-col">
       1234567
    </div>
</template>

<script>
    import {mapState,mapActions} from "vuex";

    export default {
        data() {
            return {
                navType: 2
            }
        },
        mounted: function () {
            
        },
        methods: {
            ...mapActions(["showMsg"]),
           
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
    .payBut{
        border:solid 1px #C02C28!important;
        color:#C02C28!important;
    }
    .ordershow {
        margin-top: 0.2rem;
        background: #fff;
        .commodityMsg {
            border-bottom: solid rgb(250,250,250) 1px;
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
                font-weight:400;
            }
            .commoditySpeci {
                margin-top: 0.16rem;
                color: #999999;
                font-size: 0.24rem;
            }
        }
        .commodityNum{
            line-height: 0.7rem;
            font-size:0.24rem;
            color:#333;
            padding:0 0.26rem;
            border-bottom: solid rgb(250,250,250) 1px;
        }
        .commodityState{
            padding:0.13rem;
            .operationBut{
                width:1.4rem;
                height:0.5rem;
                border:1px solid #999;
                border-radius:0.25rem;
                color:#666;
                font-size:0.24rem;
                line-height: 0.5rem;
                margin:0 0.1rem;
                text-align: center;
            }
        }
    }
</style>