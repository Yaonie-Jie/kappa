(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dfcc8a"],{"7c15":function(s,e,t){"use strict";e["a"]={login:"/login/",bannerList:"/banners/",subbanners:"/subbanners/",indexgoods:"/indexgoods/",schools:"/schools/",goods:"/goods/",addshopcarts:"/shopcarts/",address:"/address/",orders:"/orders/",postfee:"/postfee/",getMessage:"/codes/"}},8170:function(s,e){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAADYElEQVRYhe3ZS4jddBTH8c+9jvWFYn0sfFTdtOLo+KJFLRR0dKH1sbDuRMVFDyIuFHwXUaHUqVVRN5Io7oqLolBBXdWFoK1a3biSIiiIDohPBB/tVBf/pGRu750b5ybXLuYHIcn5H5JvTs4/+f/Pv5Nlmf9TEXGYLc/zs/EOLsZe3BwRs9AdK10N5Xm+Ah9LsLAau/M8Px0mevyXYWVhP9gwy9H4FV8tALsGexweyPPwaZ7na6vAM7gDZzbLeZjuxSsD2ubwN47t03Yudnalp/kAj2gfVgHUVxHxOVbh+wEuqztZlm3C5sJwP97G79IrbFJd/IEfe+xX4J6IuLs0FJ3uE5zR4/tCJ8uyr6VwP45nGoYcppVSzp6CXRFxXdlQQH+EFYXptYjY2K0Ydo6TFOdjtwQL1+Z5vqtsjIhvsRazeCsiNpJeU6fwWTY+VqukyJ7aY5/uAz0ZERtKWyfLsv3SZ2yN9JFuWxfgQyxfwOd93FUAz9O4fxyTUl4uBAvTWN+voffH0aYmpTQ4sYbvi3i9X8O4gCelDlYLNiIeGNQ4jpS4UMrZk2r4LghL+8BT0kDm5Bq+24bB0m5KTEk5e3wN3+ci4uE6F20LeEpKg7qwD/Ua8zyfwDbMRsTW0t5GSlyifgd7th9soYuksc1MnueHUqpp4Esl2BNq+G6VRoiDVA4x5yrHjQJfJqXBcTV8Z/DoEJ8DxX6u2NAc8I3q5+wWPLbYGzUF/KB6kd2MTaPcqCngDVLuLqQteGLUG40CfFTl+CesMxh65MiWGgX4cuyonM9J0Ht6/J7SQGRLjQJ8Dm7DuxVbCf1Fcf50sTWmUSMMN+DNiv0ArkdI0W1UowBfVTm+VSoVnFWcf4dXR7j2QC0W+DRc02Nbh5tGwxmuxQ5+lkuday8+k2oI3+DPhrgGarHA+8xPibHpiKteDtMScNtaAm5bS8Btq6zAU5mGHCEqeaqM88qtrf+l/qNKng72l8auVDCGq8cMNEzTxX4Wv5TGCWyX5mTP4we8Jz1RxxiU53n19B9pbWV9wQPbI+LQEtyENBu4RaqK78Bv0uJJdQo0Ls1Jk9mycPglnqw6TEi5ciVewu2Fc51KY5s6iDdwX0TM61vlaO1n3ImXpZWdYzS/ElpHXfyFfRHRd/niX/2Iv2wPANS6AAAAAElFTkSuQmCC"},9919:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"content flex flex-col"},[s._l(s.list,function(e,d){return i("div",{key:d,staticClass:"address flex-row flex-y-center",on:{click:function(t){s.toOrder(e)}}},[i("div",{staticClass:"flex-grow-1 flex-col flex-x-center"},[i("div",[s._v(s._s(e.signer_name)+" "+s._s(e.signer_mobile))]),i("div",{staticClass:"address_font"},[s._v(s._s(e.province+e.city+e.district))])]),i("div",{staticClass:"flex-grow-0 flex-y-center address_edit flex-x-end",on:{click:function(t){s.updataAddress(e)}}},[i("img",{attrs:{src:t("8170"),alt:""}})])])}),i("div",{staticClass:"addAddress",on:{click:s.addAddreaa}},[s._v("新增地址")])],2)},d=[],n=t("be94"),a=t("7c15"),o=t("2f62"),c={data:function(){return{list:[],submitList:[]}},mounted:function(){this.init()},methods:Object(n["a"])({},Object(o["b"])(["showMsg"]),{init:function(){var s=this;this.axios.get(a["a"].address).then(function(e){s.list=e})},addAddreaa:function(){this.$router.push({name:"address_add"})},toOrder:function(s){this.$router.push({name:"order_plance",query:{id:JSON.stringify(s)}})},updataAddress:function(s){this.$router.push({name:"address_add",query:{id:JSON.stringify(s)}})}})},r=c,u=(t("cb12"),t("2877")),f=Object(u["a"])(r,i,d,!1,null,"ee92df92",null);f.options.__file="address_list.vue";e["default"]=f.exports},cb12:function(s,e,t){"use strict";var i=t("f4e0"),d=t.n(i);d.a},f4e0:function(s,e,t){}}]);