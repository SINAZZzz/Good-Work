import { lazy } from "react";

// const basePath = "";

// Layouts => BlankLayout - SideBarLayout
const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/login")),
    layout: "BlankLayout",
    title: "",
  },
  {
    path: "/home",
    exact: true,
    component: lazy(() => import("../pages/home")),
    layout: "SideBarLayout",
    title: "خانه",
  },

  {
    path: "/test",
    exact: true,
    component: lazy(() => import("../pages/test/Test")),
    layout: "SideBarLayout",
    title: "test",
  },
  {
    path: "/contracts",
    exact: true,
    component: lazy(() => import("../pages/contracts")),
    layout: "SideBarLayout",
    title: "قراردادها",
  },
  {
    path: "/requests",
    exact: true,
    component: lazy(() => import("../pages/requests")),
    layout: "SideBarLayout",
    title: "درخواست ها",
  },
  {
    path: "/requests/CloseList",
    exact: true,
    component: lazy(() =>
      import("../pages/requests/Component/Pages/CloseList")
    ),
    layout: "BlankLayout",
    title: "",
  },
  {
    path: "/requests/Add",
    exact: true,
    component: lazy(() => import("../pages/requests/Component/Pages/Add")),
    layout: "BlankLayout",
    title: "",
  },
  {
    path: "/profile",
    exact: true,
    component: lazy(() => import("../pages/profile")),
    layout: "SideBarLayout",
    title: "تنظیمات",
  },
  {
    path: "/messages",
    exact: true,
    component: lazy(() => import("../pages/messages")),
    layout: "SideBarLayout",
    title: "پیام ها",
  },
];

export default routes;
