import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
