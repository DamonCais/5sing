var AipFaceClient = require("./src/index").face;

// 设置APPID/AK/SK
var APP_ID = "10827683";
var API_KEY = "9VZ7dyz9BPBPUy2hqU5ZRzng";
var SECRET_KEY = "T9nqUkh6fBV15IqOvUKlrl4g2VSZBhpd";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

module.exports = {
        client
    }
    // var fs = require('fs');

// var image = fs.readFileSync("./face.png").toString("base64");

// // 调用人脸检测
// client.detect(image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });

// // 如果有可选参数
// var options = {};
// options["max_face_num"] = "2";
// options["face_fields"] = "age";

// // 带参数调用人脸检测
// client.detect(image, options).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });;