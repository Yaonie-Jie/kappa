<template>
  <div class="login">
    <input class="mobile_input" type="text" v-model="mobile">
    <input type="text" v-model="password">
    <div class="login_btn" @click="login">登录</div>
  </div>
</template>
<script>
import api from "@/utils/api";

export default {
  data: function() {
    return {
      mobile: "17681858411",
      password:''
    };
  },
  mounted: function() {},
  methods: {
    // 暂时的登录
    login() {
      this.axios
        .post(api.login, {
          mobile: this.mobile,
          osType: "ios 100.8",
          password: this.password,
          phoneType: "iphone99"
        })
        .then(res => {});
    }
  }
};
</script>
<style <style lang="less" scoped>
.login {
  height: 100%;
  background: #fff;
  .mobile_input {
    width: 2rem;
    height: 1rem;
  }
}
</style>
