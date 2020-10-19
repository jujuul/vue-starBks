<!--
 * @Author: your name
 * @Date: 2020-10-18 17:59:04
 * @LastEditTime: 2020-10-18 22:23:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \starbks\src\views\index.vue
-->
<template>
  <div>
    <article>
      <nav class="nav">
        <nav-container>
          <span slot="navbody">
            <section class="body">
              <div class="account">
                <div class="greetings">
                  <span>心情惬意，来杯咖啡吧 ☕</span>
                </div>
                <div class="account-entry">
                  <a
                    href="javascript:;"
                    class="sign-in button"
                    @click="pageRedir(2)"
                  >
                    <span>登录</span>
                  </a>
                  <a
                    href="javascript:;"
                    class="register button"
                    @click="pageRedir(4)"
                  >
                    <span>注册</span>
                  </a>
                </div>
              </div>
            </section>
            <section class="body">
              <div class="account">
                <a
                  href="javascript:;"
                  class="logo logo-onlogin"
                  @click="pageRedir(0)"
                  v-if="mbMedia"
                >
                  <img src="@/assets/images/logo.svg" alt="星巴克" />
                </a>
                <div class="greetings onlogin" :class="{ withlogo: mbMedia }">
                  <span>{{ loginGreetings[random] }}</span>
                </div>
                <div class="account-info clearfix">
                  <div
                    class="user-stars clearfix"
                    @click="pageRedir(2)"
                    v-show="!loading"
                  >
                    <div class="star-level">
                      <span>
                        <strong>{{ StarsNum }}</strong
                        >/{{ StarsOfNextLevNeed }}
                      </span>
                      <div class="gauge">
                        <div class="gauge-fill"></div>
                      </div>
                    </div>
                    <div class="star-icon">
                      <img
                        src="@/assets/icons/icon-star-white.svg"
                        v-if="StarLev == 'White'"
                      />
                      <img
                        src="@/assets/icons/icon-star-green.svg"
                        v-if="StarLev == 'Green'"
                      />
                      <img
                        src="@/assets/icons/icon-star-gold.svg"
                        v-if="StarLev == 'Gold'"
                      />
                    </div>
                  </div>
                  <div
                    class="user-rewards"
                    @click="pageRedir(7)"
                    v-show="!loading"
                  >
                    <img src="@/assets/icons/icon-gift.svg" /><span>{{
                      MyRewardsNum
                    }}</span>
                  </div>
                </div>
                <div class="loading-svg center" v-if="loading">
                  <img src="@/assets/loading-svg/loading-bubbles.svg" />
                </div>
              </div>
            </section>
          </span>
        </nav-container>
      </nav>
      <section class="content" v-if="lgMedia || !show_menu_bol">
        <div class="tag-ad">广告</div>
        <ad-slider></ad-slider>
        <promotion></promotion>
        <program></program>
        <!--
        <tmall></tmall>
        <coffeehouse></coffeehouse>
        -->
      </section>
    </article>
  </div>
</template>

<script>
import NavContainer from "@/components/navContainer";
import AdSlider from "@/components/adSlider";
import Promotion from "@/components/promotion";
import Program from "@/components/program";
// import NavOverlay from "@/components/NavOverlay";
// import NavMobile from "@/components/navMobile";
// import Tmall from "@/components/tmall";
// import Coffeehouse from "@/components/coffeehouse";
export default {
  components: {
    NavContainer,
    Promotion,
    Program,
    // NavOverlay,
    // NavMobile,
    AdSlider,
  },
  data() {
    return {
      show_menu_bol: false,
      lgMedia: window.matchMedia("(min-width: 1025px)").matches,
      mbMedia: window.matchMedia("(max-width: 640px)").matches,
      loginGreetings: [
        "如果生活给了你柠檬🍋，不妨换杯咖啡试试",
        "人生得意须尽欢，莫使☕️空对月",
        "今天的心情是茶🍵还是咖啡☕呢?",
        "咖啡带给你好心情 ❤️",
        "咖啡会让你脑洞大开哟 ☕",
      ],
      random: Math.floor(Math.random() * 5),
      StarLev: "",
      StarsNum: "",
      StarsOfNextLevNeed: "",
      MyRewardsNum: "",
      loading: false,
    };
  },
  computed: {},
  mounted() {
    const _self = this;
    window.matchMedia("(min-width: 1025px)").addListener(() => {
      _self.lgMedia = window.matchMedia("(min-width: 1025px)").matches;
    });
    window.matchMedia("(max-width: 640px)").addListener(() => {
      _self.mbMedia = window.matchMedia("(max-width: 640px)").matches;
    });
  },
};
</script>

<style>
</style>