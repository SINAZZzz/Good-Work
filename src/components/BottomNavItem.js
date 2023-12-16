import { Link, useLocation } from "react-router-dom";

const BottomNavItem = ({ icon, title, link }) => {
  const location = useLocation();
  return (
    <Link
      to={link}
      className={` ${
        location.pathname === link ? "active" : " "
      }  item d-grid text-center `}
    >
      <div className="">{icon}</div>
      <div className="title">{title}</div>
    </Link>
  );
};

export default BottomNavItem;
