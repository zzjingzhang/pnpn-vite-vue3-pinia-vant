import { defineStore } from "pinia";
import { getCityAll } from "@/services";

const useCityStore = defineStore("city", {
  state: () => ({
    allCity: {},
    currentCity: { cityName: "广州" },
  }),
  actions: {
    // 网络请求：请求城市的数据
    async fetchAllCity() {
      const res = await getCityAll();
      this.allCity = res.data;
    },
  },
  getters: {},
});

export default useCityStore;
