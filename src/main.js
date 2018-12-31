import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.config";
import store from "./store";

import http from "./utils/http";

import "./assets/css/common.css";
import 'vant/lib/index.css';

import { Button } from 'vant';

Vue.use(Button);

import * as filter from "./filter/index";
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

Vue.prototype.axios = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");