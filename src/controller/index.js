const Base = require('./base.js');
const rp = require("request-promise");
const sandboxBaseUrl = `https://sandbox-api-pay.line.me`;
const _ = require("lodash");

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  /* 请求line获取测试支付url */
  async askPaymentUrlAction() {
    let options = {
      method: 'POST',
      uri: sandboxBaseUrl + '/v2/payments/request',
      body: JSON.stringify({
        'productName': 'testProduct',
        'amount': 30,
        'currency': 'JPY',
        'mid': 'godvzzz',
        'confirmUrl': 'http://47.240.11.102:8360',
        'orderId': this.genOrderId()
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': think.config('linePayChannelId'),
        'X-LINE-ChannelSecret': think.config('linePayChannelSecret'),
      }
    }
    const result = await rp(options);
    console.log("request result:", result)
    return this.success({ code: 200, result });
  }
  genOrderId() {
    const date = new Date();
    let orderNo =
      "lineorder" +
      date.getFullYear() +
      _.padStart(date.getMonth() + 1, 2, "0") +
      _.padStart(date.getDate(), 2, "0") +
      _.padStart(date.getHours(), 2, "0") +
      _.padStart(date.getMinutes(), 2, "0") +
      _.padStart(date.getSeconds(), 2, "0") +
      Math.random()
        .toString(36)
        .substr(3, 7);
    return orderNo;
  }
};
