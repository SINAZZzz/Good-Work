import axios from "axios";
import Cookies from "js-cookie";

const ApiURL = process.env.REACT_APP_API_URL;

class Api {
  Get(url, header) {
    return axios.get(ApiURL + url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: Cookies.get("imsToken")
          ? JSON.parse(Cookies.get("imsToken"))
          : "",
      },
    });
  }
  Post(url, data, header) {
    return axios.post(ApiURL + url, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: Cookies.get("imsToken")
          ? JSON.parse(Cookies.get("imsToken"))
          : "",
      },
    });
  }
  // RefreshToken(error) {
  //   return this.Post("user/refresh/token", {
  //     mobile: localStorage.getItem("mobile"),
  //     refreshToken: Cookies.get("refreshToken"),
  //     agentString: "AgentReact1",
  //   })
  //     .then((response) => {
  //       Cookies.set("token", response.Data.token);
  //       Cookies.set("refreshToken", response.Data.refreshToken);
  //       error.config.headers.Authorization = response.Data.token;
  //       return axios.request(error.config);
  //     })
  //     .catch((err) => {
  //       if (err.response && err.response.status === 401) {
  //         window.location = "/logout";
  //       }
  //       return Promise.reject(error);
  //     });
  // }
  // ShowError(error) {
  //   return toast.error(this.ErrorHandler(error));
  // }
  ErrorHandler(error) {
    let message = "";
    switch (error) {
      case 403:
        message = "شما دسترسی به این قسمت را ندارید";
        break;
      case 404:
        message = "داده مورد نظر یافت نشد";
        break;
      case 402:
        message = "مشکلی رخ داده ، لطفا ان را گزارش دهید";
        break;
      case 400:
        message = "مشکلی رخ داده ، ورودی های خود را بررسی کنید";
        break;
      case 500:
        message = "مشکلی رخ داده ، دوباره تلاش کنید";
        break;
      case 503:
        message = "مشکلی رخ داده ، دوباره تلاش کنید";
        break;
      case 401:
        message = "شما دسترسی به این قسمت را ندارید";
        break;
      default:
        message = "مشکلی رخ داده است";
        break;
    }
    return message;
  }
}

const ApiClass = new Api();
let tryCount = 0;
axios.interceptors.response.use(null, (error) => {
  if (error.config && error.response) {
    if (error.response.status === 401) {
      if (tryCount === 2) {
        Cookies.remove("imsToken");
        window.location = "/";
        return Promise.reject(error);
      }
      tryCount++;
      console.log("error 401 interceptors");

      return axios.request(error.config);
    } else {
    }
  }

  return Promise.reject(error);
});

export default ApiClass;

// let tryCount = 0;
// axios.interceptors.response.use(null, (error) => {
//   if (error.config && error.response) {
//     if (error.response.status === 401) {
//       if (tryCount === 1) {
//         return Promise.reject(error);
//       }
//       tryCount++;
//       ApiClass.RefreshToken();
//     } else {
//       ApiClass.ShowError(error.response.status);
//     }
//   }

//   return Promise.reject(error);
// });
