import { Avatar, useMediaQuery } from "@mui/material";
import {
  DescriptionRounded,
  HomeRounded,
  NotificationsRounded,
  PowerSettingsNew,
  SettingsRounded,
} from "@mui/icons-material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SideBarItem from "./SideBarItem";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//components
import "style/components/sideBar.scss";

//contexts
import appContext from "contexts/appContext";

//api
import Api from "api/newApi";

const SideBar = ({ collapseSideBar, setCollapseSideBar }) => {
  const { setShowProfileModal, user, setUser } = useContext(appContext);
  const matches = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  //api
  const logout = () => {
    Api.Post("user/logout")
      .then((res) => {
        if (res.status === 200) {
          Cookies.remove("imsToken");
          setUser(null);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className={`sideBar bg-white p-3   ${
          collapseSideBar ? "sidebarOpen" : "sidebarClose"
        }`}
      >
        <div className="inner  d-flex flex-column h-100 justify-content-between">
          <div className="">
            <div className="inner__header d-flex text-nowrap">
              <div className="icon">
                <Avatar />
              </div>

              <div
                className={`${
                  collapseSideBar ? "showTitle" : "hideTitle"
                }  mx-2`}
              >
                <div className=" name">
                  {user?.userdetail?.fname} {user?.userdetail?.lname}
                </div>
                <div className={`text-muted info `}>
                  {user?.userdetail?.role}
                </div>
              </div>
            </div>

            <SideBarItem
              link={"/home"}
              showTitle={collapseSideBar}
              title={"خانه"}
              icon={<HomeRounded />}
            />
            <SideBarItem
              link={"/contracts"}
              showTitle={collapseSideBar}
              title={"قراردادها"}
              icon={<DescriptionRounded />}
            />
            <SideBarItem
              link={"/requests"}
              showTitle={collapseSideBar}
              title={"درخواست ها"}
              icon={<PostAddIcon />}
            />
          </div>
          <div className="">
            {matches ? (
              <SideBarItem
                link={"/profile"}
                showTitle={collapseSideBar}
                title={"تنظیمات"}
                icon={<SettingsRounded />}
              />
            ) : (
              <>
                <div
                  className="settings mt-1"
                  onClick={() => setShowProfileModal(true)}
                >
                  <div className="d-flex text-nowrap   ">
                    <div
                      className={`icon p-2 ${
                        collapseSideBar ? "icon__left" : "icon__center"
                      }`}
                    >
                      <SettingsRounded />
                    </div>
                    <div
                      className={`title  d-grid align-items-center ${
                        collapseSideBar ? "showTitle" : "hideTitle"
                      }`}
                    >
                      تنظیمات
                    </div>
                  </div>
                </div>
              </>
            )}

            <SideBarItem
              link={"/messages"}
              showTitle={collapseSideBar}
              title={"پیام ها"}
              icon={<NotificationsRounded />}
            />

            <div className="inner__footer mt-1" onClick={() => logout()}>
              <div className="d-flex text-nowrap   ">
                <div
                  className={`icon p-2 ${
                    collapseSideBar ? "icon__left" : "icon__center"
                  }`}
                >
                  <PowerSettingsNew />
                </div>
                <div
                  className={`title  d-grid align-items-center ${
                    collapseSideBar ? "showTitle" : "hideTitle"
                  }`}
                >
                  خروج
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
