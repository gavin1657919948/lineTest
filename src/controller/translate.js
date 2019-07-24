const Base = require('./base.js');
const translate = require('node-google-translate-skidz');

function getNotTranslateText(text) {
    var lastIndex = text.lastIndexOf(' ');
    return text.substring(0, lastIndex + 1)
}

function getToTranslateText(text) {
    var lastIndex = text.lastIndexOf(' ');
    return text.substring(lastIndex + 1);
}
module.exports = class extends Base {

    async translateAction() {
        const data = await this.model('area_map').select();
        for (let d of data) {
            if (d.id > 71) {
                let jpText = await translate({ text: getToTranslateText(d.area_name), source: 'zh', target: 'ja' });
                console.log("jpText:", jpText)
                d.area_name = getNotTranslateText(d.area_name) + jpText + ' ' + getToTranslateText(d.area_name);
                console.log("finnal:", d.area_name)
                await this.model('area_map').where({ id: d.id }).update({ area_name: d.area_name })
            }

        }
        console.log("================finished!====================")
        return this.success({ data })
    }


};
