import React, { useState } from "react";
import Image from "./Rectangle 5.png";
import Logo from "./logo 1.png";
import "./input.css";
import { LoginData } from "./LoginData";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const ref = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();
  const ref5 = React.createRef();

  const [loginUser, setLoginUser] = useState();
  const [hidden, setHidden] = useState(false);

  // state input code
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");

  const handleChangeNum1 = (e) => {
    e.preventDefault();
    setNum1(e.target.value);
    ref2.current.focus();
  };
  const handleChangeNum2 = (e) => {
    e.preventDefault();
    setNum2(e.target.value);
    ref3.current.focus();
  };
  const handleChangeNum3 = (e) => {
    e.preventDefault();
    setNum3(e.target.value);
    ref4.current.focus();
  };
  const handleChangeNum4 = (e) => {
    setNum4(e.target.value);
    e.preventDefault();
    // ref5.current.click();
  };

  // const [code, setCode] = useState();

  function handleSubmitCode(e) {
    // setCode(num1 + num2 + num3 + num4);
    const code = num1 + num2 + num3 + num4;
    console.log(code);
    localStorage.setItem("code", JSON.stringify(code));
    if (code === LoginData.code) {
      setHidden(false);
      toast.success("کد تایید درسته");
      window.location.reload();
    } else {
      setHidden(true);
      toast.error("کد تایید اشتباهه");
    }
    e.preventDefault();
  }

  function handleSubmit(e) {
    // const loginUser
    localStorage.setItem("phone", JSON.stringify(loginUser));
    if (loginUser === LoginData.phone) {
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
