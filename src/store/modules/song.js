const song = {
    state: {
        songList: wx.getStorageSync('songList') || []
    },
    mutations: {
        SET_SONG_LIST: (state, songList) => {
            state.songList = songList;
            wx.setStorageSync('songList', songList);
            // window.location.reload();
        }
    },
};

export default song;