const router = require('koa-router')()

let hrefs = [
    'getRecommendSongList',
    'getMvlist',
    'getBanner',
    'getYcList',
    'getFcList',
    'getSongListSquareRecommended',
    'getSongUrl',
];
hrefs.forEach(href => {
    router.get(`/${href}`, require('./controllers')(href))
});

module.exports = router