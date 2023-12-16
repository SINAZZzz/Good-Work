import { Outlet } from "react-router-dom";

const BlankLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BlankLayout;
