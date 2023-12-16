import {
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlineOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";
import PostAddIcon from "@mui/icons-material/PostAdd";

//components
import BottomNavItem from "./BottomNavItem";

//style
import "style/components/bottomNav.scss";

const BottomNav = () => {
  return (
    <div className="bottomNav d-flex justify-content-around py-2 ">
      <BottomNavItem icon={<HomeOutlined />} title={"خانه"} link="/home" />
      {/* <BottomNavItem
        icon={<NotificationsOutlined />}
        title={"پیام ها"}
        link="/messages"
      /> */}
      <BottomNavItem
        icon={<PostAddIcon />}
        title={"درخواست ها"}
        link="/requests"
      />
      <BottomNavItem
        icon={<TextSnippetOutlined />}
        title={"قراردادها"}
        link="/contracts"
      />
      <BottomNavItem
        icon={<PersonOutlineOutlined />}
        title={"پروفایل"}
        link="/profile"
      />
    </div>
  );
};

export default BottomNav;
