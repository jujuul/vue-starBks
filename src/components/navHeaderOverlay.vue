<!--
 * @Author: your name
 * @Date: 2020-10-18 22:00:44
 * @LastEditTime: 2020-10-18 22:00:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\components\navHeaderOverlay.vue
-->
<template>
  <header class="header">
    <a href="javascript:;" class="logo">
      <img src="@/assets/images/logo.svg" alt="星巴克" @click="pageRedir(0)" />
    </a>
    <a class="icon close transition">
      <img src="@/assets/icons/icon-close.svg" alt="关闭" @click="closeMenu" />
    </a>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeMenu() {
      this.$emit("clickedCloseMenu");
    },
    pageRedir(item) {
      this.$store.commit("pageRedir", item);
    },
  },
};
</script>