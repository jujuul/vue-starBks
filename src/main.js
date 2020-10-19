/*
 * @Author: your name
 * @Date: 2020-10-18 17:50:08
 * @LastEditTime: 2020-10-18 22:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
// import "lib-flexible";
import $ from "jquery";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  render: (h) => h(App),
}).$mount("#app");
