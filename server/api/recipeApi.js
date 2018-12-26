const axios = require('axios');
var cheerio = require('cheerio');

const request = axios.create({
    baseURL: `https://home.meishichina.com/ajax`, // api的base_url
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


async function getMoreDiffStateRecipeList(obj) {
    let { classid, page, orderby } = obj;
    let params = {
        ac: 'recipe',
        op: 'getMoreDiffStateRecipeList',
        classid: classid || 0,
        orderby: orderby || 'hot',
        page: page || 1
    }
    let res = await doGet('ajax.php', params);

    return res;

}

async function getRecipeById(obj) {
    let { id } = obj;
    let url = `https://m.meishichina.com/recipe/${id}/`;
    let res = await axios.get(url);
    let reg = /<script type="application\/ld\+json">([\w\W]*?)<\/script>/g
    let arr = res.data.match(reg);
    let recipe = {};

    arr.forEach(element => {
        let reg = /<script type="application\/ld\+json">([\w\W]*?)<\/script>/;
        let str = (reg.exec(element)[1]).replace(/\s/g, '');
        let obj = JSON.parse(str);
        Object.assign(recipe, obj);
    })
    console.log(recipe);
    return { data: recipe };

}
async function getRecipeByKewWord(obj) {
    let { keyWord, page } = obj;
    let url = `https://home.meishichina.com/search/${keyWord||'鸡翅'}/page/${page||1}/`;
    let res = await axios.get(encodeURI(url));
    var $ = cheerio.load(res.data);
    let arr = [];
    $('.ui_list_1 ul li').each(function(index, element) {
        let mainingredient = $(this).find('.detail .subcontent').text();
        mainingredient = mainingredient.replace('原料：', '');

        let username = $(this).find('.detail .left a').text();
        let title = $(this).find('.detail h4').text();
        let cover = $(this).find('.pic img').attr('data-src');
        if (mainingredient) {
            arr.push({
                mainingredient,
                username,
                title,
                cover
            })
        }

    })
    return { data: arr };
}



module.exports = {

    getMoreDiffStateRecipeList,
    getRecipeByKewWord,
    getRecipeById
}


// let obj = {
//     ac: 'recipe',
//     op: 'getMoreDiffStateRecipeList',
//     classid: 56,
//     orderby: 'tag',
//     page: 2
// };
// let res = await doGet('ajax.php', obj);