const axios = require('axios');
var cheerio = require('cheerio');

const request = axios.create({
  baseURL: `http://service.5sing.kugou.com`, // api的base_url
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

function getRecommendSongList(obj) {
  return doGet('h5/getRecommendSongList', {
    from: 'web',
    pageIndex: obj.pageIndex || 1,
    pageSize: obj.pageSize || 4,
    type: 1,
    _: new Date().getTime()
  })
}

function getMvlist(obj) {
  return doGet('h5/mvlist', {
    _: new Date().getTime()
  })
}

function getBanner(obj) {
  return doGet('h5/getBanner', {
    from: 'web',
    id: 26,
    _: new Date().getTime()
  })
}



function getYcList(obj) {
  return doGet('h5/webRecommendNew', {
    p: obj.pageIndex || 1,
    t: 1,
    l: obj.pageSize || 10,
    s: '编辑推荐',
    from: 'web',
    _: new Date().getTime()
  })
}

function getFcList(obj) {
  return doGet('h5/webRecommendNew', {
    p: obj.pageIndex || 1,
    t: 2,
    l: obj.pageSize || 10,
    s: '编辑推荐',
    from: 'web',
    _: new Date().getTime()
  })
}

function getSongListSquareRecommended(obj) {
  return doGet('h5/getSongListSquareRecommended', {
    index: obj.pageIndex || 1,
    _: new Date().getTime()
  })
}

function getSongUrl(obj) {
  return doGet('/song/getsongurl', {
    songid: obj.songid,
    songtype: obj.songtype,
    from: 'web',
    version: '6.6.72',
    _: new Date().getTime()
  })
}

async function getSongListByalbumId(obj) {
  let songList = [];
  let data = {};
  try {
    let url = `http://5sing.kugou.com/m/songlist/info/${obj.albumId}.html`;
    let res = await axios.get(url);
    let albumReg = /albumId:\'(.*)\'/;
    let ownerReg = /ownerId:\'(.*)\'/;
    let arr = res.data.match(ownerReg);
    let arr2 = res.data.match(albumReg);

    if (arr && arr2) {
      let url2 = `http://5sing.kugou.com/${arr[1]}/dj/${arr2[1]}.html`
      let res2 = await axios.get(url2);
      var $ = cheerio.load(res2.data);
      data.img = $('.dj_infos dt img').attr('src');
      data.normalInfo = $('#normalIntro').text();
      data.userName = $('.user_name').text();
      let title = $('title').text();
      data.title = title.split('-')[0];
      $('.dj_songitems .p_rel').each(function (index, element) {
        let title = $(this).find('.s_title').text();
        let soner = $(this).find('.s_soner').text();
        let playnum = $(this).find('.s_palynum').text();
        let songId = $(this).find('.s_palynum').attr('id');
        songList.push({
          title,
          soner,
          playnum,
          songId,
        })
      })
    }

  } catch (error) {}
  data.songList = songList;
  return {
    data: data
  };
}

async function getSongUrlById(obj) {
  let songUrl = `http://service.5sing.kugou.com/song/getsongurl?songid=${obj.songId}&songtype=${obj.type||'fc'}&from=web&version=6.6.72&_=${new Date().getTime()}`
  let res = await axios.get(songUrl);
  let data = JSON.parse(res.data.slice(1, -1));
  return {
    data: data
  }
}


async function getSongDetailById(obj) {
  let songUrl = `http://service.5sing.kugou.com/song/getsongurl?songid=${obj.songId}&songtype=${obj.type||'fc'}&from=web&version=6.6.72&_=${new Date().getTime()}`
  let res = await axios.get(songUrl);
  let data = JSON.parse(res.data.slice(1, -1));

  let url = `http://5sing.kugou.com/m/Song/Detail/${obj.type||'fc'}/${obj.songId}.html`
  let res2 = await axios.get(url);
  var $ = cheerio.load(res2.data);
  let lrc = $('#hidden-words').text();
  // let lrcObj = {};
  // var lyrics = lrc.split("\n");
  // for (var i = 0; i < lyrics.length; i++) {
  //     var timeReg = /\[(\d*)\:(\d*)\.(\d*)\]/;
  //     var timeRegExpArr = lyrics[i].match(timeReg);
  //     if (!timeRegExpArr) continue;
  //     let word = lyrics[i].replace(timeReg, "");
  //     let min = Number(timeRegExpArr[1]);
  //     let sec = Number(timeRegExpArr[2]);
  //     let time = 60 * min + sec;
  //     lrcObj[time] = word;
  // }
  data.lrc = lrc;
  return {
    data: data
  }
}

module.exports = {
  getRecommendSongList,
  getMvlist,
  getBanner,
  getYcList,
  getFcList,
  getSongListSquareRecommended,
  getSongUrl,
  getSongListByalbumId,
  getSongUrlById,
  getSongDetailById
}
