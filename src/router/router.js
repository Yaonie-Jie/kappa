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
    name: "home",
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
    path: "/order_list",
    name: "order_list",
    meta: {
      title: "我的订单"
    },
    component: () => import("@/views/order/order_list.vue"),
  },
  {
    path: "/address_add",
    name: "address_add",
    meta: {
      title: "新增收货地址"
    },
    component: () => import("@/views/address/address_add.vue"),
  },
  {
    path: "/address_list",
    name: "address_list",
    meta: {
      title: "收货地址"
    },
    component: () => import("@/views/address/address_list.vue"),
  },
  {
    path: "/goods_detail",
    name: "goods_detail",
    meta: {
      title: "商品详情"
    },
    component: () => import("@/views/goods/goods_detail.vue"),
  },
  {
    path: "/shop_list",
    name: "shop_list",
    meta: {
      title: "购物车"
    },
    component: () => import("@/views/shop/shop_list.vue"),
  },

  


];