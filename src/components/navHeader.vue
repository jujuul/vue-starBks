<!--
 * @Author: your name
 * @Date: 2020-10-18 18:21:53
 * @LastEditTime: 2020-10-18 21:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\components\navHeader.vue
-->
<template>
  <header class="header">
    <a href="javascript:;" class="logo" @click="pageRedir(0)">
      <img src="@/assets/images/logo.svg" alt="星巴克" />
    </a>
    <div class="primary-nav">
      <ul>
        <li><a href="">门店</a></li>
        <li><a href="">我的帐户</a></li>
        <li><a href="">菜单</a></li>
      </ul>
    </div>
    <a rel="nav-overlay" class="icon" @click="showMenu">
      <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-hamburger.svg" alt="更多" />
    </a>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showMenu() {
      this.$emit("clickedShowMenu");
    },
    pageRedir(item) {
      this.$store.commit("pageRedir", item);
    },
  },
};
</script>
<style lang="less" scoped>
@media screen and (min-width: 1025px) {
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
  }
  .nav {
    .nav-container {
      width: 100%;
      height: 100%;
      /*menuPage超出后显示滚动条*/
      overflow: auto;
      overflow-x: hidden;
      .header {
        position: fixed;
        left: 0%;
        right: 70%;
        height: 49px;
        padding: 24px;
        box-sizing: content-box;
        background-color: #fff;
        z-index: 1002;
        .icon {
          float: right;
          padding-top: 6px;
          cursor: pointer;
          margin-right: 5px;
        }
        .logo {
          float: left;
          margin-right: 12px;
          width: 36px;
          img {
            float: left;
            width: 36px;
          }
        }
        .primary-nav {
          max-width: calc(100% - 72px);
          overflow: hidden;
          display: inline-block;
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
            li {
              float: left;
              white-space: nowrap;
              a {
                display: block;
                color: rgba(0, 0, 0, 0.87);
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 1px;
                text-decoration: none;
                padding: 8px 10px 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>