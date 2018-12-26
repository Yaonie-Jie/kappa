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
  import store from "./store";
  import msg from "@/components/msg";
  import loading from "@/components/loading";
  import tabbar from "@/components/tabbar";

  export default {
    data: function () {
      return {
        transition: 'fade'
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
      direction: state => store.state.direction
    },
    methods: {

    },
    watch: {
      '$route'(to, from) {

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