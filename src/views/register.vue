<template>
    <div class="content flex flex-y-center">
        <div class="flex-col flex-y-center registerContent">
            <div class="register_input">
                <input type="number" placeholder="请输入您的手机号">
            </div>
            <div class="code_input flex-row flex-y-center">
                <input type="number" class="flex-grow-1" placeholder="请输入您的验证码">
                <div class="flex-grow-0 getCode">获取验证码</div>
            </div>
            <div class="register_input">
                <input type="password" placeholder="请输入密码">
            </div>
            <div class="register_submit">注册</div>
        </div>
    </div>
</template>
<script>
    import api from "@/utils/api";
    export default {
        data: function () {
            return {

            };
        },
        mounted: function () {},
        methods: {

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
            color:#fff;
            font-size:.36rem;
            margin-top:1.07rem;
            line-height: .98rem;
            text-align: center;
        }
    }
</style>