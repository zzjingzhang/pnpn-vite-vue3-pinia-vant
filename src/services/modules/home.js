import myRequest from "../request/index";

export function getHotSuggests() {
  return myRequest.get({
    url: "/home/hotSuggests",
  });
}
export function getCategories() {
  return myRequest.get({
    url: "/home/categories",
  });
}

export function getHouselist(curPage = 1) {
  return myRequest.get({
    url: "/home/houselist",
    params: {
      page: curPage,
    },
  });
}
