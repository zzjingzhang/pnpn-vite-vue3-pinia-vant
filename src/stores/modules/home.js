import { getHotSuggests } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;