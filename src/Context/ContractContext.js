// contract Context
import { createContext, useState } from "react";

export const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
  // const [state, setState] = useState("مسدود");
  const [categoryId, setCategoryId] = useState("");
  const [mounted, setMounted] = useState(true);
  const [category, setCategory] = useState([]);
  const [investments, setInvestments] = useState([]);
  return (
    <ContractContext.Provider
      value={{
        categoryId: categoryId,
        setCategoryId,
        mounted: mounted,
        setMounted,
        category: category,
        setCategory,
        investments: investments,
        setInvestments,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
