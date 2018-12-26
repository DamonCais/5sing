export function getLyList(lrc) {
  console.log(lrc);
  var lyrics = lrc.split("\n");
  let lrcObj = {};
  if (lyrics.length === 1) {
    lrcObj[1] = lyrics[0];
  }
  for (var i = 0; i < lyrics.length; i++) {
    var timeReg = /\[(\d*)\:(\d*)\.(\d*)\]/;
    var timeRegExpArr = lyrics[i].match(timeReg);
    if (!timeRegExpArr) continue;
    let word = lyrics[i].replace(timeReg, "");
    let min = Number(timeRegExpArr[1]);
    let sec = Number(timeRegExpArr[2]);
    let time = 60 * min + sec;
    lrcObj[time] = word;
  }
  return lrcObj;
}
