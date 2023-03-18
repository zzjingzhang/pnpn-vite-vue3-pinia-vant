<template>
  <div class="city-group">
    <van-index-bar
      highlight-color="#ff9854"
      :sticky="false"
      :index-list="indexList"
    >
      <van-index-anchor index="热门" />
      <div class="hot-list">
        <template v-for="hotItem in groupData.hotCities">
          <span class="hot-city" @click="cityClick(hotItem)">{{
            hotItem.cityName
          }}</span>
        </template>
      </div>
      <template v-for="item in groupData.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="subItem in item.cities" :key="subItem.cityId">
          <van-cell :title="subItem.cityName" @click="cityClick(subItem)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
})

// 动态索引
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})

// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  //  选中当前城市
  cityStore.currentCity = city

  // 返回上一级
  router.back()
}
</script>

<style lang="less" scoped>
.hot-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .hot-city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    line-height: 28px;
    text-align: center;
    margin: 6px 0;
  }
}
</style>
