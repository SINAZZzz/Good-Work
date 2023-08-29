import { VscHome } from "react-icons/vsc";
import { LuNewspaper } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

export const SidebarData = [
  {
    name: "خانه",
    icon: VscHome,
    id: 0,
  },
  {
    name: "قراردادها",
    icon: LuNewspaper,
    id: 1,
  },
  {
    name: "درخواست ها",
    icon: ImStack,
    id: 2,
  },
  {
    name: "تنظیمات",
    icon: AiOutlineSetting,
    id: 3,
  },
  {
    name: "پیام ها",
    icon: MdOutlineNotifications,
    id: 4,
  },
  {
    name: "خروج",
    icon: FaPowerOff,
    id: 5,
  },
];
