const Base = require('./base.js');
module.exports = class extends Base {
    async indexAction() {
        console.log("notify .... pay log", this.ctx)
        return `<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>`;
    }
}