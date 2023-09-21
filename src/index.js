import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./Context/LoginContext";
import { SidebarContextProvider } from "./Context/SidebarContext";
import { ContractContextProvider } from "./Context/ContractContext";
import { RequestsContextProvider } from "./Context/RequestsContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SidebarContextProvider>
      <ContractContextProvider>
        <RequestsContextProvider>
          <LoginContextProvider>
            <App />
          </LoginContextProvider>
        </RequestsContextProvider>
      </ContractContextProvider>
    </SidebarContextProvider>
  </BrowserRouter>
);
