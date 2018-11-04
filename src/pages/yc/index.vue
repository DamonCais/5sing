<template>
  <div class="yc">
    <h4>推荐音乐</h4>
    <div v-for="(yc,i) in ycList" :key="i" class="yc-item">
      <text class="yc-index">{{i}}</text>
      <img :src="yc.singerImage" alt="">
      <div class="yc-info">
        <text class="yc-name">{{yc.songName}}</text>
        <text class="yc-singer">{{yc.singer}}</text>
      </div>
      <text class="yc-rq">{{yc.rqNum}}</text>

    </div>
  </div>
</template>

<script>
import { get } from "@/util";
//
export default {
  mounted() {
    this.getYcList();
  },
  data() {
    return {
      ycList: [],
      pageIndex: 1
    };
  },
  onReachBottom() {
    this.pageIndex = this.pageIndex + 1;
    this.getYcList();
  },
  methods: {
    async getYcList() {
      let obj = {
        pageIndex: this.pageIndex
      };
      wx.showNavigationBarLoading();

      let res = await get(`/getYcList`, obj);
      let arr = res.data;
      arr.forEach(yc => {
        yc.rqNum = (yc.rq / 10000).toFixed(1) + "万";
      });
      this.ycList.push(...arr);
      wx.hideNavigationBarLoading();
    },
    onChange() {}
  }
};
</script>

<style lang="scss" scoped>
.yc {
  h4 {
    font-size: 18px;
    padding-left: 10px;
    border-left: 5px solid greenyellow;
  }
  .yc-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    margin-bottom: 10px;
    .yc-index {
      width: 100rpx;
      text-align: center;
    }
    img {
      width: 100rpx;
      height: 100rpx;
    }
    .yc-info {
      width: 445rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      padding: 0 15px;
      box-sizing: border-box;
      .yc-name {
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .yc-singer {
        font-size: 12px;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #999;
      }
    }
    .yc-rq {
      width: 130rpx;
    }
  }
}
</style>
