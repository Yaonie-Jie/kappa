<template>
    <div class="content flex flex-col">
        <div class="address flex-row flex-y-center" v-for="(i,index) in list" :key="index">
            <div class="flex-grow-1 flex-col flex-x-center">
                <div>{{i.name}} {{i.tel}}</div>
                <div class="address_font">{{i.address}}</div>
            </div>
            <div class="flex-grow-0 flex-y-center address_edit flex-x-end">
                <img src="~images/edit.png" alt="">
            </div>
        </div>

        <div class="addAddress" @click="addAddreaa">新增地址</div>
    </div>
</template>

<script>
    import Vue from "vue";
    import {
        mapState,
        mapActions
    } from "vuex";


    export default {
        data() {
            return {
                list: [{
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ]
            }
        },
        mounted: function () {},
        methods: {
            ...mapActions(["showMsg"]),
            addAddreaa(){
                 this.$router.push({
                    name: "address_add"
                });
            }

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .address {
        width: 7.5rem;
        height: 1.5rem;
        background: #fff;
        font-size: .28rem;
        padding: 0 .27rem;
        margin: 0.02rem 0;
        line-height: .4rem;
        color: #666;

        .address_font {
            color: #999;
        }

        .address_edit {
            width:0.97rem;
            height:0.9rem;
            border-left:solid #e1e1e1 1px;
            margin-left:0.2rem;
            img{
                height:.45rem;
                width:.45rem;
            }
        }
    }
    .addAddress{
        width:7.5rem;
        height:.97rem;
        color:#fff;
        background: #C02C28;
        text-align: center;
        line-height: .97rem;
        position:fixed;
        bottom:0;
    }
</style>