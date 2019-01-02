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
    data: function () {
      return {
        mobile: "h5dev",
        password: 'TempPassword'
      };
    },
    mounted: function () {},
    methods: {
      // 暂时的登录
      login() {
        this.axios
          .post(api.login, {
            username: this.mobile,
            password: this.password
          })
          .then(res => {
            if (res.code == 0) {
              this.$store.commit("SET_TOKEN", res.token);
              this.$router.push({
                name: "home"
              });
            }
          });
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

  input {
    border: 1px solid red;
  }
</style>