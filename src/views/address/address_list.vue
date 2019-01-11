<template>
    <div class="content flex flex-col">
        <div class="address flex-row flex-y-center" v-for="(i,index) in list" :key="index" @click="toOrder(i)">
            <div class="flex-grow-1 flex-col flex-x-center">
                <div>{{i.signer_name}} {{i.signer_mobile}}</div>
                <div class="address_font">{{i.province+i.city+i.district}}</div>
            </div>
            <div class="flex-grow-0 flex-y-center address_edit flex-x-end" @click="updataAddress(i)">
                <img src="~images/edit.png" alt="">
            </div>
        </div>

        <div class="addAddress" @click="addAddreaa">新增地址</div>
    </div>
</template>

<script>
    import Vue from "vue";
    import api from "@/utils/api";

    import {
        mapState,
        mapActions
    } from "vuex";


    export default {
        data() {
            return {
                list: [],
                submitList: []
            }
        },
        mounted: function () {
            this.init()
            // this.submitList = JSON.parse(this.$route.query.submitList)
        },
        methods: {
            ...mapActions(["showMsg"]),
            init() {
                this.axios.get(api.address).then(res => {
                        this.list = res
                    });
            },
            addAddreaa() {
                this.$router.push({
                    name: "address_add"
                });
            },
            toOrder(i) {
                this.$router.push({
                    name: "order_plance",
                    query: {
                        id: JSON.stringify(i)
                    }
                });
            },
            updataAddress(i) {
                this.$router.push({
                    name: "address_add",
                    query: {
                        id: JSON.stringify(i)
                    }
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
            width: 0.97rem;
            height: 0.9rem;
            border-left: solid #e1e1e1 1px;
            margin-left: 0.2rem;

            img {
                height: .45rem;
                width: .45rem;
            }
        }
    }

    .addAddress {
        width: 7.5rem;
        height: .97rem;
        color: #fff;
        background: #C02C28;
        text-align: center;
        line-height: .97rem;
        position: fixed;
        bottom: 0;
    }
</style>