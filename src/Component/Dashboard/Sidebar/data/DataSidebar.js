import Home from "../../../../assets/Img/Sidebar/Home.svg";
import Contracts from "../../../../assets/Img/Sidebar/Contracts.svg";
import Exit from "../../../../assets/Img/Sidebar/Exit.svg";
import Messages from "../../../../assets/Img/Sidebar/Messages.svg";
import Requests from "../../../../assets/Img/Sidebar/Requests.svg";
import Settings from "../../../../assets/Img/Sidebar/Settings.svg";

export const SidebarData = [
  {
    name: "خانه",
    path: "/dashboard/Home",
    icon: Home,
    id: 0,
  },
  {
    name: "قراردادها",
    path: "/dashboard/contracts/blocked",
    icon: Contracts,
    id: 1,
  },
  {
    name: "درخواست ها",
    path: "/dashboard/requests",
    icon: Requests,
    id: 2,
  },
];

export const SettingsData = [
  {
    name: "تنظیمات", 
    margin: true,
    path: "",
    icon: Settings,
    id: 3,
  },
];

export const MessagesData = [
  {
    name: "پیام ها",
    path: "/dashboard/messages/Discount",
    icon: Messages,
    id: 4,
  },
];

export const ExitData = [
  {
    name: "خروج",
    path: "",
    icon: Exit,
    id: 5,
  },
];
