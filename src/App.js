import { useState, useEffect } from "react";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { LoginData } from "./Component/Login/LoginData";
import {
  Routes,
  Route,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./Component/Dashboard/Sidebar/Pages/Home";
import Message from "./Component/Dashboard/Sidebar/Pages/Home/Component/Message";
import Requests from "./Component/Dashboard/Sidebar/Pages/Requests";
import Setting from "./Component/Dashboard/Sidebar/Pages/Settings";
import Contracts from "./Component/Dashboard/Sidebar/Pages/Contracts";
import Layout from "./Component/Layout";

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

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Home" element={<Home />} />
          <Route path="/dashboard/message" element={<Message />} />
          <Route path="/dashboard/requests" element={<Requests />} />
          <Route path="/dashboard/Setting" element={<Setting />} />
          <Route path="/dashboard/contracts" element={<Contracts />} />
        </Route>
      </Routes>
    </>
  );
}
