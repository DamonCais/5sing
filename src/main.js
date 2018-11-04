import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


export default {
    config: {
        pages: ['^pages/home/main'],
        'window': {
            // 'backgroundTextStyle': 'light',
            // 'navigationBarBackgroundColor': '#EA5149',
            // 'navigationBarTitleText': '蜗牛图书',
            // 'navigationBarTextStyle': 'light'
        },
        'tabBar': {
            selectedColor: '#EA5149',
            list: [{
                    pagePath: 'pages/home/main',
                    text: '首页',
                    iconPath: 'static/img/book.png',
                    selectedIconPath: 'static/img/book-active.png'
                },
                {
                    pagePath: 'pages/yc/main',
                    text: '原创',
                    iconPath: 'static/img/todo.png',
                    selectedIconPath: 'static/img/todo-active.png'
                },
                {
                    pagePath: 'pages/fc/main',
                    text: '翻唱',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                },
                {
                    pagePath: 'pages/songlist/main',
                    text: '歌单',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                }

            ]
        }
    }
}