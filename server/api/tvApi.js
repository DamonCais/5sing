const { tv } = require('./model');


async function getTv(obj) {
    let { name, type, id, pageSize,pageIndex } = obj
    pageSize = pageSize ? pageSize : 9;
    let whereArr = [];
    type = type ? type : ["剧情片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "战争片", "国产剧", "香港剧","台湾剧","海外剧", "欧美剧", "韩国剧","日本剧", "综艺片", "动漫片"];

    let fields = ['list_name','vod_name','vod_pic','vod_id','vod_addtime'];
    if(name){
        let reg = new RegExp(name, 'i'); //不区分大小写
        whereArr.push({ vod_name: { $regex: reg } })

    }
    if(type){
        whereArr.push({ vod_type: type })

    }
    if(id){
        whereArr = [{vod_id: id}];
        fields = '';
    }

    let res = await tv.find({
        $and: whereArr
    },fields)
    .sort({ 'vod_addtime': -1 })
    .skip(pageIndex * pageSize || 0)
    .limit(pageSize)
    return {
        data: res
    }
}


module.exports = getTv