import axios from "axios";
import Cookies from "js-cookie";
// baseURl
const baseURL = "https://ims.kashoo.ir/";
// post
export function post(url, data, header) {
  return axios.post(baseURL + url, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: Cookies.get("imsToken")
        ? JSON.parse(Cookies.get("imsToken"))
        : "",
    },
  });
}
// get
export function get(url, header) {
  return axios.get(baseURL + url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: Cookies.get("imsToken")
        ? JSON.parse(Cookies.get("imsToken"))
        : "",
    },
  });
}
