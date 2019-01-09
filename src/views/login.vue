<template>
  <div class="content flex flex-col login">
    <div class="login_bg">
      <img src="~images/login_bg.png" alt="">
    </div>
    <div class="flex-col inputList">
      <div class="login_input">
        <input class="mobile_input" type="text" v-model="mobile" placeholder="用户名" />
      </div>
      <div class="login_input">
        <input type="text" v-model="password" placeholder="密码" />
      </div>
    </div>
    <div class="flex-col butList">
      <div class="login_but redBut" @click="login">立即登录</div>
      <div class="login_but" @click="register">创建账号</div>
    </div>
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
              localStorage.setItem('token',res.token)
              this.$store.commit("SET_TOKEN", res.token);
              this.$router.push({
                name: "home"
              });
            }
          });
      },
      register() {
        this.$router.push({
          name: "register"
        });
      }
    }
  };
</script>
<style <style lang="less" scoped>
  .content {
    background: #F4F4F4 !important;
  }

  .login_bg {
    height: 5.15rem;
  }

  .inputList {
    padding: 0 .84rem;

    .login_input {
      height: 1.03rem;

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
  }

  .butList {
    padding: 0 .85rem;
    margin-top: .74rem;
  }

  .login_but {
    width: 100%;
    height: .98rem;
    background: #f4f4f4;
    font-size: .36rem;
    color: #C02C28;
    border: solid #C02C28 1px;
    text-align: center;
    line-height: .98rem;
    margin: .27rem 0;
  }

  .redBut {
    background: rgba(192, 44, 40, 1);
    color: #fff;
  }
</style>