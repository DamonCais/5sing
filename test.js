let lyric = `[03:39.33]当初分享过的 已是永远`;
var timeReg = /\[(\d*)\:(\d*)\.(\d*)\]/;
var timeRegExpArr = lyric.match(timeReg);
console.log(timeRegExpArr);