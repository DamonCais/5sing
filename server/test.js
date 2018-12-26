// const api = require('./api');

// var getApi = function(type) {
//     return async function(ctx) {
//         const obj = ctx.query
//         console.log(obj);
//         let res = await api[type](obj);
//         ctx.body = res.data;
//     }
// }


// function getFullUrl(url, params) {
//     let query = "";
//     for (let p in params) {
//         if (typeof params[p] === "object") {
//             query += `&${p}=${JSON.stringify(params[p])}`;
//         } else {
//             query += `&${p}=${params[p]}`;
//         }
//     }
//     url += "?" + query.substring(1);
//     return encodeURI(url);
// }
const axios = require('axios');
var cheerio = require('cheerio');
(async() => {
    let url = `https://m.food.hiyd.com/detail-mifan_zheng.html`;
    let res = await axios.get(encodeURI(url));
    var $ = cheerio.load(res.data);
    let obj = {};
    obj.image = $('.info-base img').attr('src');
    obj.cont_h3 = $('.info-base .cont h3').text();
    $('.info-base .cont p').each(function(index, element) {
        let str = $(this).text();
        let arr = str.split('：')
        if (arr.length && arr[0] == '分类') {
            obj.type = arr[1];
        } else {
            obj.suggest = arr[1];
        }
    })
    obj.tips = $('.info-base .box-row3 p').text();
    obj.baseBox = [];
    $('.info-base .box-row2 div').each(function(index, element) {
        obj.baseBox.push($(this).find('p').text());
    })
    obj.unit = [];
    $('.info-unit .box-bd li').each(function(index, element) {
        let unit = $(this).find('.unit').text();
        let heat = $(this).find('.heat').text();
        obj.unit.push({ unit, heat })

    })
    obj.unrt = [];
    $('.info-nurt .box-bd li').each(function(index, element) {
        let name = $(this).find('.name').text();
        let count = $(this).find('.count').text();
        obj.unrt.push({ name, count })

    })

    // console.log(res.data);
    console.log(obj);

})()

// https://home.meishichina.com/ajax/ajax.php?ac=recipe&op=getMoreDiffStateRecipeList&classid=102&orderby=tag&page=2

// ac: 'recipe',
// op: 'getMoreDiffStateRecipeList',
// page: 2


// classid: 102,
// 102热菜,202凉菜,57汤羹,59主食, 62小吃, 160西餐, 60烘焙, 69自制食材
// orderby: 'tag',


// classid: 0
// orderby: hot,new
// hot最热,new最新