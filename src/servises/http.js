import axios from "axios";

const baseURL = "https://ims.kashoo.ir/";
const headers = {
  "Content-Type": "application/json",
  Cookie: "ci_session=586ub6dmdsf1dn1sdk1v0mvafc2kpijv",
};

export const postLogin = () => {
  return axios.post(`${baseURL}user/auth/login`, {
    headers,
    mobile: "9137427291",
  });
};

export const postVerify = () => {
  return axios.post(`${baseURL}user/auth/verify`, {
    mobile: "9137427291",
    code: "6633",
  });
};
