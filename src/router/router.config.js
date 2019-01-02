import Vue from "vue";
import Router from "vue-router";
import routerMap from "./router";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routerMap
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "kappa";
  // 判断页面是否需要登录才能访问，是的话没登陆的去登陆
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        name: "login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;