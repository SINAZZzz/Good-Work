import React, { useEffect, useState } from "react";
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

  const [loginUser, setLoginUser] = useState("98123456789");
  const [hidden, setHidden] = useState(false);
  // state code
  const [code, setCode] = useState();
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

  function handleSubmitCode(e) {
    const code = num1 + num2 + num3 + num4;
    console.log(code);
    if (code === LoginData.code) {
      setHidden(false);
      toast.success("کد تایید درسته");
    } else {
      setHidden(true);
      toast.error("کد تایید اشتباهه");
    }
    e.preventDefault();
  }

  function handleSubmit(e) {
    // const loginUser
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
    <div className="flex h-[100vh] overflow-y-hidden font-Dana ">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-[70%] z-20 static bg-slate-50 flex justify-center items-center rounded-l-[70px]">
        <div className="absolute z-10">
          <form
            onSubmit={handleSubmit}
            className={`${
              hidden == true ? "hidden" : ""
            } flex flex-col flex-nowrap justify-center items-center
            content-stretch `}
          >
            <h1 className=" mb-10 text-[1.1rem]">
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
              hidden == false ? "hidden" : ""
            } flex flex-col flex-nowrap justify-center  items-center
            content-stretch `}
          >
            <h1 className=" mb-7 text-[1.4rem]">
              کد چهار رقمی ارسال شده را وارد کنید
            </h1>
            <div className="form__group1 field">
              <input
                type="input"
                id="input1"
                ref={ref}
                className="form__field1 mr-5"
                maxLength={1}
                value={num1}
                onChange={handleChangeNum1}
                required
              />
              <input
                type="input"
                id="input2"
                ref={ref2}
                className="form__field1 mr-5"
                maxLength={1}
                value={num2}
                onChange={handleChangeNum2}
                required
              />
              <input
                type="input"
                id="input3"
                ref={ref3}
                className="form__field1 mr-5"
                maxLength={1}
                value={num3}
                onChange={handleChangeNum3}
                required
              />
              <input
                type="input"
                id="input4"
                className="form__field1"
                maxLength={1}
                ref={ref4}
                value={num4}
                onChange={handleChangeNum4}
                required
              />
            </div>
            <button
              className="w-[20rem] mt-8 
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
          className="z-0 absolute left-20 top-[18rem] w-[18rem]"
        />
        <img src={Image} alt="" className=" w-[33rem] h-[100vh] z-10" />
      </div>
    </div>
  );
}
