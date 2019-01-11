<template>
    <div class="content flex flex-y-center">
        <div class="flex-col flex-y-center registerContent">
            <div class="register_input">
                <input type="text" pattern="[0-9]*" maxlength="11" placeholder="请输入您的手机号" v-model="iphone">
            </div>
            <div class="code_input flex-row flex-y-center">
                <input type="number" maxlength="6" pattern="[0-9]*" class="flex-grow-1" placeholder="请输入您的验证码" v-model="verfCode">
                <div class="flex-grow-0 getCode" @click="getCode">{{codeText}}</div>
            </div>
            <div class="register_input">
                <input type="password" maxlength="6" pattern="[0-9]*" placeholder="请输入密码" v-model="password">
            </div>
            <div class="register_submit" @click="register">注册</div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import api from "@/utils/api";
    import {
        Toast
    } from 'vant';
    Vue.use(Toast);
    export default {
        data: function () {
            return {
                codeText: '获取验证码',
                iphone: '',
                verfCode: '',
                time: 60,
                password: '',
                iphonetest: /^1(3|4|5|6|7|8|9)\d{9}$/,
                isdisabled: true
            };
        },
        mounted: function () {},
        methods: {
            getCode() {
                if (this.isdisabled) {
                    if (this.iphone && this.iphonetest.test(this.iphone)) {
                        this.setTime()
                        this.isdisabled = false
                        this.axios.post(api.getMessage, {
                            mobile: this.iphone,
                        }).then(res => {

                        });
                    } else {
                        Toast('请输入正确的手机号');
                    }
                }
            },
            setTime() {
                let _this = this;
                setInterval(() => {
                    if (_this.time > 0) {
                        _this.codeText = _this.time + "s";
                        _this.time--;
                         _this.isdisabled = false
                    } else {
                        _this.codeText = "获取验证码";
                        _this.time = 60;
                        _this.isdisabled = true;
                    }
                }, 1000);
            },
            register() {
                if (this.iphone && this.iphonetest.test(this.iphone) && this.verfCode && this.password) {
                    this.axios.post(api.getMessage, {
                        username: this.iphone,
                        password: this.password,
                        code: this.verfCode,
                        mobile: this.iphone,
                    }).then(res => {

                    }).catch(function (error) {
                        Toast(error);
                    });
                }

            }

        }
    };
</script>
<style <style lang="less" scoped>
    .content {
        background: #F4F4F4 !important;

        .registerContent {
            width: 7.5rem;
            padding: .85rem;
            background: #f4f4f4;
            color: #999;
            font-size: .36rem;
        }

        .code_input {
            height: 1.03rem;
            width: 100%;
            border-bottom: solid #999 1px;

            input {
                background: #f4f4f4;
            }

            .getCode {
                width: 1.69rem;
                height: .51rem;
                border: 1px solid rgba(242, 87, 124, 1);
                border-radius: .26rem;
                color: #C02C28;
                font-size: .26rem;
                line-height: .51rem;
                text-align: center;
            }
        }

        .register_input {
            height: 1.03rem;
            width: 100%;

            input {
                width: 100%;
                height: 100%;
                border: none;
                border-bottom: solid #999 1px;
                font-size: .36rem;
                color: #999;
                background: #f4f4f4;
            }
        }

        .register_submit {
            width: 100%;
            height: .98rem;
            background: rgba(192, 44, 40, 1);
            color: #fff;
            font-size: .36rem;
            margin-top: 1.07rem;
            line-height: .98rem;
            text-align: center;
        }
    }
</style>