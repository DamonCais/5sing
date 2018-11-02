const axios = require('axios');
const request = axios.create({
    baseURL: `http://service.5sing.kugou.com`, // api的base_url
    timeout: 15000 // 请求超时时间
});

function doGet(url, params) {
    const href = getFullUrl(url, params);
    return request({
        url: href,
        method: "get"
    });
}

function getFullUrl(url, params) {
    let query = "";
    for (let p in params) {
        if (typeof params[p] === "object") {
            query += `&${p}=${JSON.stringify(params[p])}`;
        } else {
            query += `&${p}=${params[p]}`;
        }
    }
    url += "?" + query.substring(1);
    return encodeURI(url);
}

function getRecommendSongList(obj) {
    return doGet('h5/getRecommendSongList', {
        from: 'web',
        pageIndex: obj.pageIndex || 1,
        pageSize: obj.pageSize || 4,
        type: 1,
        _: new Date().getTime()
    })
}

function getMvlist(obj) {
    return doGet('h5/mvlist', {
        _: new Date().getTime()
    })
}

function getBanner(obj) {
    return doGet('h5/getBanner', {
        from: 'web',
        id: 26,
        _: new Date().getTime()
    })
}



function getYcList(obj) {
    return doGet('h5/webRecommendNew', {
        p: obj.pageIndex || 1,
        t: 1,
        l: obj.pageSize || 10,
        s: '编辑推荐',
        from: 'web',
        _: new Date().getTime()
    })
}

function getFcList(obj) {
    return doGet('h5/webRecommendNew', {
        p: obj.pageIndex || 1,
        t: 1,
        l: obj.pageSize || 10,
        s: '编辑推荐',
        from: 'web',
        _: new Date().getTime()
    })
}

function getSongListSquareRecommended(obj) {
    return doGet('h5/getSongListSquareRecommended', {
        index: obj.pageIndex || 1,
        _: new Date().getTime()
    })
}


module.exports = {
    getRecommendSongList,
    getMvlist,
    getBanner,
    getYcList,
    getFcList,
    getSongListSquareRecommended,
}