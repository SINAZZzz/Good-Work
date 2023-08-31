import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { LoginContextProvider } from "./Context/LoginContext";
import { SidebarContextProvider } from "./Context/SidebarContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SidebarContextProvider>
      <ThemeContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </ThemeContextProvider>
    </SidebarContextProvider>
  </BrowserRouter>
);
