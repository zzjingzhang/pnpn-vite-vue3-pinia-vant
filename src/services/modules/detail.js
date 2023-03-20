import myRequest from "../request/index";

export function getDetailInfosByHouseId(houseId) {
  return myRequest.get({
    url: "detail/infos",
    params: {
      houseId,
    },
  });
}
