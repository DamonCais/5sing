const api = require('./api');

var getApi = function (type) {
    return async function (ctx) {
        const obj = ctx.query
        console.log(obj);
        let res = await api[type](obj);
        ctx.body = res.data;
    }
}

module.exports = getApi;