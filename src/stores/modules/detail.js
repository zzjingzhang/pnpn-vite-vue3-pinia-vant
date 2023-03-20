import { defineStore } from "pinia";
import { getDetailInfosByHouseId } from "@/services";

const useDetailStore = defineStore("detail", {
  state: () => ({
    infos: {},
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfosByHouseId(houseId);
      console.log(res);
    },
  },
});

export default useDetailStore;
