import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OpenContextProvider } from "./Context/OpenContext";
import { ModalContextProvider } from "./Context/ModalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { CodeContextProvider } from "./Context/CodeContext";
import { LoginContextProvider } from "./Context/LoginContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <OpenContextProvider>
      <ModalContextProvider>
        <ThemeContextProvider>
          <CodeContextProvider>
            <LoginContextProvider>
              <App />
            </LoginContextProvider>
          </CodeContextProvider>
        </ThemeContextProvider>
      </ModalContextProvider>
    </OpenContextProvider>
  </BrowserRouter>
);
