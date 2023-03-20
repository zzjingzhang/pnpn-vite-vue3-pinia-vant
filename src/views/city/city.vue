<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <van-tab
          v-for="(item, key) in allCity"
          :key="key"
          :title="item.title"
          :name="key"
        >
        </van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCity">
        <city-group v-show="tabActive === key" :groupData="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "./cpns/city-group.vue";

const router = useRouter();

// 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab切换
const tabActive = ref();

// 从store中拿数据
const cityStore = useCityStore();
cityStore.fetchAllCity();
const { allCity } = storeToRefs(cityStore);

// 获取选中标签后的数据
const currentGroup = computed(() => allCity.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  //   局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
