<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <img
              :src="
                currentIndex === index
                  ? getAssetURL(item.imageActive)
                  : getAssetURL(item.image)
              "
              alt=""
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'

const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 30px;
  }
}
</style>
