// Open Context
import { createContext, useState } from "react";

export const OpenContext = createContext();

export const OpenContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <OpenContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </OpenContext.Provider>
  );
};
