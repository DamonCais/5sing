
<template>
  <div class="player">
    <view class="player-header">
      <swiper class="player-swiper" :indicator-dots='true' indicator-color='#EA5A49' :circular='true'>
        <block>
          <swiper-item>
            <scroll-view scroll-y class="song-items" bindscroll="scroll" :scroll-into-view="toView">
              <view v-for="(val, key, index) in  lrcObj" :key="key" :id="'ly'+key">
                <text>{{val}}</text>
              </view>
            </scroll-view>
          </swiper-item>
        </block>
        <block>
          <swiper-item>
            <scroll-view class="song-items" scroll-y>
              <van-cell v-for="(item,i) in songList" :key="i" :title="item.title" :data-id="item.id">
              </van-cell>
            </scroll-view>
          </swiper-item>
        </block>
        <block>
          <swiper-item>
            <view>唱片</view>
          </swiper-item>
        </block>

      </swiper>
    </view>
    <view class="player-actions">
      <view class="player-steps">
        <text>minTime</text>
        <view class="slider">
          <slider min="0" max="200" />

        </view>
        <text>minTime</text>
      </view>
      <view class="player-btns">
        <van-icon name="arrow-left" />
        <van-icon @click="playMusic" v-if="!isPlaying" name="play" />
        <van-icon v-else name="pause" />
        <van-icon name="arrow" />

      </view>
    </view>

  </div>
</template>


<script>
import { get } from "@/util";
import { parseTime } from "@/utils/index.js";
import { getLyList } from "./util.js";

export default {
  mounted() {
    // this.getBanner();
    // this.getRecommendSongList();
    // this.getSongList();
    // this.getMvlist();
  },
  onShow() {
    this.init();
    console.log("onSHow");
  },
  computed: {},
  data() {
    return {
      songList: [],
      isPlaying: false,
      currentIndex: 0,
      lrcObj: {},
      songDetail: {},
      toView: "ly1"
    };
  },
  methods: {
    init() {
      let arr = wx.getStorageSync("songList") || [];
      let songList = [];
      arr.map(item => {
        songList.push({
          title: item.split("#song-")[0],
          id: item
        });
      });
      this.songList = songList;
      console.log(this.songList);
    },
    async playMusic() {
      // let song = this.songList[this.currentIndex];
      // let songObj = song.id.split("song-")[1];

      let songObj = "yc-2900915";
      await this.getSongDetailById(songObj);
      this.playing();
      console.log(songObj);
    },
    async getSongDetailById(songObj) {
      let obj = {
        songId: songObj.split("-")[1],
        type: songObj.split("-")[0]
      };
      let res = await get(`/getSongDetailById`, obj);
      this.songDetail = res;
      this.lrcObj = getLyList(res.lrc);
      console.log(this.lrcObj);
    },
    playing() {
      if (this.isPlaying) {
        return;
      }
      this.isPlaying = true;
      let times = Object.keys(this.lrcObj);
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = this.songDetail.data.squrl;
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
    }
  }
};
</script>

<style lang='scss' scoped>
.player {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  .player-header {
    position: absolute;
    top: 0;
    bottom: 120px;
    width: 100%;
    .player-swiper {
      height: 100%;
      .song-items {
        height: 100%;
      }
      .song-pic {
      }
      .song-lrc {
      }
    }
  }
  .player-actions {
    position: absolute;
    bottom: 0;
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .player-steps {
      font-size: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      .slider {
        flex-grow: 3;
      }
    }
    .player-btns {
      padding: 0 5px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>

