<template>
  <div id="app">

    <transition :name="transition">
      <router-view></router-view>
    </transition>

    <loading></loading>
    <msg></msg>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import msg from "@/components/msg";
  import loading from "@/components/loading";
  import tabbar from "@/components/tabbar";
  import {
    mapState,
    mapActions
  } from "vuex";

  export default {
    data: function () {
      return {
        transition: 'fade',
        navPath: ['home', 'my', 'helpCenter', 'appIndex'],
      };
    },
    mounted: function () {
      this.timeStampEnter = +new Date();
    },
    components: {
      msg: msg,
      loading: loading,
      tabbar: tabbar
    },
    computed: {
      direction: state => store.state.direction,
      bottomShow: state => state.tabbarShow
    },
    methods: {
      ...mapActions(["hideTab","showTab"])

    },
    watch: {
      '$route'(to, from) {
        let navIndex = this.navPath.indexOf(to.name);
        if (navIndex == -1) {
          this.hideTab();
        } else {
          this.showTab();
        };
      }
    },
  };
</script>
<style lang="less">
  #app {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    overflow: auto;
  }

  .content {
    width: 100%;
    min-height: 100vh;
    padding-bottom: .98rem;

  }
</style>