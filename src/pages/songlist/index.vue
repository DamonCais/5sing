<template>
  <div>
    <van-cell @click="isEdit=!isEdit" :value="isEdit?'完成':'编辑'">
      <view v-if="isEdit" @click.stop="toggleAll" slot="title">
        <van-checkbox :value="checkAll">全选</van-checkbox>
      </view>
    </van-cell>
    <div class="song-list">
      <scroll-view class="song-items" scroll-y>
        <van-checkbox-group :value="result">
          <van-cell-group>
            <van-cell @click="toggle" v-for="(item,i) in songList" :key="i" :clickable="isEdit" :data-id="item.id">
              <view slot="title">
                <van-checkbox v-if="isEdit" :name="item.id">{{item.title}}</van-checkbox>
                <view v-else>
                  {{item.title}}
                </view>
              </view>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </scroll-view>
    </div>

    <view class="action-btns">
      <view class="btns">
        <van-button v-if="!isEdit" size='large' class="btn" @click="playAll" type="primary">播放全部</van-button>
        <van-button v-if="isEdit" size='large' class="btn" type="warning">马上播放</van-button>
        <van-button v-if="isEdit" size='large' class="btn" @click="remove" type="danger">移除歌单</van-button>
      </view>
    </view>

  </div>
</template>

<script>
import { get } from "@/util";

export default {
  onLoad() {
    console.log("onload");
  },
  onShow() {
    this.init();
    console.log("onSHow");
  },
  mounted() {},
  computed: {
    checkAll: {
      set(val) {
        if (val) {
          let arr = [];
          this.songList.map(item => {
            arr.push(item.id);
          });
          this.result = arr;
        } else {
          this.result = [];
        }
      },
      get() {
        if (this.songList && this.songList.length) {
          return this.result.length === this.songList.length;
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
    init() {
      let arr = wx.getStorageSync("songList")||[];
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
    remove() {
      let arr = wx.getStorageSync("songList");
      let nowArr = arr.filter(item => this.result.indexOf(item) == -1);
      wx.setStorageSync("songList", nowArr);
      let songList = [];
      nowArr.map(item => {
        songList.push({
          title: item.split("#song-")[0],
          id: item
        });
      });
      this.songList = songList;
      this.checkAll = false;
    },
    playAll() {
            const url = `../player/main`;
      wx.navigateTo({ url });
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle(event) {
      if (!this.isEdit) return;
      const { id } = event.currentTarget.dataset;
      if (this.result.findIndex(n => n === id) === -1) {
        this.result.push(id);
      } else {
        this.result = this.result.filter(n => n !== id);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.song-list {
  position: fixed;
  top: 50px;
  bottom: 50px;
  width: 100%;
  .song-items {
    height: 100%;
  }
}
.action-btns {
  position: fixed;
  bottom: 0;
  width: 100%;
  .btns {
    display: flex;
    .btn {
      flex: 1;
      width: 100%;
    }
  }
}
</style>