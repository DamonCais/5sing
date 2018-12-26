const axios = require('axios');
var cheerio = require('cheerio');

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


async function getCalorie(obj) {
    let { list, page } = obj;
    var arr = [];

    let res = await doGet(`list-${list||1}-html`, {
        page: page || 1
    })
    var $ = cheerio.load(res.data);
    $('.list-main ul li').each(function(index, element) {
        let item = {};
        let href = $(this).find('a').attr('href');
        let reg = /\/\/food.hiyd.com\/(.*).html/;
        item.detail = reg.exec(href)[1];
        item.img = $(this).find('img').attr('src');
        item.calorie = $(this).find('p').text();
        item.title = $(this).find('h3').text();
        item.listId = list;
        arr.push(item);
    })
    return { data: arr };
}

async function getCalorieByKeyWord(obj) {
    let { keyWord } = obj;
    var arr = [];

    let res = await doGet(`food/search`, {
        kw: keyWord || '汉堡包'
    })
    var $ = cheerio.load(res.data);
    $('.list-main ul li').each(function(index, element) {
        let item = {};
        let href = $(this).find('a').attr('href');
        let reg = /\/\/food.hiyd.com\/(.*).html/;
        item.detail = reg.exec(href)[1];
        item.img = $(this).find('img').attr('src');
        item.calorie = $(this).find('p').text();
        item.title = $(this).find('h3').text();
        arr.push(item);
    })
    return { data: arr };
}

async function getCalorieDetail(obj) {
    let { detail } = obj;
    let url = `https://m.food.hiyd.com/${detail||'detail-mifan_zheng'}.html`;
    let res = await axios.get(encodeURI(url));
    var $ = cheerio.load(res.data);
    let calorie = {};
    calorie.image = $('.info-base img').attr('src');
    calorie.cont_h3 = $('.info-base .cont h3').text();
    $('.info-base .cont p').each(function(index, element) {
        let str = $(this).text();
        let arr = str.split('：')
        if (arr.length && arr[0] == '分类') {
            calorie.type = arr[1];
        } else {
            calorie.suggest = arr[1];
        }
    })
    calorie.tips = $('.info-base .box-row3 p').text();
    calorie.baseBox = [];
    $('.info-base .box-row2 div').each(function(index, element) {
        calorie.baseBox.push($(this).find('p').text());
    })
    calorie.unit = [];
    $('.info-unit .box-bd li').each(function(index, element) {
        let unit = $(this).find('.unit').text();
        let heat = $(this).find('.heat').text();
        calorie.unit.push({ unit, heat })

    })
    calorie.unrt = [];
    $('.info-nurt .box-bd li').each(function(index, element) {
        let name = $(this).find('.name').text();
        let count = $(this).find('.count').text();
        calorie.unrt.push({ name, count })

    })

    return { data: calorie };
}





module.exports = {

    getCalorie,
    getCalorieByKeyWord,
    getCalorieDetail
}