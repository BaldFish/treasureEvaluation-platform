// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
Vue.use(Vuex);
import 'lib-flexible'
import $ from 'jquery';
import '@/common/stylus/index.styl';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入省、市、区三级联动
import {pca, pcaa} from 'area-data';
import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

import '@/common/js/validate.js'

import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);


import axios from 'axios';
Vue.prototype.$axios= axios;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入时间选择器
import Calendar from 'vue2-datepick';
Vue.use(Calendar);

import {baseURL,} from '@/common/js/public.js';
Vue.prototype.$baseURL=baseURL;

const querystring = require('querystring');
Vue.prototype.$querystring=querystring;

import _ from 'lodash';
Vue.prototype.$_=_;

import utils from '@/common/js/utils';
Vue.prototype.$utils=utils;

import wx from 'weixin-js-sdk'
import wxShare from './common/js/share'
Vue.prototype.$wxShare=wxShare;


Vue.config.productionTip = false;
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    url:"",
    code:"",
  },
  mutations: {
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
// 全局配置

