import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";

//contexts
import appContext from "contexts/appContext";

//style
import "style/components/navSideBarLayout.scss";

const NavSideBarLayout = ({ setCollapseSideBar }) => {
  const { locationTitle } = useContext(appContext);
  return (
    <div className="navSideBarLayout w-100 bg-white p-3 d-md-flex d-none ">
      <div
        className="icon"
        onClick={() =>
          setCollapseSideBar((prev) => {
            return !prev;
          })
        }
      >
        <MenuRounded fontSize="large" />
      </div>
      <div className="mx-2 title">{locationTitle}</div>
    </div>
  );
};

export default NavSideBarLayout;
