// contract Context
import { createContext, useState } from "react";

export const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
  const [state, setState] = useState("مسدود");

  return (
    <ContractContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
