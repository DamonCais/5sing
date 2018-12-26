const axios = require('axios');
var cheerio = require('cheerio');
const { calorie } = require('./model');

const request = axios.create({
    baseURL: `https://food.hiyd.com`, // api的base_url
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

(async() => {
    // list1 谷薯芋、杂豆、主食 712


    for (let i = 1; i <= 713; i++) {
        try {
            await getCalorie(1, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list2 蛋类、肉类及制品 291

    for (let i = 1; i <= 291; i++) {
        try {
            await getCalorie(2, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list3 奶类及制品 296

    for (let i = 1; i <= 296; i++) {
        try {
            await getCalorie(3, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list4 蔬果和菌藻 94

    for (let i = 1; i <= 94; i++) {
        try {
            await getCalorie(4, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list5 坚果、大豆及制品 152

    for (let i = 1; i <= 152; i++) {
        try {
            await getCalorie(5, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list6 饮料 445

    for (let i = 1; i <= 445; i++) {
        try {
            await getCalorie(6, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list7 食用油、油脂及制品 26

    for (let i = 1; i <= 26; i++) {
        try {
            await getCalorie(7, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list8 调味品 295
    for (let i = 1; i <= 295; i++) {
        try {
            await getCalorie(8, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list9 零食、点心、冷饮 824
    for (let i = 1; i <= 824; i++) {
        try {
            await getCalorie(9, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list10 其它 106 
    for (let i = 1; i <= 106; i++) {
        try {
            await getCalorie(10, i);
        } catch (error) {
            console.log(error);
        }
    }
    // list132  菜肴 548
    for (let i = 1; i <= 548; i++) {
        try {
            await getCalorie(132, i);
        } catch (error) {
            console.log(error);
        }
    }

    console.log('finish');

})()


async function getCalorie(list = 1, page = 1) {
    var arr = [];
    let res = await doGet(`list-${list}-html`, {
        page: page
    })
    var $ = cheerio.load(res.data);
    $('.list-main ul li').each(function(index, element) {
        let obj = {};
        let href = $(this).find('a').attr('href');
        let reg = /\/\/food.hiyd.com\/(.*).html/;
        obj.keyWord = reg.exec(href)[1];
        obj.img = $(this).find('img').attr('src');
        obj.calorie = $(this).find('p').text();
        obj.title = $(this).find('h3').text();
        obj.listId = list;
        arr.push(obj);
    })


    console.log(`${list}======${page}`);

    for (let item of arr) {
        var conditions = { keyWord: item.keyWord };
        var update = { $set: item };
        var options = { upsert: true };
        try {
            await calorie.updateOne(conditions, update, options);
        } catch (error) {

            console.log(error)
        }
    }
}

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

// http://service.5sing.kugou.com/song/getsongurl?songid=${arr[a]}&songtype=fc&from=web&version=6.6.72&_=${new Date().getTime()}