import { useState } from "react";

//context
import AppContext from "./appContext";

const AppState = ({ children }) => {
  const [locationTitle, setLocationTitle] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const [drawerOption, setDrawerOption] = useState({
    show: false,
    animation: true,
    content: <div />,
  });

  return (
    <AppContext.Provider
      value={{
        locationTitle: locationTitle,
        showProfileModal: showProfileModal,
        drawerOption: drawerOption,
        showDrawer: showDrawer,
        setLocationTitle,
        setShowDrawer,
        setShowProfileModal,
        setDrawerOption,
        user: user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
