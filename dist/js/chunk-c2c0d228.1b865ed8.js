(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2c0d228"],{"1c2c":function(t,c,a){"use strict";a.r(c);var n,i=function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("div",{staticClass:"goods"},[a("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,function(t){return a("van-swipe-item",{key:t},[a("img",{attrs:{src:t}})])}),1),a("van-cell-group",[a("van-cell",[a("div",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))]),a("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))])])],1),t._m(0),a("van-cell-group",{staticClass:"goods-cell-group"},[a("van-cell",{attrs:{title:"选择   颜色，尺码","is-link":""},on:{click:t.sorry}},[a("van-icon",{staticClass:"custom-icon",attrs:{slot:"right-icon",name:"ellipsis"},slot:"right-icon"})],1)],1),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"chat"},on:{click:t.sorry}},[t._v("\n      客服\n    ")]),a("van-goods-action-mini-btn",{attrs:{icon:"cart"},on:{click:t.onClickCart}},[t._v("\n      购物车\n    ")]),a("van-goods-action-big-btn",{on:{click:t.sorry}},[t._v("\n      加入购物车\n    ")]),a("van-goods-action-big-btn",{attrs:{primary:""},on:{click:t.sorry}},[t._v("\n      立即购买\n    ")])],1)],1)},s=[function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("div",{staticClass:"flex-row"},[a("div",{staticClass:"flex-grow-1 flex-row"},[a("div",{staticClass:"flex-grow-0"},[t._v("选择")]),a("div",{staticClass:"flex-grow-1"},[t._v("颜色，尺码")])]),a("div",{staticClass:"flex-grow-0"},[t._v("2")])])}],e=a("ade3"),o=(a("cadf"),a("551c"),a("097d"),a("b970")),r={components:(n={},Object(e["a"])(n,o["k"].name,o["k"]),Object(e["a"])(n,o["d"].name,o["d"]),Object(e["a"])(n,o["h"].name,o["h"]),Object(e["a"])(n,o["b"].name,o["b"]),Object(e["a"])(n,o["c"].name,o["c"]),Object(e["a"])(n,o["i"].name,o["i"]),Object(e["a"])(n,o["j"].name,o["j"]),Object(e["a"])(n,o["e"].name,o["e"]),Object(e["a"])(n,o["f"].name,o["f"]),Object(e["a"])(n,o["g"].name,o["g"]),n),data:function(){return{goods:{title:"美国伽力果（约680g/3个）",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},created:function(){this.id=this.$route.query.id},methods:{formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onClickCart:function(){this.$router.push("cart")},sorry:function(){Object(o["l"])("暂无后续逻辑~")}}},l=r,d=(a("7a8d"),a("2877")),u=Object(d["a"])(l,i,s,!1,null,null,null);u.options.__file="goods_detail.vue";c["default"]=u.exports},"7a8d":function(t,c,a){"use strict";var n=a("bc61"),i=a.n(n);i.a},bc61:function(t,c,a){}}]);