require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_5f9d8311_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f9d8311"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_5f9d8311_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f9d8311", Component.options)
  } else {
    hotAPI.reload("data-v-5f9d8311", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(109);


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
    this.getBanner();
    this.getRecommendSongList();
    this.getSongList();

    this.getMvlist();
  },
  data: function data() {
    return {
      active: 1,
      recommendSongList: [],
      songList: [],
      mvList: [],
      bannerList: []
    };
  },

  methods: {
    toUrl: function toUrl(id) {
      console.log(id);
      var url = "../album/main?albumId=" + id;
      wx.navigateTo({ url: url });
    },
    getRecommendSongList: function getRecommendSongList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])("/getRecommendSongList");

              case 2:
                res = _context.sent;

                _this.recommendSongList = res.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getBanner: function getBanner() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])("/getBanner");

              case 2:
                res = _context2.sent;

                _this2.bannerList = res.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getSongList: function getSongList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var obj, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                obj = {
                  pageIndex: 1
                };
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])("/getSongListSquareRecommended", obj);

              case 3:
                res = _context3.sent;

                _this3.songList = res.data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    getMvlist: function getMvlist() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])("/getMvlist");

              case 2:
                res = _context4.sent;


                _this4.mvList = res.data.list;
                _this4.mvList.forEach(function (mv) {
                  mv.durationTime = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["a" /* parseTime */])(1000 * mv.duration, "{i}:{s}");
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    onChange: function onChange() {}
  },
  filters: {
    getParseTime: function getParseTime(time) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["a" /* parseTime */])(1000 * time, "{i}:{s}");
    }
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": true,
      "indicator-color": "#EA5A49",
      "autoplay": true,
      "interval": 4000,
      "duration": 1000,
      "circular": true
    }
  }, _vm._l((_vm.bannerList), function(b, i) {
    return _c('block', {
      key: i
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + i
      }
    }, [_c('img', {
      staticClass: "swiper-image",
      attrs: {
        "src": b.thumb,
        "alt": ""
      }
    })])], 1)
  })), _vm._v(" "), _c('h4', [_vm._v("推荐歌单")]), _vm._v(" "), _c('div', {
    staticClass: "recommend-list"
  }, _vm._l((_vm.recommendSongList), function(r, i) {
    return _c('div', {
      key: i,
      staticClass: "recommend-item",
      attrs: {
        "eventid": '0-' + i
      },
      on: {
        "click": function($event) {
          _vm.toUrl(r.SongListId)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": r.Picture,
        "alt": ""
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(r.Title))])])
  })), _vm._v(" "), _c('h4', [_vm._v("精选推荐")]), _vm._v(" "), _c('div', {
    staticClass: "recommend-list"
  }, _vm._l((_vm.songList), function(r, i) {
    return _c('div', {
      key: i,
      staticClass: "recommend-item",
      attrs: {
        "eventid": '1-' + i
      },
      on: {
        "click": function($event) {
          _vm.toUrl(r.SongListId)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": r.Picture,
        "alt": ""
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(r.Title))])])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5f9d8311", esExports)
  }
}

/***/ })

},[105]);
//# sourceMappingURL=main.js.map