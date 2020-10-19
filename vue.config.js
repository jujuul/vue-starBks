/*
 * @Author: your name
 * @Date: 2020-10-18 17:54:19
 * @LastEditTime: 2020-10-18 22:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \starbks\vue.config.js
 */

const webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      },
    ]);
  },
};

// module.exports = {
//   css: {
//     loaderOptions: {
//       css: {},
//       postcss: {
//         plugins: [
//           require("postcss-px2rem")({
//             // 以设计稿750为例， 750 / 10 = 75
//             remUnit: 75,
//           }),
//         ],
//       },
//     },
//   },
// };
