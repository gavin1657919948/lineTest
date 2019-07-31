const Base = require('./base.js');
const rp = require("request-promise")
const base64 = require("js-base64").Base64;
const clientId = think.config('payPalClientId');
const secret = think.config('payPalSecret');
module.exports = class extends Base {
    async notifyAction() {
        console.log("entering message...")
        console.log("context.request", this.ctx.request)
        console.log("context.get:", this.get())
        console.log("context.post:", this.post())
    }
    // async getAccessTokenAction() {
    //     const options = {
    //         method: 'POST',
    //         uri: `https://api.sandbox.paypal.com/v1/oauth2/token`,
    //         headers: {
    //             Authorization: 'Basic ' + base64.encode(`${clientId}:${secret}`),
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         form: {
    //             grant_type: 'client_credentials'
    //         }
    //     }
    //     const result = await rp(options);
    //     console.log("result:", result)
    //     return this.success(result)
    // }
}