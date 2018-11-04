
<template>
  <div class="home">
    <van-button @click="isEdit=!isEdit">编辑</van-button>
    <van-cell clickable title="全选" data-name="all" @click="toggleAll">
      <van-checkbox v-if="isEdit" :value="checkAll"></van-checkbox>
    </van-cell>
    <van-checkbox-group :value="result">
      <van-cell-group>
        <van-cell v-for="(item,i) in list" :title="item" :key="i" clickable :data-name="item" @click="toggle">
          <van-checkbox v-if="isEdit" :name="item" />
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>


<script>
import { get } from "@/util";
import { parseTime } from "@/utils/index.js";

export default {
  mounted() {
    // this.getBanner();
    // this.getRecommendSongList();
    // this.getSongList();
    // this.getMvlist();
  },
  computed: {
    checkAll: {
      set(val) {
        if (val) {
          this.result = this.list;
        } else {
          this.result = [];
        }
      },
      get() {
        return this.result.length === this.list.length;
      }
    }
  },
  data() {
    return {
      active: 1,
      isEdit: false,
      list: ["a", "b", "c"],
      result: ["a"],
      recommendSongList: [],
      songList: [],
      mvList: [],
      bannerList: []
    };
  },
  methods: {
    noop() {},
    onChange(event) {
      console.log(event);
      this.setData({
        result: event.detail
      });
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle(event) {
      const { name } = event.currentTarget.dataset;
      if (this.result.findIndex(n => n === name) === -1) {
        this.result.push(name);
      } else {
        this.result = this.result.filter(n => n !== name);
      }
    },
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

