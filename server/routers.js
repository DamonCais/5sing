const router = require('koa-router')()
    // var { client } = require('./client.js')
const fs = require('fs');
var request = require('request');

const {
    getSongApi,
    getCalorieApi,
    getRecipeApi,
    getTvApi
} = require('./controllers')
let songHrefs = [
    'getRecommendSongList',
    'getMvlist',
    'getBanner',
    'getYcList',
    'getFcList',
    'getSongListSquareRecommended',
    'getSongUrl',
    'getSongListByalbumId',
    'getSongUrlById',
    'getSongDetailById'
];
songHrefs.forEach(href => {
    router.get(`/${href}`, getSongApi(href))
});

let calorieHrefs = [
    'getCalorie',
    'getCalorieByKeyWord',
    'getCalorieDetail'
];
calorieHrefs.forEach(href => {
    router.get(`/${href}`, getCalorieApi(href))
});
let recipeHrefs = [
    'getMoreDiffStateRecipeList',
    'getRecipeByKewWord',
    'getRecipeById'
];
recipeHrefs.forEach(href => {
    router.get(`/${href}`, getRecipeApi(href))
});

router.get(`/getTv`,getTvApi())

// router.post(`/postImg`, async(ctx) => {
//     let file = ctx.request.files.file
//     let path = file.path;
//     var image = fs.readFileSync(path).toString("base64");
//     let r = await getInfo(image);
//     // ctx.body = { message: 'success' }
//     ctx.body = r;
// })
// router.post(`/postImgPath`, async(ctx) => {
//     let { imgPath } = ctx.request.body;
//     let image = await getImg(imgPath);
//     let r = await getInfo(image);
//     ctx.body = r;
// })


// router.get(`/getMp3`, async(ctx) => {
//     console.log(ctx.query);

//     let { url } = ctx.query;
//     if (url) {
//         try {
//             ctx.set('Content-Type', 'audio/mpeg');
//             ctx.body = await request({ uri: url, encoding: 'binary' })
//         } catch (error) {
//             ctx.body = error;
//         }
//     } else {
//         ctx.body = '';
//     }
// })

// async function getInfo(image) {
//     var options = {};
//     options["max_face_num"] = "20";
//     options["face_fields"] = "age,beauty,gender,race,qualities,type";
//     // 带参数调用人脸检测
//     let result = await client.detect(image, options);
//     console.log(result);
//     let r = [];
//     result.result.forEach(element => {
//         element.beauty = Math.round(element.beauty);
//         r.push(element);
//     });
//     return r;
// }

// function getImg(url) {
//     return new Promise((resolve, reject) => {
//         request({ uri: url, encoding: 'base64' }, (error, response, body) => {
//             if (!error && response.statusCode == 200) {
//                 resolve(body);
//             } else {
//                 reject('fail');
//             }
//         });
//     })

// }

// function writeImg(url, path) {
//     return new Promise((resolve, reject) => {
//         request({ uri: url, encoding: 'binary' }, (error, response, body) => {
//             if (!error && response.statusCode == 200) {
//                 fs.writeFileSync(path, body, 'binary');
//                 resolve('success');
//             } else {
//                 reject('fail');
//             }
//         });
//     })

// }

module.exports = router