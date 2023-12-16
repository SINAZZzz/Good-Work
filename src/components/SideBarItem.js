import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

//contexts
import appContext from "../contexts/appContext";

const SideBarItem = ({ title, icon, showTitle, link }) => {
  const { setLocationTitle } = useContext(appContext);
  const location = useLocation();
  return (
    <Link
      to={link}
      className={`${
        location.pathname === link ? "sideBarItem__selected" : ""
      }  py-1  text-decoration-none`}
      onClick={() => setLocationTitle(title)}
    >
      <div className="sideBarItem d-flex text-nowrap   ">
        <div
          className={`sideBarItem__icon p-2 ${
            showTitle ? "icon__left" : "icon__center"
          }`}
        >
          {icon}
        </div>
        <div
          className={`title  d-grid align-items-center ${
            showTitle ? "showTitle" : "hideTitle"
          }`}
        >
          {title}
        </div>
      </div>
    </Link>
  );
};

export default SideBarItem;
