import { useContext } from "react";
import axios from "axios";
import { LoginContext } from "../Context/LoginContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const { token } = useContext(LoginContext);

const baseURL = "https://ims.kashoo.ir/";

const headersPost = {
  "Content-Type": "application/json",
  Cookie: "ci_session=586ub6dmdsf1dn1sdk1v0mvafc2kpijv",
};

// const headersGet = {
//   authorization: token,
//   Cookie: "ci_session=625ck10cgm2pm19icjkedob0t3ak2fdf",
// };

export function post(url, data, config = {}) {
  return axios.post(`${baseURL}${url}`, data, config, {
    headersPost,
  });
}

export function get(url, data, config = {}) {
  return axios.post(`${baseURL}${url}`, data, config, {
    // headersGet,
  });
}
