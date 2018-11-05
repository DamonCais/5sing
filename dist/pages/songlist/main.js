require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(143);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_01b584c5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01b584c5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_01b584c5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\songlist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01b584c5", Component.options)
  } else {
    hotAPI.reload("data-v-01b584c5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(12);
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
  onLoad: function onLoad() {
    console.log("onload");
  },
  onShow: function onShow() {
    this.init();
    console.log("onSHow");
  },
  mounted: function mounted() {},

  computed: {
    checkAll: {
      set: function set(val) {
        if (val) {
          var arr = [];
          this.songList.map(function (item) {
            arr.push(item.id);
          });
          this.result = arr;
        } else {
          this.result = [];
        }
      },
      get: function get() {
        if (this.songList && this.songList.length) {
          return this.result.length === this.songList.length;
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
    remove: function remove() {
      var _this = this;

      var arr = wx.getStorageSync("songList");
      var nowArr = arr.filter(function (item) {
        return _this.result.indexOf(item) == -1;
      });
      wx.setStorageSync("songList", nowArr);
      var songList = [];
      nowArr.map(function (item) {
        songList.push({
          title: item.split("#song-")[0],
          id: item
        });
      });
      this.songList = songList;
      this.checkAll = false;
    },
    playAll: function playAll() {
      var url = "../player/main";
      wx.navigateTo({ url: url });
    },
    toggleAll: function toggleAll() {
      this.checkAll = !this.checkAll;
    },
    toggle: function toggle(event) {
      if (!this.isEdit) return;
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
    }
  }
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-cell', {
    attrs: {
      "value": _vm.isEdit ? '完成' : '编辑',
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": function($event) {
        _vm.isEdit = !_vm.isEdit
      }
    }
  }, [(_vm.isEdit) ? _c('view', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleAll($event)
      }
    },
    slot: "title"
  }, [_c('van-checkbox', {
    attrs: {
      "value": _vm.checkAll,
      "mpcomid": '0'
    }
  }, [_vm._v("全选")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "song-list"
  }, [_c('scroll-view', {
    staticClass: "song-items",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('van-checkbox-group', {
    attrs: {
      "value": _vm.result,
      "mpcomid": '5'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '4'
    }
  }, _vm._l((_vm.songList), function(item, i) {
    return _c('van-cell', {
      key: i,
      attrs: {
        "clickable": _vm.isEdit,
        "data-id": item.id,
        "eventid": '2-' + i,
        "mpcomid": '3-' + i
      },
      on: {
        "click": _vm.toggle
      }
    }, [_c('view', {
      slot: "title"
    }, [(_vm.isEdit) ? _c('van-checkbox', {
      attrs: {
        "name": item.id,
        "mpcomid": '2-' + i
      }
    }, [_vm._v(_vm._s(item.title))]) : _c('view', [_vm._v("\n                " + _vm._s(item.title) + "\n              ")])], 1)])
  }))], 1)], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "action-btns"
  }, [_c('view', {
    staticClass: "btns"
  }, [(!_vm.isEdit) ? _c('van-button', {
    staticClass: "btn",
    attrs: {
      "size": "large",
      "type": "primary",
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.playAll
    }
  }, [_vm._v("播放全部")]) : _vm._e(), _vm._v(" "), (_vm.isEdit) ? _c('van-button', {
    staticClass: "btn",
    attrs: {
      "size": "large",
      "type": "warning",
      "mpcomid": '7'
    }
  }, [_vm._v("马上播放")]) : _vm._e(), _vm._v(" "), (_vm.isEdit) ? _c('van-button', {
    staticClass: "btn",
    attrs: {
      "size": "large",
      "type": "danger",
      "eventid": '4',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.remove
    }
  }, [_vm._v("移除歌单")]) : _vm._e()], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-01b584c5", esExports)
  }
}

/***/ })

},[142]);
//# sourceMappingURL=main.js.map