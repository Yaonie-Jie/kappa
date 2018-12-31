<template>
    <div class="content flex flex-col">
        <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
            :search-result="searchResult" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
    </div>
</template>

<script>
    import Vue from "vue";
    import {
        mapState,
        mapActions
    } from "vuex";
    import {
        AddressEdit
    } from 'vant';
    Vue.use(AddressEdit);

    export default {
        data() {
            return {
                areaList,
                searchResult: []
            }
        },
        mounted: function () {},
        methods: {
            ...mapActions(["showMsg"]),
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }

        }
    };
</script>

<style lang="less" scoped>
    .content {
        background: #eee;
    }
</style>