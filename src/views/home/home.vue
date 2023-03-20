<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'" />
    </div>
    <home-content />
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchCategories();
homeStore.fetchHouseList();

// 监听window创建的滚动
// 离开页面时，需要移除监听
// useScroll(() => {
//   homeStore.fetchHouseList();
// });

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 搜索框显示的控制
// const isShowSearchBar = ref(false);
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100;
// });
const isShowSearchBar = computed(() => {
  return scrollTop.value > 350;
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
  }
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
