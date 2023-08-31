// Login Context
import { createContext, useState, createRef } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState();

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [num4, setNum4] = useState();

  const ref = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();
  const ref5 = createRef();

  const handleChangeNum1 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value != "") {
      setNum1(value);
      ref2.current.focus();
    } else {
      ref.current.focus();
      setNum1("");
    }
  };
  const handleChangeNum2 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value != "") {
      setNum2(e.target.value);
      ref3.current.focus();
    } else {
      ref.current.focus();
      setNum2("");
    }
  };
  const handleChangeNum3 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value != "") {
      setNum3(e.target.value);
      ref4.current.focus();
    } else {
      ref2.current.focus();
      setNum3("");
    }
  };
  const handleChangeNum4 = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value != "") {
      setNum4(e.target.value);
    } else {
      ref3.current.focus();
      setNum4("");
    }
    // ref5.current.click();
  };

  return (
    <LoginContext.Provider
      value={{
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
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
