import React, { useState, useContext } from "react";
import Image from "./Rectangle 5.png";
import Logo from "./logo 1.png";
import "./input.css";
import { LoginData } from "./LoginData";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

export default function Login() {
  const {
    loginUser,
    setLoginUser,
    num1,
    num2,
    num3,
    num4,
    ref,
    ref2,
    ref3,
    ref4,
    ref5,
    handleChangeNum1,
    handleChangeNum2,
    handleChangeNum3,
    handleChangeNum4,
  } = useContext(LoginContext);

  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();

  function handleSubmitCode(e) {
    const code = num1 + num2 + num3 + num4;
    localStorage.setItem("code", JSON.stringify(code));
    if (code === LoginData.code) {
      setHidden(false);
      toast.success("کد تایید درسته");
      navigate("/dashboard/home");
    } else {
      setHidden(true);
      navigate("/");
      toast.error("کد تایید اشتباهه");
    }
    e.preventDefault();
  }

  function handleSubmit(e) {
    localStorage.setItem("phone", JSON.stringify(loginUser));
    if (LoginData.phone == loginUser) {
      setHidden(true);
      toast.success("شماره تایید شد");
    } else {
      setHidden(false);
      toast.error("شماره اشتباهه");
    }
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
          </form>
        </div>
      </div>
      <div className="absolute -left-0 z-0 h-full">
        <img
          src={Logo}
          alt=""
          className="z-0 absolute lg:left-20 lg:top-[18rem] lg:w-[18rem] 
          sm:w-[261px] sm:top-[103px] sm:left-[60px]"
        />
        <img
          src={Image}
          alt=""
          className="lg:w-[33rem] lg:h-[104.1vh] sm:w-[25rem] sm:h-[28rem] sm:-mt-[2rem] z-10"
        />
      </div>
    </div>
  );
}
