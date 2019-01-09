<template>
    <div class="content flex flex-col">
        <div class="addAddress_row">
            <input type="text" placeholder="收货人姓名(请使用真实姓名）" v-model="newAddress.receiveName">
        </div>
        <div class="addAddress_row">
            <input type="text" placeholder="手机号码" v-model="newAddress.phone">
        </div>
        <div class="addAddress_row">
            <div class="addrsss_select  flex-y-center" @click="addressSelect">{{showArea}}</div>
            <!-- <input type="text" placeholder="所在地区" @click="addressSelect" disabled> -->
        </div>
        <div class="addAddress_row">
            <input type="text" placeholder="详细地址" v-model="newAddress.addr">
        </div>

        <div class="addAddress_row default_row flex-row">
            <div class="flex-grow-1 flex-row flex-y-center">
                <div>设置为默认地址</div>
                <div class="litileFont">（注：每次下单时都会使用该地址）</div>
            </div>
            <div class="flex-grow-0 set_default flex-y-center flex-x-center">
                <van-switch v-model="checked" size=".24rem" active-color="#C02C28" inactive-color="#999" />
            </div>
        </div>

        <div class="addAddressBut">
            <div class="addressSubmit" @click="addAddress">确定</div>
        </div>


        <van-popup v-model="show" position="bottom" :overlay="true">
            <van-area :area-list="areaList" @cancel="cancelArea" @confirm="confirmArea" />
        </van-popup>

    </div>
</template>

<script>
    import api from "@/utils/api";
    import Vue from "vue";
    import area from "@/utils/area";
    import {
        mapState,
        mapActions
    } from "vuex";
    import {
        Switch
    } from 'vant';
    Vue.use(Switch);
    import {
        Area
    } from 'vant';
    Vue.use(Area);
    import {
        Popup
    } from 'vant';
    Vue.use(Popup);
    import {
        Toast
    } from 'vant';
    Vue.use(Toast);
    export default {
        data() {
            return {
                checked: true,
                areaList: area,
                show: false,
                showArea: '所在地区',
                newAddress: {
                    province: '', //省
                    city: '', // 市
                    area: '', // 区
                    receiveName: '', // 收件人姓名
                    addr: '', // 详细地址
                    phone: ''
                },
            }
        },
        mounted: function () {
            this.noAdd = 0
        },
        methods: {
            ...mapActions(["showMsg"]),
            addressSelect() {
                this.show = !this.show
            },
            cancelArea() {
                this.show = false
            },
            confirmArea(e) {
                this.showArea = ''
                for (var i = 0; i < e.length; i++) {
                    this.showArea += e[i].name + ' '
                }
                this.show = false
                this.newAddress.province = e[0].name
                this.newAddress.city = e[1].name
                this.newAddress.area = e[2].name
            },
            addAddress() {
                if (this.newAddress.receiveName == '') {
                    Toast('请输入收货人姓名');
                } else if (this.newAddress.phone == '') {
                    Toast('请输入手机号码');
                } else if (this.showArea == '所在地区') {
                    Toast('请选择所在地区');
                } else if (this.newAddress.addr == '') {
                    Toast('请输入详细地址');
                } else {
                    this.axios
                        .post(api.address, this.newAddress)
                        .then(res => {
                            Toast('添加成功');
                            this.$router.push({
                                name: "address_list"
                            });
                        });
                }
            },
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

        .addrsss_select {
            width: 100%;
            height: 100%;
        }
    }

    .default_row {
        margin-top: .18rem;

        .litileFont {
            font-size: .22rem;
            color: #999;
        }

        .set_default {
            width: .45rem;

        }
    }

    .addAddressBut {
        width: 7.5rem;
        height: .98rem;
        padding: 0 .26rem;
        margin: .18rem 0;
        font-size: .36rem;
        color: #fff;
        line-height: .98rem;
        text-align: center;

        .addressSubmit {
            width: 100%;
            height: 100%;
            background: #C02C28;
        }
    }
</style>