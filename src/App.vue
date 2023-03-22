<template>
  <div>
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-if="!route.meta?.hideTabBar"></tab-bar>
    <!-- <tab-bar></tab-bar> -->
    <loading />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";

const route = useRoute();
</script>

<style scoped></style>
