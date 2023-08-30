// Login Context
import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState();

  return (
    <LoginContext.Provider
      value={{
        loginUser,
        setLoginUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
