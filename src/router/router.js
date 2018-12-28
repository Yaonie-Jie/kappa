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
  {
    path: "/receiveAddress",
    name: "receiveAddress",
    meta: {
      title: "收货地址"
    },
    component: () => import("@/views/my/receiveAddress.vue"),
  },
  {
    path: "/addAddress",
    name: "addAddress",
    meta: {
      title: "收货地址"
    },
    component: () => import("@/views/my/addAddress.vue"),
  },
  {
    path: "/goodsMsg",
    name: "goodsMsg",
    meta: {
      title: "商品详情"
    },
    component: () => import("@/views/goods/goodsMsg.vue"),
  },

  


];