export default [{
    path: "/login",
    name: "login",
    meta: {
      title: "登陆"
    },
    component: () => import("@/views/login.vue")
  },

  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/index.vue")
  },
  {
    path: "/my",
    name: "my",
    meta: {
      title: "我的"
    },
    component: () => import("@/views/my/index.vue"),
  },
  {
    path: "/orderList",
    name: "orderList",
    meta: {
      title: "我的订单"
    },
    component: () => import("@/views/my/orderList.vue"),
  },


];