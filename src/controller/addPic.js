const Base = require('./base.js');
const ef = require('emoji-flags')
module.exports = class extends Base {
    async indexAction() {
        return this.json(ef.countryCode('JP'))
    }
}