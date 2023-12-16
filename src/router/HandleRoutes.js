import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//layouts
import SideBarLayout from "../layout/SideBarLayout";
import BlankLayout from "../layout/BlankLayout";

const HandleRoutes = ({ children }) => {
  const location = useLocation();
  const [layout, setLayout] = useState("BlankLayout");
  const Layouts = { SideBarLayout, BlankLayout };
  useEffect(() => {
    if (location.pathname === "/") {
      setLayout("BlankLayout");
    } else {
      setLayout("SideBarLayout");
    }
  }, [location.pathname]);

  const findLayout = () => {
    let LayoutTag = Layouts[layout];
    return <LayoutTag>{children}</LayoutTag>;
  };
  return <div>{findLayout()}</div>;
};

export default HandleRoutes;
