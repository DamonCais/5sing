<template>
  <div>
    <!-- 组件在main.json中引入 -->
    <!-- <van-button @click="onClick">按钮</van-button>
    <van-notify id="van-notify" />-->

    <van-button @click="onClick">按钮</van-button>
    <div>
      <audio :poster="poster" :name="name" :author="author" :src="src" id="myAudio" controls loop></audio>
    </div>
    <scroll-view scroll-y style="height: 400px;" bindscroll="scroll" :scroll-into-view="toView">
      <view v-for="(val, key, index) in  lrcObj" :key="key" :id="'ly'+key">
        <text>{{val}}</text>
      </view>
      <view style="height:400px;">
        <text></text>
      </view>
    </scroll-view>
  </div>
</template>

<script>
// 这个是唤起Notify的函数，参照[Vant 文档](https://youzan.github.io/vant-weapp/#/notify)
import Notify from "@/../static/vant/notify/notify";
import Toast from "@/../static/vant/toast/toast";
export default {
  mounted() {
    this.getLyList();
    let times = Object.keys(this.lrcObj);
    console.log(times);
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src =
      "http://fs.5sing.kgimg.com/201810290004/0abe3bda1aa57e470330211202e9b09e/G058/M06/00/01/GpQEAFbKxdSIeEdiAA8M1OAS7jgAAAJ_QAAAAAADwzs268.m4a";
    innerAudioContext.onPlay(() => {
      console.log("开始播放");
    });
    innerAudioContext.onError(res => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
    innerAudioContext.onTimeUpdate(() => {
      for (var i = 0; i < times.length; i++) {
        if (
          innerAudioContext.currentTime > Number(times[i]) &&
          innerAudioContext.currentTime < times[i + 1]
        ) {
          this.toView = `ly${times[i]}`;
          console.log(times[i]);
          break;
        }
      }
      // console.log(innerAudioContext.currentTime);
    });
  },
  data() {
    return {
      audioCtx: null,

      toView: "ly1",
      poster:
        "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
      name: "此时此刻",
      author: "许巍",
      src:
        "http://fs.5sing.kgimg.com/201810282126/0ad3ae817b83849521d2c2dc5d8b4fbd/G053/M08/1D/18/dQ0DAFbHIvKALR3dAJQWFmOU-fw000.mp3",

      show: false,
      lrcObj: {},
      lyList: [],
      lrc: `[00:21.88]行云上明月转
[00:25.84]静夜里想起 花开那天
[00:30.47]桃树千变万化 化于心内味甜
[00:35.80]思念渐渐浮显
[00:40.52]庭园夜长梦短
[00:44.94]并没有阻止 今昔变迁
[00:49.74]庭外铺满白雪 雪中夙愿未圆
[00:55.17]孤独望着窗边
[01:01.07]桃园漫弥着香 花开细枝正央
[01:05.48]谁曾在园内 把歌韵奏响
[01:10.46]如同淡描一张 晚风衬月明亮
[01:15.28]翩翩的飞雪 跟你逐片赏
[01:20.16]桃园漫弥着香 风织了几寸霜
[01:24.73]随年月流逝 奔走了他乡
[01:29.66]而迎面桃花香 那不变旧模样
[01:34.58]今天赏花却 不再是我俩
[02:02.62]行云上明月转
[02:06.43]寂寞似杯酒 苦中带酸
[02:11.23]桃树早已习惯 晚秋花落叶残
[02:16.82]相别就像昨天
[02:21.54]庭园夜长梦短
[02:25.91]静静去谱写 心中眷恋
[02:30.43]盈月总会渐缺 记忆不尽是甜
[02:36.37]心事落在天边
[02:41.91]桃园漫弥着香 花开细枝正央
[02:46.32]谁曾在园内 把歌韵奏响
[02:51.40]如同淡描一张 晚风衬月明亮
[02:56.08]翩翩的飞雪 跟你逐片赏
[03:01.06]桃园漫弥着香 风织了几寸霜
[03:05.73]随年月流逝 奔走了他乡
[03:10.45]而迎面桃花香 那不变旧模样
[03:15.27]今天赏花我 一个人回想
[03:24.92]桃园梦留昨天 收起记忆碎片
[03:29.01]缘随着残叶 风干了挂牵
[03:34.51]和离别同一天 挽手种下怀念
[03:39.33]当初分享过的 已是永远
`
    };
  },
  methods: {
    getLyList() {
      var lyrics = this.lrc.split("\n");
      for (var i = 0; i < lyrics.length; i++) {
        var timeReg = /\[(\d*)\:(\d*)\.(\d*)\]/;
        var timeRegExpArr = lyrics[i].match(timeReg);
        if (!timeRegExpArr) continue;
        let word = lyrics[i].replace(timeReg, "");
        let min = Number(timeRegExpArr[1]);
        let sec = Number(timeRegExpArr[2]);
        let time = 60 * min + sec;
        this.lrcObj[time] = word;
        this.lyList.push({ time, word });
      }
    },
    onShareAppMessage() {
      return {
        title: "弹出分享时显示的分享标题",

        desc: "分享页面的内容",

        path: "/pages/test/main" // 路径，传递参数到指定页面。
      };
    },
    timeUpdate(u) {
      console.log(u.detail);
    },
    onClick() {
      this.audioCtx.play();
    },
    onClose() {
      this.show = false;
    },

    onSelect(event) {
      console.log(event.detail);
    }
  }
};
</script>

<style>
</style>
