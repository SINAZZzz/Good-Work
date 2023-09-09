import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./Context/LoginContext";
import { SidebarContextProvider } from "./Context/SidebarContext";
import { ContractContextProvider } from "./Context/ContractContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SidebarContextProvider>
      <ContractContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </ContractContextProvider>
    </SidebarContextProvider>
  </BrowserRouter>
);
