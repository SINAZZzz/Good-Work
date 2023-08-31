import { VscHome } from "react-icons/vsc";
import { LuNewspaper } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

export const SidebarData = [
  {
    name: "خانه",
    path: "/dashboard/Home",
    icon: VscHome,
    id: 0,
  },
  {
    name: "قراردادها",
    path: "/dashboard/contracts/blocked",
    icon: LuNewspaper,
    id: 1,
  },
  {
    name: "درخواست ها",
    path: "/dashboard/requests",
    icon: ImStack,
    id: 2,
  },
  {
    name: "تنظیمات",
    path: "",
    icon: AiOutlineSetting,
    id: 3,
  },
  {
    name: "پیام ها",
    path: "/dashboard/messages/Discount",
    icon: MdOutlineNotifications,
    id: 4,
  },
  {
    name: "خروج",
    path: "",
    icon: FaPowerOff,
    id: 5,
  },
];
