<!--
 * @Author: your name
 * @Date: 2020-10-18 18:19:44
 * @LastEditTime: 2020-10-18 18:19:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\components\navContainer.vue
-->
<template>
  <article class="nav-container home-page">
    <nav-header v-on:clickedShowMenu="showMenu"></nav-header>
    <slot name="navbody"></slot>
  </article>
</template>
<script>
import NavHeader from "@/components/navHeader";
export default {
  data() {
    return {};
  },
  components: {
    NavHeader: NavHeader,
  },
  methods: {
    showMenu() {
      this.$emit("showMenuOverlay");
    },
  },
};
</script>