import axios from "axios";
import Cookies from "js-cookie";

// import { useContext } from "react";
// import { LoginContext } from "../Context/LoginContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { token } = useContext(LoginContext);

// const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "https://ims.kashoo.ir/";

const headersPost = {
  "Content-Type": "application/json",
  Cookie: "ci_session=586ub6dmdsf1dn1sdk1v0mvafc2kpijv",
};

// const headersGet = {
//   authorization: token,
//   Cookie: "ci_session=625ck10cgm2pm19icjkedob0t3ak2fdf",
// };

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
