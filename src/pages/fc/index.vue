<template>
  <div class="fc">
    <h4>推荐音乐</h4>
    <div v-for="(fc,i) in fcList" :key="i" class="fc-item">
      <text class="fc-index">{{i}}</text>
      <img :src="fc.singerImage" alt="">
      <div class="fc-info">
        <text class="fc-name">{{fc.songName}}</text>
        <text class="fc-singer">{{fc.singer}}</text>
      </div>
      <text class="fc-rq">{{fc.rqNum}}</text>

    </div>
  </div>
</template>

<script>
import { get } from "@/util";
//
export default {
  mounted() {
    this.getFcList();
  },
  data() {
    return {
      fcList: [],
      pageIndex: 1
    };
  },
  onReachBottom() {
    this.pageIndex = this.pageIndex + 1;
    this.getFcList();
  },
  methods: {
    async getFcList() {
      let obj = {
        pageIndex: this.pageIndex
      };
      wx.showNavigationBarLoading();

      let res = await get(`/getFcList`, obj);
      let arr = res.data;
      arr.forEach(fc => {
        fc.rqNum = (fc.rq / 10000).toFixed(1) + "万";
      });
      this.fcList.push(...arr);
      wx.hideNavigationBarLoading();
    },
    onChange() {}
  }
};
</script>

<style lang="scss" scoped>
.fc {
  h4 {
    font-size: 18px;
    padding-left: 10px;
    border-left: 5px solid greenyellow;
  }
  .fc-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    margin-bottom: 10px;
    .fc-index {
      width: 100rpx;
      text-align: center;
    }
    img {
      width: 100rpx;
      height: 100rpx;
    }
    .fc-info {
      width: 445rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      padding: 0 15px;
      box-sizing: border-box;
      .fc-name {
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .fc-singer {
        font-size: 12px;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #999;
      }
    }
    .fc-rq {
      width: 130rpx;
    }
  }
}
</style>
