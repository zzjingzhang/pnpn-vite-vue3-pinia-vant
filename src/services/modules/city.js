import myRequest from "../request/index";

export function getCityAll() {
  return myRequest.get({
    url: "/city/all",
  });
}
