<template>
    <div class="content flex flex-col">
        <div class="commodity flex-row">
            <div class="flex-grow-0">
                <van-checkbox v-model="checked" checked-color="#4b0" />
            </div>
            <div class="flex-grow-0">2</div>
            <div class="flex-grow-1">3</div>
        </div>
        <div class="commodity">

        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex";
    import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

    export default {
        data() {
            return {

            }
        },
        mounted: function () {
            this.navType = this.$route.query.id
        },
        methods: {
            ...mapActions(["showMsg"]),
            goOrderList(item) {
                this.navType = item.id
            }
        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }

    .commodity {
        width: 7.5rem;
        height: 2.5rem;
        background: #fff;
        margin-bottom: .01rem;
    }
</style>