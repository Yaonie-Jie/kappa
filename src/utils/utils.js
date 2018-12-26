// 判断ios系统还是android系统
function getBlatFrom() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  // 返回1是android系统
  if (isAndroid) {
    return 1;
  }
  // 返回2是ios系统
  if (isiOS && window.webkit && window.webkit.messageHandlers) {
    return 2;
  }
  return 0;
}

function getSdkData(msg, that) {
  if (window.location.hostname != "ebrestweb.edspay.com") {
    console.log(msg);
  }
  if (!msg) {
    return false;
  }
  let result;
  if (typeof msg == "string") {
    //app返回的
    result = JSON.parse(msg);
  } else {
    // h5的
    result = msg;
  }
  if (result.code * 1 == 1000) {
    return result.data || {};
  } else {
    that.showMsg(result.msg);
    return false;
  }
}

function getDomainName() {
  var protocol = window.location.protocol;
  var host = window.location.host;
  var domainName = protocol + "//" + host;
  return domainName;
}

function getUrlParam(para) {
  var queryStr = location.href.split("?")[1] || "";
  var paraArr = queryStr.substring(0).split("&");
  for (var i = 0; i < paraArr.length; i++) {
    if (para == paraArr[i].split("=")[0]) {
      return paraArr[i].split("=")[1];
    }
  }
  return "";
}

function jx(para) {
  return encodeURIComponent(para);
}

export default {
  getBlatFrom: getBlatFrom,
  getDomainName: getDomainName,
  getUrlParam: getUrlParam,
  getSdkData: getSdkData,
  jx: jx
};