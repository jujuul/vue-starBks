/*
 * @Author: your name
 * @Date: 2020-10-18 17:55:46
 * @LastEditTime: 2020-10-18 21:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";

import Index from "@/views/index";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      meta: {
        title: "星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验",
      },
    },
  ],
});

export default router;
