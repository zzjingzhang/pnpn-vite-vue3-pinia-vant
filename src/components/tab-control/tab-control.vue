<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  titles: {
    type: Array,
    default: () => [],
  },
  curIndex: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["tabItemClick"]);
const currentIndex = ref(0);
const itemClick = (index) => {
  currentIndex.value = index;
  emit("tabItemClick", index);
};

watch(
  () => props.curIndex,
  (newIndex) => {
    currentIndex.value = newIndex;
  },
  {
    deep: true,
  }
);
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  color: var(--primary-color);
  font-weight: 700;
}

.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color);
  padding: 8px;
}
</style>
