import { useState } from "react";
import { Outlet } from "react-router-dom";

//components
import BottomNav from "components/BottomNav";
import SideBar from "components/SideBar";
import NavSideBarLayout from "components/NavSideBarLayout";

//style
import "style/layout/sideBarLayout.scss";
import BottomDrawer from "components/BottomDrawer";

const SideBarLayout = () => {
  const [collapseSideBar, setCollapseSideBar] = useState(true);

  return (
    <div
      className="d-flex sideBarLayout"
      style={{
        position: "relative",
        direction: "rtl",
        maxHeight: "100vh",
        minHeight: "100vh",
        backgroundColor: "#e5e5e5",
        overflow: "hidden",
      }}
    >
      <div className="h-100 sideBarLayout__sideBar">
        <SideBar
          collapseSideBar={collapseSideBar}
          setCollapseSideBar={setCollapseSideBar}
        />
      </div>
      <div className="d-flex flex-column w-100">
        <NavSideBarLayout setCollapseSideBar={setCollapseSideBar} />
        <div className="" style={{ overflowY: "scroll" }}>
          <Outlet />
        </div>
      </div>

      <div className="sideBarLayout__bottomNav">
        <BottomNav />
      </div>

      <div className="">
        <BottomDrawer />
      </div>
    </div>
  );
};

export default SideBarLayout;
