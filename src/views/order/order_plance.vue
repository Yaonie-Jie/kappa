<template>
    <div class="content flex flex-col">
        <div class="flex-row selectAddress">
            <div>1</div>
            <div>请填写收货地址</div>
            <div>2</div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex";

    export default {
        data() {
            return {

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

    .selectAddress {
        width: 7.5rem;
        height: .9rem;
        background: rgba(255, 255, 255, 1);
        line-height:.9rem;
        font-size:.27rem;
        color:#666;
    }
</style>