<template>
    <div class="content flex flex-col">
        
        <van-nav-bar title="标题" left-text="返回" right-text="新增地址" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <van-address-list v-model="chosenAddressId" :list="list" 
            @add="onAdd" @edit="onEdit" />
    </div>
</template>

<script>
    import Vue from "vue";
    import {
        mapState,
        mapActions
    } from "vuex";
    import {
        NavBar
    } from 'vant';
    Vue.use(NavBar);
    import {
        Toast
    } from 'vant';
    Vue.use(Toast);
    import {
        AddressList
    } from 'vant';

    Vue.use(AddressList);

    export default {
        data() {
            return {
                chosenAddressId: '1',
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
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            }

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }
</style>