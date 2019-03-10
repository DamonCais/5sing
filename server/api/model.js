var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/yytv')

// media
var tvSchema = new mongoose.Schema({

    "vod_id": String,
    "vod_cid": String,
    "vod_name": String,
    "vod_title": String,
    "vod_type": String,
    "vod_keywords": String,
    "vod_actor": String,
    "vod_director": String,
    "vod_content": String,
    "vod_pic": String,
    "vod_area": String,
    "vod_language": String,
    "d_year": String,
    "vod_addtime": String,
    "vod_filmtime": String,
    "vod_server": String,
    "vod_play": String,
    "vod_url": String,
    "vod_inputer": String,
    "vod_reurl": String,
    "vod_length": String,
    "vod_weekday": String,
    "vod_copyright": String,
    "vod_state": String,
    "vod_version": String,
    "vod_tv": String,
    "vod_total": String,
    "vod_continu": String,
    "vod_status": String,
    "vod_stars": String,
    "vod_hits": String,
    "vod_isend": String,
    "vod_douban_id": String,
    "vod_series": String,
    "list_name": String,

})

mongoose.model('tv', tvSchema, 'tv')
var tv = mongoose.model('tv')

var errSchema = new mongoose.Schema({

    pageList: Array

})

mongoose.model('errList', errSchema, 'errList')
var errList = mongoose.model('errList')


module.exports = {
    tv,
    errList
}