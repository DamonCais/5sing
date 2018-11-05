require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "album"
  }, [_c('div', {
    staticClass: "album-info"
  }, [_c('img', {
    attrs: {
      "src": _vm.album.img,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "album-title"
  }, [_c('h3', [_vm._v(_vm._s(_vm.album.title))]), _vm._v(" "), _c('h3', [_vm._v("创建者: " + _vm._s(_vm.album.userName))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(_vm.album.normalInfo))])], 1)]), _vm._v(" "), _c('h4', [_vm._v("歌单歌曲(共" + _vm._s(_vm.songLen) + "首)")]), _vm._v(" "), _c('div', {
    staticClass: "album-list"
  }, [(!_vm.isEdit) ? _c('van-cell', {
    attrs: {
      "icon": "play",
      "border": false,
      "mpcomid": '0'
    }
  }, [_c('view', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.playAll
    },
    slot: "title"
  }, [_c('span', {
    staticClass: "van-cell-text"
  }, [_vm._v("播放全部")])]), _vm._v(" "), _c('text', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.isEdit = true
      }
    }
  }, [_vm._v("\n                编辑\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.isEdit) ? _c('van-cell', {
    attrs: {
      "icon": "wap-nav",
      "border": false,
      "mpcomid": '1'
    }
  }, [_c('view', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addToMylist
    },
    slot: "title"
  }, [_c('span', {
    staticClass: "van-cell-text"
  }, [_vm._v("加入歌单")])]), _vm._v(" "), _c('text', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.isEdit = false
      }
    }
  }, [_vm._v("\n                完成\n            ")])]) : _vm._e(), _vm._v(" "), (_vm.isEdit) ? _c('van-cell', {
    attrs: {
      "clickable": "",
      "title": "全选",
      "data-name": "all",
      "eventid": '4',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.toggleAll
    }
  }, [_c('van-checkbox', {
    attrs: {
      "value": _vm.checkAll,
      "mpcomid": '2'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('scroll-view', {
    staticClass: "album-items",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('van-checkbox-group', {
    attrs: {
      "value": _vm.result,
      "mpcomid": '7'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '6'
    }
  }, _vm._l((_vm.album.songList), function(item, i) {
    return _c('van-cell', {
      key: i,
      attrs: {
        "title": item.title,
        "clickable": "",
        "data-id": item.id,
        "eventid": '5-' + i,
        "mpcomid": '5-' + i
      },
      on: {
        "click": _vm.toggle
      }
    }, [(_vm.isEdit) ? _c('van-checkbox', {
      attrs: {
        "name": item.id,
        "mpcomid": '4-' + i
      }
    }) : _vm._e()], 1)
  }))], 1)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e323bf3", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(69);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_2e323bf3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(70)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e323bf3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_2e323bf3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\album\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e323bf3", Component.options)
  } else {
    hotAPI.reload("data-v-2e323bf3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(96);


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
    this.albumId = this.$root.$mp.query.albumId;
    this.getSongListByalbumId();
    this.songList = wx.getStorageSync("songList");
    console.log(this.songList);
  },

  computed: {
    checkAll: {
      set: function set(val) {
        if (val) {
          var arr = [];
          this.album.songList.map(function (item) {
            arr.push(item.id);
          });
          this.result = arr;
        } else {
          this.result = [];
        }
      },
      get: function get() {
        if (this.album.songList && this.album.songList.length) {
          return this.result.length === this.album.songList.length;
        } else {
          return false;
        }
      }
    }
  },
  data: function data() {
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
    addToMylist: function addToMylist() {
      var arr = this.extList.concat(this.result);
      wx.setStorageSync("songList", arr);
      Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* showSuccess */])("添加成功!");
    },
    playAll: function playAll() {
      console.log("playAll");
    },
    toggleAll: function toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle: function toggle(event) {
      var id = event.currentTarget.dataset.id;

      if (this.result.findIndex(function (n) {
        return n === id;
      }) === -1) {
        this.result.push(id);
      } else {
        this.result = this.result.filter(function (n) {
          return n !== id;
        });
      }
    },
    getSongListByalbumId: function getSongListByalbumId() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var obj, res, arr, currentMap;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                obj = {
                  albumId: _this.albumId
                };
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])("/getSongListByalbumId", obj);

              case 3:
                res = _context.sent;

                _this.album = res;
                _this.songLen = _this.album.songList.length;
                _this.album.songList.forEach(function (item) {
                  item.id = item.title + "#" + item.songId;
                });
                arr = _this.album.songList.filter(function (item) {
                  return _this.songList.indexOf(item.id) != -1;
                });
                currentMap = [];

                _this.album.songList.map(function (item) {
                  currentMap.push(item.id);
                });
                _this.extList = _this.songList.filter(function (item) {
                  return currentMap.indexOf(item) == -1;
                });
                _this.result = [];
                arr.map(function (item) {
                  _this.result.push(item.id);
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    onChange: function onChange(event) {
      this.setData({
        result: event.detail
      });
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_song__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(99);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    modules: {
        song: __WEBPACK_IMPORTED_MODULE_2__modules_song__["a" /* default */]
    },
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__["a" /* default */]
});

/* unused harmony default export */ var _unused_webpack_default_export = (store);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var song = {
    state: {
        songList: wx.getStorageSync('songList') || []
    },
    mutations: {
        SET_SONG_LIST: function SET_SONG_LIST(state, songList) {
            state.songList = songList;
            wx.setStorageSync('songList', songList);
            // window.location.reload();
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (song);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
    songList: function songList(state) {
        return state.song.songList;
    }

};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ })

},[68]);
//# sourceMappingURL=main.js.map