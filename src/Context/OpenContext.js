import React, { createContext, useContext, useState } from "react";

// create open context
export const OpenContext = createContext();

// create context provider
export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  // the value passed in here will be accessible anywhere in our application
  // you can pass any value, in our case we pass our state and it's update method
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

