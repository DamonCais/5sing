require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(129);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_eeeef2d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eeeef2d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_eeeef2d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eeeef2d4", Component.options)
  } else {
    hotAPI.reload("data-v-eeeef2d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index_js__ = __webpack_require__(36);



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

  computed: {
    checkAll: {
      set: function set(val) {
        if (val) {
          this.result = this.list;
        } else {
          this.result = [];
        }
      },
      get: function get() {
        return this.result.length === this.list.length;
      }
    }
  },
  data: function data() {
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

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
    noop: function noop() {},
    onChange: function onChange(event) {
      console.log(event);
      this.setData({
        result: event.detail
      });
    },
    toggleAll: function toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle: function toggle(event) {
      var name = event.currentTarget.dataset.name;

      if (this.result.findIndex(function (n) {
        return n === name;
      }) === -1) {
        this.result.push(name);
      } else {
        this.result = this.result.filter(function (n) {
          return n !== name;
        });
      }
    },
    toUrl: function toUrl(id) {
      console.log(id);
      var url = "../album/main?albumId=" + id;
      wx.navigateTo({ url: url });
    },
    getRecommendSongList: function getRecommendSongList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])("/getRecommendSongList");

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

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])("/getBanner");

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

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var obj, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                obj = {
                  pageIndex: 1
                };
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])("/getSongListSquareRecommended", obj);

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

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])("/getMvlist");

              case 2:
                res = _context4.sent;


                _this4.mvList = res.data.list;
                _this4.mvList.forEach(function (mv) {
                  mv.durationTime = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index_js__["a" /* parseTime */])(1000 * mv.duration, "{i}:{s}");
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  }, "onChange", function onChange() {}),
  filters: {
    getParseTime: function getParseTime(time) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_index_js__["a" /* parseTime */])(1000 * time, "{i}:{s}");
    }
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('van-button', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        _vm.isEdit = !_vm.isEdit
      }
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "clickable": "",
      "title": "全选",
      "data-name": "all",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.toggleAll
    }
  }, [(_vm.isEdit) ? _c('van-checkbox', {
    attrs: {
      "value": _vm.checkAll,
      "mpcomid": '1'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('van-checkbox-group', {
    attrs: {
      "value": _vm.result,
      "mpcomid": '6'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, _vm._l((_vm.list), function(item, i) {
    return _c('van-cell', {
      key: i,
      attrs: {
        "title": item,
        "clickable": "",
        "data-name": item,
        "eventid": '2-' + i,
        "mpcomid": '4-' + i
      },
      on: {
        "click": _vm.toggle
      }
    }, [(_vm.isEdit) ? _c('van-checkbox', {
      attrs: {
        "name": item,
        "mpcomid": '3-' + i
      }
    }) : _vm._e()], 1)
  }))], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-eeeef2d4", esExports)
  }
}

/***/ })

},[128]);
//# sourceMappingURL=main.js.map