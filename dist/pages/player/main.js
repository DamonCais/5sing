require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ce2269a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ce2269a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ce2269a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\player\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ce2269a", Component.options)
  } else {
    hotAPI.reload("data-v-3ce2269a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_js__ = __webpack_require__(162);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function mounted() {
    // this.getBanner();
    // this.getRecommendSongList();
    // this.getSongList();
    // this.getMvlist();
  },
  onShow: function onShow() {
    this.init();
    console.log("onSHow");
  },

  computed: {},
  data: function data() {
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
    init: function init() {
      var arr = wx.getStorageSync("songList") || [];
      var songList = [];
      arr.map(function (item) {
        songList.push({
          title: item.split("#song-")[0],
          id: item
        });
      });
      this.songList = songList;
      console.log(this.songList);
    },
    playMusic: function playMusic() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var songObj;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // let song = this.songList[this.currentIndex];
                // let songObj = song.id.split("song-")[1];

                songObj = "yc-2900915";
                _context.next = 3;
                return _this.getSongDetailById(songObj);

              case 3:
                _this.playing();
                console.log(songObj);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getSongDetailById: function getSongDetailById(songObj) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var obj, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                obj = {
                  songId: songObj.split("-")[1],
                  type: songObj.split("-")[0]
                };
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])("/getSongDetailById", obj);

              case 3:
                res = _context2.sent;

                _this2.songDetail = res;
                _this2.lrcObj = Object(__WEBPACK_IMPORTED_MODULE_5__util_js__["a" /* getLyList */])(res.lrc);
                console.log(_this2.lrcObj);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    playing: function playing() {
      var _this3 = this;

      if (this.isPlaying) {
        return;
      }
      this.isPlaying = true;
      var times = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.lrcObj);
      var innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = this.songDetail.data.squrl;
      innerAudioContext.onPlay(function () {
        console.log("开始播放");
      });
      innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
      innerAudioContext.onTimeUpdate(function () {
        for (var i = 0; i < times.length; i++) {
          if (innerAudioContext.currentTime > Number(times[i]) && innerAudioContext.currentTime < times[i + 1]) {
            _this3.toView = "ly" + times[i];
            console.log(times[i]);
            break;
          }
        }
        // console.log(innerAudioContext.currentTime);
      });
    }
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "player"
  }, [_c('view', {
    staticClass: "player-header"
  }, [_c('swiper', {
    staticClass: "player-swiper",
    attrs: {
      "indicator-dots": true,
      "indicator-color": "#EA5A49",
      "circular": true
    }
  }, [_c('block', [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('scroll-view', {
    staticClass: "song-items",
    attrs: {
      "scroll-y": "",
      "bindscroll": "scroll",
      "scroll-into-view": _vm.toView
    }
  }, _vm._l((_vm.lrcObj), function(val, key, index) {
    return _c('view', {
      key: key,
      attrs: {
        "id": 'ly' + key
      }
    }, [_c('text', [_vm._v(_vm._s(val))])])
  }))], 1)], 1), _vm._v(" "), _c('block', [_c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('scroll-view', {
    staticClass: "song-items",
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.songList), function(item, i) {
    return _c('van-cell', {
      key: i,
      attrs: {
        "title": item.title,
        "data-id": item.id,
        "mpcomid": '1-' + i
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('block', [_c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('view', [_vm._v("唱片")])])], 1)], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "player-actions"
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "player-btns"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow-left",
      "mpcomid": '4'
    }
  }), _vm._v(" "), (!_vm.isPlaying) ? _c('van-icon', {
    attrs: {
      "name": "play",
      "eventid": '0',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.playMusic
    }
  }) : _c('van-icon', {
    attrs: {
      "name": "pause",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "mpcomid": '7'
    }
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "player-steps"
  }, [_c('text', [_vm._v("minTime")]), _vm._v(" "), _c('view', {
    staticClass: "slider"
  }, [_c('slider', {
    attrs: {
      "min": "0",
      "max": "200"
    }
  })]), _vm._v(" "), _c('text', [_vm._v("minTime")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ce2269a", esExports)
  }
}

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLyList;
function getLyList(lrc) {
  console.log(lrc);
  var lyrics = lrc.split("\n");
  var lrcObj = {};
  if (lyrics.length === 1) {
    lrcObj[1] = lyrics[0];
  }
  for (var i = 0; i < lyrics.length; i++) {
    var timeReg = /\[(\d*)\:(\d*)\.(\d*)\]/;
    var timeRegExpArr = lyrics[i].match(timeReg);
    if (!timeRegExpArr) continue;
    var word = lyrics[i].replace(timeReg, "");
    var min = Number(timeRegExpArr[1]);
    var sec = Number(timeRegExpArr[2]);
    var time = 60 * min + sec;
    lrcObj[time] = word;
  }
  return lrcObj;
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map