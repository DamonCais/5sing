<template>
    <div class="album">
        <div class="album-info">
            <img :src="album.img" alt="">
            <div class="album-title">
                <h3>{{album.title}}</h3>
                <h3>创建者: {{album.userName}}</h3>
                <text>{{album.normalInfo}}</text>
            </div>

        </div>
        <h4>歌单歌曲(共{{songLen}}首)</h4>

        <div class="album-list">

            <van-cell v-if="!isEdit" icon="play" :border="false">
                <view @click="playAll" slot="title">
                    <span class="van-cell-text">播放全部</span>
                </view>
                <text @click="isEdit=true">
                    编辑
                </text>
            </van-cell>

            <van-cell v-if="isEdit" icon="wap-nav" :border="false">
                <view @click="addToMylist" slot="title">
                    <span class="van-cell-text">加入歌单</span>
                </view>
                <text @click="isEdit=false">
                    完成
                </text>
            </van-cell>

            <van-cell v-if="isEdit" clickable title="全选" data-name="all" @click="toggleAll">
                <van-checkbox :value="checkAll"></van-checkbox>
            </van-cell>
            <scroll-view scroll-y class="album-items">
                <van-checkbox-group :value="result">
                    <van-cell-group>
                        <van-cell v-for="(item,i) in album.songList" :title="item.title" :key="i" clickable :data-id="item.id" @click="toggle">
                            <van-checkbox v-if="isEdit" :name="item.id" />
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </scroll-view>

        </div>

    </div>
</template>

<script>
import { get, showSuccess } from "@/util";
import store from "@/store";

export default {
  mounted() {
    this.albumId = this.$root.$mp.query.albumId;
    this.getSongListByalbumId();
    this.songList = wx.getStorageSync("songList");
    console.log(this.songList);
  },
  computed: {
    checkAll: {
      set(val) {
        if (val) {
          let arr = [];
          this.album.songList.map(item => {
            arr.push(item.id);
          });
          this.result = arr;
        } else {
          this.result = [];
        }
      },
      get() {
        if (this.album.songList && this.album.songList.length) {
          return this.result.length === this.album.songList.length;
        } else {
          return false;
        }
      }
    }
  },
  data() {
    return {
      active: 0,
      albumId: "",
      album: {},
      songLen: 0,
      result: [],
      isEdit: false,
      songList: [],
      extList: []
    };
  },
  methods: {
    addToMylist() {
      let arr = this.extList.concat(this.result);
      wx.setStorageSync("songList", arr);
      showSuccess("添加成功!");
    },
    playAll() {
      console.log("playAll");
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle(event) {
      const { id } = event.currentTarget.dataset;
      if (this.result.findIndex(n => n === id) === -1) {
        this.result.push(id);
      } else {
        this.result = this.result.filter(n => n !== id);
      }
    },
    async getSongListByalbumId() {
      let obj = {
        albumId: this.albumId
      };
      let res = await get(`/getSongListByalbumId`, obj);
      this.album = res;
      this.songLen = this.album.songList.length;
      this.album.songList.forEach(item => {
        item.id = `${item.title}#${item.songId}`;
      });
      let arr = this.album.songList.filter(
        item => this.songList.indexOf(item.id) != -1
      );
      let currentMap = [];
      this.album.songList.map(item => {
        currentMap.push(item.id);
      });
      this.extList = this.songList.filter(
        item => currentMap.indexOf(item) == -1
      );
      this.result = [];
      arr.map(item => {
        this.result.push(item.id);
      });
    },
    onChange(event) {
      this.setData({
        result: event.detail
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.album {
  height: 100%;
  width: 100%;

  .album-info {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    height: 350rpx;
    img {
      width: 300rpx;
      height: 300rpx;
    }
    .album-title {
      width: 450rpx;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  h4 {
    font-size: 18px;
    padding-left: 10px;
    border-left: 5px solid greenyellow;
  }
  .album-list {
    position: fixed;
    top: 400rpx;
    bottom: 0;
    width: 100%;
    .album-btns {
      display: flex;
      .album-btn {
        width: 50%;
      }
    }
    .album-items {
      height: 100%;
    }
  }
}
</style>
