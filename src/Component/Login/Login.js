import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

import "./input.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

import { post } from "../../servises/http";
import Banear from "./Component/Banear";
export default function Login() {
  const {
    loginUser,
    setLoginUser,
    token,
    setToken,
    num1,
    // object
    num2,
    num3,
    num4,
    // state by id
    ref,
    ref2,
    ref3,
    ref4,
    ref5,
    //  state num and id next document by id
    handleChangeNum1,
    handleChangeNum2,
    handleChangeNum3,
    handleChangeNum4,
  } = useContext(LoginContext);

  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();

  const [time, setTime] = useState(60);
  const [resend, setResend] = useState(false);
  // for resend code
  useEffect(() => {
    let interval = null;
    if (time === 0) setResend(true);

    if (time !== 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);
  useEffect(() => {
    if (Cookies.get("imsToken")) {
      navigate("/dashboard/home");
    }
  }, []);

  function handleSubmitCode(e) {
    const code = num1 + num2 + num3 + num4;
    // object {map}
    var data = JSON.stringify({
      mobile: loginUser,
      code: code,
    });
    post("user/auth/verify", data)
      .then((res) => {
        const response = res.data;
        const messageCode = response.Message;
        if (response.Code === 200) {
          toast.success(messageCode);
          setHidden(true);
          Cookies.set("imsToken", JSON.stringify(res.data.Data.token), {
            expires: 30,
          });
          if (Cookies.get("imsToken")) {
            navigate("/dashboard/home");
          }
        }
      })
      .catch((error) => {
        const response = error.response.data;
        const messageCode = response.Message;
        if (response.Code === 400) {
          setHidden(true);
          navigate("/");
          toast.error(messageCode);
        }
      });
    e.preventDefault();
  }

  function handleSubmit(e) {
    var data = JSON.stringify({
      mobile: loginUser,
    });
    post("user/auth/login", data)
      .then((res) => {
        const response = res.data;
        const messageLogin = response.Message;
        if (response.Code == 200) {
          setHidden(true);
          setTime(60);
          toast.success(messageLogin);
        }
      })
      .catch((error) => {
        const response = error.response.data;
        const messageLogin = response.Message;
        if (response.Code == 400) {
          setHidden(false);
          toast.error(messageLogin);
        }
      });
    e.preventDefault();
    setLoginUser("");
  }
  return (
    <div
      className="h-[100vh] overflow-y-hidden font-Dana
    lg:flex sm:flex sm:flex-col-reverse "
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <div
        className="
      lg:w-[70%] lg:h-full z-20 static 
    bg-slate-50 lg:items-center lg:rounded-l-[70px] lg:flex lg:justify-center 
      sm:flex sm:flex-col sm:justify-start sm:content-center sm:w-full sm:h-[45%]
       sm:rounded-t-[25px]"
      >
        <div className="absolute z-10">
          <form
            onSubmit={handleSubmit}
            className={`${
              hidden === true ? "hidden" : ""
            } flex flex-col flex-nowrap justify-center items-center
            content-stretch sm:mr-7 sm:mt-10 lg:mt-0 lg:mr-0 `}
          >
            <h1 className="mb-10 text-[1.1rem]">
              برای ورود شماره تلفن همراه خود را وارد کنید
            </h1>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="شماره تلفن همراه"
                maxLength={11}
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                required
              />
              <label htmlFor="name" className="form__label">
                شماره تلفن همراه
              </label>
            </div>
            <span className="text-[11px] relative -mr-[8.5rem] mt-1 text-black/50">
              کد فعالسازی به این شماره ارسال می شود
            </span>
            <button
              className="w-[20rem] mt-8 
             bg-black/20 text-black/50 duration-700 hover:bg-blue-700 
             hover:text-white py-2 px-4 rounded"
            >
              دریافت کد فعالسازی
            </button>
          </form>
        </div>
        <div className="absolute z-0">
          <form
            onSubmit={handleSubmitCode}
            className={`${
              hidden === false ? "hidden" : ""
            } flex flex-col flex-nowrap justify-center  items-center
            content-stretch sm:mr-7 sm:mt-10 lg:mt-0 lg:mr-0`}
          >
            <h1 className=" lg:mb-7 sm:mb-4 lg:text-[1.4rem] sm:text-[1.18rem]">
              کد چهار رقمی ارسال شده را وارد کنید
            </h1>
            <div className="form__group1 field">
              <input
                type="input"
                id="input1"
                ref={ref}
                className="form__field1 lg:mr-5 sm:mr-4 lg:w-[4rem] sm:w-[3.4rem]"
                maxLength={1}
                value={num1}
                onChange={handleChangeNum1}
                required
              />
              <input
                type="input"
                id="input2"
                ref={ref2}
                className="form__field1 lg:mr-5 sm:mr-4 lg:w-[4rem] sm:w-[3.4rem]"
                maxLength={1}
                value={num2}
                onChange={handleChangeNum2}
                required
              />
              <input
                type="input"
                id="input3"
                ref={ref3}
                className="form__field1 lg:mr-5 sm:mr-4 lg:w-[4rem] sm:w-[3.4rem]"
                maxLength={1}
                value={num3}
                onChange={handleChangeNum3}
                required
              />
              <input
                type="input"
                id="input4"
                className="form__field1 lg:w-[4rem] sm:w-[3.4rem]"
                maxLength={1}
                ref={ref4}
                value={num4}
                onChange={handleChangeNum4}
                required
              />
            </div>
            <button
              className="lg:w-[20rem] sm:w-[16.8rem] lg:mt-8 sm:mt-12 
             bg-black/20 text-black/50 duration-700 hover:bg-blue-700 
             hover:text-white py-2 px-4 rounded text-lg"
              ref={ref5}
            >
              ثبت
            </button>
            <div className="flex pt-2">
              <div
                className={`${resend ? "resend" : ""} flex text-center`}
                onClick={() => {
                  // setTime(60);
                  setResend(false);
                }}
              >
                ارسال مجدد کد {""} ({time})
              </div>
              <span className="border-e w-[1px] bg-black/20 mx-6"></span>
              <div
                className="flex text-center "
                // onClick={() => handleStep(1)}
                // goto back to form login
              >
                اصلاح شماره موبایل
              </div>
            </div>
          </form>
        </div>
      </div>
      <Banear />
    </div>
  );
}
