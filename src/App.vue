<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
</script>

<style scoped></style>
