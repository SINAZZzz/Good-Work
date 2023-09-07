import { useState, useEffect } from "react";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { LoginData } from "./Component/Login/LoginData";
import { Routes, Route } from "react-router-dom";

import Home from "./Component/Dashboard/Sidebar/Pages/Home";
import Messages from "./Component/Dashboard/Sidebar/Pages/Messages";
import Requests from "./Component/Dashboard/Sidebar/Pages/Requests";
import Contracts from "./Component/Dashboard/Sidebar/Pages/Contracts";

import CardDiscount from "./Component/Dashboard/Sidebar/Pages/Messages/CardMessages/CardDiscount";
import CardNotification from "./Component/Dashboard/Sidebar/Pages/Messages/CardMessages/CardNotification";
import CardNewMessages from "./Component/Dashboard/Sidebar/Pages/Messages/CardMessages/CardNewMessages";
import CardAllMessages from "./Component/Dashboard/Sidebar/Pages/Messages/CardMessages/CardAllMessages";

import CardBox from "./Component/Dashboard/Sidebar/Pages/Contracts/CardContract/CardBox";

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
          <Route exact path="/dashboard/Home" element={<Home />} />
          <Route path="/dashboard/messages" element={<Messages />}>
            <Route
              exact
              path="/dashboard/messages/Discount"
              element={<CardDiscount />}
            />
            <Route
              path="/dashboard/messages/Notification"
              element={<CardNotification />}
            />
            <Route
              path="/dashboard/messages/NewMessages"
              element={<CardNewMessages />}
            />
            <Route
              path="/dashboard/messages/AllMessages"
              element={<CardAllMessages />}
            />
          </Route>

          <Route path="/dashboard/requests" element={<Requests />} />
          <Route path="/dashboard/contracts" element={<Contracts />}>
            <Route path="/dashboard/contracts/blocked" element={<CardBox />} />
            <Route path="/dashboard/contracts/mturity" element={<CardBox />} />
            <Route path="/dashboard/contracts/monthly" element={<CardBox />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
