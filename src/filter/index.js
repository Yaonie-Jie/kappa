//借款状态
export function loanFilter(value) {
  if (!value) return;
  switch (value) {
    case "APPLY":
      value = "审核中";
      break;
    case "AWAIT_TRANSFER":
      value = "放款中";
      break;
    case "AWAIT_REPAY":
      value = "待还款";
      break;
    case "FINISHED":
      value = "已还清";
      break;
    case "CLOSED":
      value = "已关闭";
      break;
  }
  return value;
}

//还款状态
export function repayFilter(value) {
  if (!value) return;
  switch (value) {
    case "APPLY":
      value = "还款中";
      break;
    case "PROCESSING":
      value = "还款中";
      break;
    case "SUCC":
      value = "还款成功";
      break;
    case "FAIL":
      value = "还款失败";
      break;
    case "CLOSED":
      value = "已关闭";
      break;
  }
  return value;
}

//还款渠道
export function channelFilter(value) {
  if (!value) return;
  switch (value) {
    case "ONLINE":
      value = "主动还款";
      break;
    case "COLLECT":
      value = "线下还款";
      break;
    case "ADMIN":
      value = "线下还款";
      break;
    case "AUTO_REPAY":
      value = "代付扣款";
      break;
  }
  return value;
}

//认证状态
export function authFilter(value) {
  if (!value) return;
  switch (value) {
    case "N":
      value = "去认证";
      break;
    case "Y":
      value = "已认证";
      break;
    case "W":
      value = "认证中";
      break;
    case "E":
      value = "已过期";
      break;
  }
  return value;
}

//还款明细状态
export function periodsFilter(value) {
  if (!value) return;
  switch (value) {
    case "OVERDUE":
      value = "已逾期";
      break;
    case "FINISHED":
      value = "已还清";
      break;
    case "WAITREPAY":
      value = "待还款";
      break;
  }
  return value;
}
