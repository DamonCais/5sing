<template>
  <div class="home">
    <swiper :indicator-dots='true' indicator-color='#EA5A49' :autoplay='true' :interval='4000' :duration='1000' :circular='true'>
      <block v-for="(b,i) in bannerList" :key="i">
        <swiper-item>
          <img class='swiper-image' :src="b.thumb" alt="">
        </swiper-item>
      </block>
    </swiper>

    <h4>推荐歌单</h4>
    <div class="recommend-list">
      <div class="recommend-item" @click="toUrl(r.SongListId)" v-for="(r,i) in recommendSongList" :key="i">
        <img :src="r.Picture" alt="">
        <text>{{r.Title}}</text>
      </div>

    </div>
    <h4>精选推荐</h4>
    <div class="recommend-list">
      <div class="recommend-item" @click="toUrl(r.SongListId)" v-for="(r,i) in songList" :key="i">
        <img :src="r.Picture" alt="">
        <text>{{r.Title}}</text>
      </div>
    </div>

    <!-- <h4>推荐视频</h4>
    <div class="mv-list">
      <div class="mv-item" v-for="(m,i) in mvList" :key="i">
        <img :src="m.cover_url" alt="">
        <text>{{m.title}}</text>
        <text class="mv-auth">{{m.user.NN}}</text>
        <div class="mv-info">
          <span>{{m.durationTime}}</span>
          <span>{{m.play}}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>


<script>
import { get } from "@/util";
import { parseTime } from "@/utils/index.js";

export default {
  mounted() {
    this.getBanner();
    this.getRecommendSongList();
    this.getSongList();

    this.getMvlist();
  },

  data() {
    return {
      active: 1,
      recommendSongList: [],
      songList: [],
      mvList: [],
      bannerList: []
    };
  },
  methods: {
    toUrl(id) {
      console.log(id);
      const url = `../album/main?albumId=${id}`;
      wx.navigateTo({ url });
    },
    async getRecommendSongList() {
      let res = await get(`/getRecommendSongList`);
      this.recommendSongList = res.data;
    },
    async getBanner() {
      let res = await get(`/getBanner`);
      this.bannerList = res.data;
    },
    async getSongList() {
      let obj = {
        pageIndex: 1
      };
      let res = await get(`/getSongListSquareRecommended`, obj);
      this.songList = res.data;
    },
    async getMvlist() {
      let res = await get(`/getMvlist`);

      this.mvList = res.data.list;
      this.mvList.forEach(mv => {
        mv.durationTime = parseTime(1000 * mv.duration, "{i}:{s}");
      });
    },
    onChange() {}
  },
  filters: {
    getParseTime(time) {
      return parseTime(1000 * time, "{i}:{s}");
    }
  }
};
</script>

<style lang='scss' scoped>
.home {
  .swiper-image {
    width: 750rpx;
    height: 300rpx;
  }
  h4 {
    font-size: 18px;
    padding-left: 10px;
    border-left: 5px solid greenyellow;
  }
}
.recommend-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .recommend-item {
    width: 250rpx;
    // height: 280rpx;
    padding: 5px;
    box-sizing: border-box;
    img {
      width: 225rpx;
      height: 225rpx;
    }

    text {
      display: -webkit-box;
      font-size: 28rpx;
      line-height: 40rpx;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.mv-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .mv-item {
    width: 375rpx;
    padding: 5px;
    box-sizing: border-box;
    position: relative;

    img {
      width: 360rpx;
      height: 240rpx;
    }
    .mv-info {
      position: absolute;
      top: 210rpx;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 0 15px;
      font-size: 10px;
    }
    text {
      display: block;

      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .mv-auth {
      color: #999;
    }
  }
}
</style>
