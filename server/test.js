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

(async () => {
    let res = await doGet('/h5/webRecommendNew', {
        p: 2,
        t: 1,
        l: 10,
        s: '编辑推荐',
        from: 'web',
        _: new Date().getTime()
    })
    console.log(res.data);
})()


// 首页
// http://service.5sing.kugou.com/h5/getRecommendSongList?jsoncallback=jQuery21404999839580991561_1541127397298&from=web&pageIndex=1&pageSize=4&type=1&_=1541127397299
// http://service.5sing.kugou.com/h5/mvlist?jsoncallback=jQuery21404999839580991561_1541127397300&type=1&_=1541127397301
// http://service.5sing.kugou.com/h5/getBanner?jsoncallback=jQuery21404999839580991561_1541127397296&from=web&id=26&_=1541127397297

// 原创
// http://service.5sing.kugou.com/h5/webRecommendNew?jsoncallback=jQuery21406082900414848147_1541128006606&p=1&t=1&l=10&s=%E7%BC%96%E8%BE%91%E6%8E%A8%E8%8D%90&from=web&_=1541128006607


// 翻唱
// http://service.5sing.kugou.com/h5/webRecommendNew?jsoncallback=jQuery2140973158093502954_1541128072720&p=1&t=2&l=10&s=%E7%BC%96%E8%BE%91%E6%8E%A8%E8%8D%90&from=web&_=1541128072721

// 歌单
// http://service.5sing.kugou.com/h5/getSongListSquareRecommended?jsoncallback=jQuery214005022355282169122_1541128088705&index=1&_=1541128088706

// 视频
// http://service.5sing.kugou.com/h5/mvlist?jsoncallback=jQuery21409230696795689353_1541128111899&type=2&_=1541128111900