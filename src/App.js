import { useState, useEffect } from "react";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { LoginData } from "./Component/Login/LoginData";

export default function App() {
  const code = JSON.parse(localStorage.getItem("code"));
  const [state, setState] = useState(false);
  useEffect(() => {
    if (code === LoginData.code) {
      setState(true);
    } else {
      setState(false);
    }
  }, [state, code]);

  return <div>{state === false ? <Login /> : <Dashboard />}</div>;
}
