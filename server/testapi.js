const {
    getRecommendSongList,
    getMvlist,
    getBanner,
    getYcList,
    getFcList,
    getSongListSquareRecommended,
} = require('./api');

(async () => {
    let res = await getRecommendSongList({
        pageIndex: 2,
        pageSize: 3,
    })
    console.log(res.data);
    res = await getMvlist({})
    console.log(res.data);
    res = await getBanner({})
    console.log(res.data);
    res = await getYcList({
        pageIndex: 2,
        pageSize: 3,
    })
    console.log(res.data);
    res = await getFcList({
        pageIndex: 2,
        pageSize: 3,
    })
    console.log(res.data);
    res = await getSongListSquareRecommended({
        pageIndex: 2,
    })
    console.log(res.data);
})()