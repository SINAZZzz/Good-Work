import { Suspense, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Notifications from "react-notify-toast";

//routes
import routes from "./routes";

// Layouts
import BlankLayout from "../layout/BlankLayout";
import SideBarLayout from "../layout/SideBarLayout";
import Middleware from "./middleware";
import appContext from "contexts/appContext";

const AppRouter = () => {
  const { setDrawerOption, drawerOption } = useContext(appContext);

  // All available layouts
  const Layouts = { BlankLayout, SideBarLayout };

  const handleFilterRoutes = (layout) => {
    return routes.filter((route) => route.layout === layout);
  };

  // if user session is not ok, direct user to login
  const handleRenderRoute = (route) => {
    if (route.layout === "SideBarLayout") {
      return (
        <Middleware>
          <route.component title={route.title} />
        </Middleware>
      );
    }
    return <route.component />;
  };
  const handleRoutes = () => {
    return Object.keys(Layouts).map((layout) => {
      const filteredRoutes = handleFilterRoutes(layout);
      const LayoutTag = Layouts[layout];

      return (
        <Route path="/" element={<LayoutTag />} key={layout}>
          {filteredRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              index={route.index}
              element={
                <Suspense fallback={<span>در حال بارگذاری</span>}>
                  {handleRenderRoute(route)}
                </Suspense>
              }
            />
          ))}
        </Route>
      );
    });
  };

  useEffect(() => {
    if (drawerOption.show) {
      window.history.pushState({ page: 1 }, "", "");

      window.onpopstate = function (event) {
        setDrawerOption((prev) => ({ ...prev, show: false }));
      };
    }
  }, [drawerOption.show]);

  return (
    <>
      <Routes>{handleRoutes()}</Routes>
      {/* <Notifications /> */}
    </>
  );
};

export default AppRouter;
