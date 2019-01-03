<template>
    <div class="content flex flex-col">
        <div class="addAddress_row">
            <input type="text" placeholder="收货人姓名(请使用真实姓名）">
        </div>
        <div class="addAddress_row">
            <input type="text" placeholder="手机号码">
        </div>
        <div class="addAddress_row">
            <input type="text" placeholder="所在地区">
        </div>
        <div class="addAddress_row">
            <input type="text" placeholder="详细地址">
        </div>

        <div class="addAddress_row flex-row">
            <div class="flex-grow-1"></div>    
            <div class="flex-grow-0"></div>           
        </div>


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

            }
        },
        mounted: function () {},
        methods: {
            ...mapActions(["showMsg"]),
            // onSave() {
            //     Toast('save');
            // },
            // onDelete() {
            //     Toast('delete');
            // },
            // onChangeDetail(val) {
            //     if (val) {
            //         this.searchResult = [{
            //             name: '黄龙万科中心',
            //             address: '杭州市西湖区'
            //         }];
            //     } else {
            //         this.searchResult = [];
            //     }
            // }

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .addAddress_row {
        width: 7.5rem;
        height: .9rem;
        background: #fff;
        padding: 0 .29rem;
        font-size: .28rem;
        color: #999;
        margin-bottom: 0.02rem;

        input {
            width: 100%;
            height: 100%;
        }
    }
</style>