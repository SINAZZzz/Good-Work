import { VscHome } from "react-icons/vsc";
import { LuNewspaper } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

import Home from "./Component/Home";
import Contracts from "./Component/Contracts";
import Messages from "./Component/Messages";
import Requests from "./Component/Requests";
import ExitComponent from "./Component/ExitComponent";

export const menus = [
  {
    name: "خانه",
    link: "/Home",
    Component: <Home />,
    AuthRequired: true,
    icon: VscHome,
    id: 0,
  },
  {
    name: "قراردادها",
    link: "/contracts",
    Component: <Contracts />,
    AuthRequired: true,
    icon: LuNewspaper,
    id: 1,
  },
  {
    name: "درخواست ها",
    link: "/requests",
    Component: <Requests />,
    AuthRequired: true,
    icon: ImStack,
    id: 2,
  },

  {
    name: "پیام ها",
    link: "/Messages",
    margin: true,
    Component: <Messages />,
    AuthRequired: true,
    icon: MdOutlineNotifications,
    id: 3,
  },
];

export const Setting = [
  {
    name: "تنظیمات",
    link: "/Settings",
    Component: <button></button>,
    AuthRequired: true,
    icon: AiOutlineSetting,
    margin: true,
    id: 3,
  },
];

export const Exit = [
  {
    name: "خروج",
    link: "/Exit",
    Component: <ExitComponent />,
    AuthRequired: true,
    icon: FaPowerOff,
    color: "#F44336",
    id: 4,
  },
];

