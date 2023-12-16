import { useMediaQuery } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
//contexts
import AppState from "./contexts/AppState";
import RequestsContextProvider from "./contexts/RequestsContext";

//router

//components
import ProfileModal from "components/pages/profile/ProfileModal";
import AppRouter from "router/router";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "investor-panel");
  }, []);
  const matches = useMediaQuery("(max-width:768px)");

  // window.addEventListener(
  //   "popstate",
  //   function (event) {
  //     // The popstate event is fired each time when the current history entry changes.

  //     var r = this.alert("You pressed a Back button! Are you sure?!");

  //     if (r == true) {
  //       // Call Back button programmatically as per user confirmation.
  //       // history.back();
  //       console.log("go back");
  //       // Uncomment below line to redirect to the previous page instead.
  //       // window.location = document.referrer // Note: IE11 is not supporting this.
  //     } else {
  //       // Stay on the current page.
  //       console.log("Stay");

  //       // history.pushState(null, null, window.location.pathname);
  //     }
  //     console.log("no");

  //     // history.pushState(null, null, window.location.pathname);
  //   },
  //   false
  // );
  return (
    <Router>
      {" "}
      <AppState>
        <RequestsContextProvider>
          <ToastContainer
            pauseOnFocusLoss
            theme="colored"
            rtl
            autoClose={5000}
          />
          <div className="app">
            {!matches && <ProfileModal />}
            <AppRouter />
          </div>
        </RequestsContextProvider>
      </AppState>
    </Router>
  );
};

export default App;
