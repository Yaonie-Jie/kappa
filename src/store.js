import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    direction: "forward",
    token: localStorage.getItem('token'),
    loading: false,
    msg: {
      show: false,
      content: ""
    },
    clickTab: 'home',
    tabbarShow: true,
  },
  mutations: {
    UPDATE_DIRECTION(state, direction) {
      state.direction = direction;
    },
    UPDATE_clickTab(state, data) {
      state.clickTab = data;
    },
    SHOW_MSG(state, data) {
      state.msg = {
        show: true,
        content: data
      };
    },
    HIDE_MSG(state) {
      state.msg.show = false;
    },
    UPDATE_LOADING(state, status) {
      state.loading = status;
    },
    SHOW_TABBAR(state) {
      state.tabbarShow = true;
    },
    HIDE_TABBAR(state) {
      state.tabbarShow = false;
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },

  actions: {
    showMsg({
      commit
    }, data) {
      commit("SHOW_MSG", data);
    },
    hideMsg({
      commit
    }) {
      commit("HIDE_MSG");
    },
    updata_clickTab({
      commit
    }, data) {
      commit("UPDATE_clickTab", data);
    },
    showTab({
      commit
    }, data) {
      commit("SHOW_TABBAR", true);
    },
    hideTab({
      commit
    }) {
      commit("HIDE_TABBAR", false);
    },
    toggleLoading({
      commit
    }, data) {
      let loadingTimer;
      let _this = this;
      clearTimeout(loadingTimer);
      let flag = data.flag;
      let timeout = data.duration || 15000;
      commit("UPDATE_LOADING", flag);
      loadingTimer = setTimeout(() => {
        if (_this.state.loading == true) {
          commit("UPDATE_LOADING", false);
          commit("SHOW_MSG", "请求超时,请重试");
        }
      }, timeout);
    }
  }
});