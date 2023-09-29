// React and hooks
import React, { useContext, useEffect } from "react";
// router
import { Link, Outlet } from "react-router-dom";
// img
import User from "../../../assets/Img/Sidebar/User.svg";
import menu from "../../../assets/Img/Sidebar/menu.svg";
// data sidebar
import {
  SidebarData,
  SettingsData,
  ExitData,
  MessagesData,
} from "./data/DataSidebar";
// context
import { SidebarContext } from "../../../Context/SidebarContext";
// router Hooks
import { useNavigate } from "react-router-dom";
// component
import Modal from "./Modal";
// api
import { post } from "../../../servises";
// Cookies
import Cookies from "js-cookie";
import { RequestsContext } from "../../../Context/RequestsContext";

const Sidebar = () => {
  // use context
  const {
    name,
    setName,
    user,
    setUser,
    path,
    setPath,
    open,
    setOpen,
    setShowModal,
  } = useContext(SidebarContext);
  const { Path } = useContext(RequestsContext);
  // state route
  const navigate = useNavigate();
  // Api
  useEffect(() => {
    post("/user/profile")
      .then((res) => {
        setUser(res.data.Data.userdetail);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // func exite
  const logout = () => {
    post("user/logout")
      .then((res) => {
        if (res.status === 200) {
          Cookies.remove("imsToken");
          // setUser(null);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div cal>
      <section className="flex font-Dana h-full ">
        <div
          className={`lg:h-full lg:transition-all lg:duration-[200ms] 
            sm:h-[100vh] sm:flex sm:items-end lg:items-stretch
             ${open ? "lg:w-[20rem]" : "lg:w-24"} 
              `}
        >
          <div
            className={`lg:pt-4 lg:flex lg:flex-col lg:gap-1 fixed
            lg:shadow-3xl
            sm:h-[5rem] lg:h-full sm:w-full bg-[#FFFFFF]
           sm:border-t ${open ? "lg:w-[16.5rem]" : "lg:w-24"}
           ${
             Path === "/dashboard/requests/CloseList" ||
             Path === "/dashboard/requests/Add"
               ? "hidden"
               : ""
           }
           `}
          >
            {/* fixed */}
            {/* profile */}
            <div>
              <div className={`flex px-5 sm:hidden lg:flex`}>
                <img src={User} alt="User" />
                <div
                  className={`flex flex-col justify-center items-center mr-4
            ${!open && "hidden"}`}
                >
                  <span className="font-normal text-[18px]">
                    {user?.fname}
                    {user?.lname}
                  </span>
                  <span className="text-[#A2A2AC] text-[12px]">
                    سرمایه گذار
                  </span>
                </div>
              </div>
              <hr
                className={`mt-[0.8rem] sm:hidden lg:flex ${
                  (!open && "w-[6rem]") || (open && "w-[16.5rem]")
                } `}
              />
            </div>

            <div
              className={`h-full w-full
               flex lg:flex-col lg:justify-between lg:items-stretch
                lg:pt-1 lg:pb-2 lg:px-4
                sm:items-center`}
            >
              <div className="flex lg:flex-col">
                {SidebarData?.map((data, index) => (
                  <Link
                    onMouseDown={() => setPath(data.path)}
                    onClick={() => setName(data.name)}
                    to={path}
                    key={index}
                    className={`button-side lg:flex lg:flex-row lg:mx-0 lg:justify-normal lg:w-full
                     sm:flex sm:justify-center sm:mx-5 sm:flex-col
                     sm:w-[3.5rem] sm:h-[3.5rem]  ${
                       data.path === path && "active-button"
                     }
                  ${
                    (!open && "lg:w-[4rem] lg:h-[4rem] ") ||
                    (open && "lg:px-4 lg:py-4")
                  }
                   `}
                  >
                    <div className="">
                      <img
                        src={data?.icon}
                        alt=""
                        className={`${
                          (!open && "lg:w-[2rem] lg:mr-4") ||
                          (open && "lg:w-[1.5rem]")
                        }`}
                      />
                    </div>
                    <h2
                      className={`whitespace-pre mr-2 lg:text-[15px] sm:text-[11px]  ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }
                      ${data.path === path && "sm:hidden lg:flex"}`}
                    >
                      {data?.name}
                    </h2>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                <button
                  onClick={() => setShowModal(true)}
                  key={SettingsData[0].id}
                  className={`button-side sm:hidden lg:flex ${
                    SettingsData[0].path === path && "bg-[#4F50FA] text-white"
                  }
                  ${
                    (!open && "lg:w-[4rem] lg:h-[4rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={SettingsData[0].icon}
                      alt=""
                      className={` ${
                        (!open && "w-[4rem] mr-4") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre mr-2 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {SettingsData[0].name}
                  </h2>
                </button>

                <Link
                  onMouseDown={() => setPath(MessagesData[0].path)}
                  onClick={() => setName(MessagesData[0].name)}
                  to={path}
                  key={MessagesData[0].id}
                  className={`button-side lg:flex lg:flex-row lg:mx-0 lg:justify-normal lg:w-full
                   sm:flex sm:flex-col sm:justify-center  sm:w-[3.5rem] sm:h-[3.5rem] sm:mx-2
                    ${MessagesData[0].path === path && "active-button"}
                
                  ${
                    (!open && "lg:w-[4rem] lg:h-[4rem]") ||
                    (open && "lg:px-4 lg:py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={MessagesData[0].icon}
                      alt=""
                      className={` ${
                        (!open && "w-[2rem] mr-4") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre mr-2 lg:text-[15px] sm:text-[11px] first-letter:${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }
                    ${MessagesData[0].path === path && "sm:hidden lg:flex"}`}
                  >
                    {MessagesData[0].name}
                  </h2>
                </Link>
                <Link
                  onClick={() => logout()}
                  to={path}
                  key={ExitData[0].id}
                  className={`button-side sm:hidden lg:flex
                    bg-[#ff3b3b] text-white
                  ${
                    (!open && "lg:w-[4rem] lg:h-[4rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={ExitData[0].icon}
                      alt=""
                      className={`${
                        (!open && "w-[2rem] mr-4") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre mr-2  ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {ExitData[0].name}
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* navbar */}
          <nav className="border border-r-0 w-full h-20 lg:flex sm:hidden items-center bg-white ">
            <div className="mr-4 flex justify-start">
              <img
                src={menu}
                alt=""
                className="cursor-pointer w-[1.5rem]"
                onClick={() => setOpen(!open)}
              />
            </div>
            {/* header name */}
            <h1 className="mr-4 text-[25px] w-full">{name}</h1>
          </nav>
          {/* Show component */}
          <Outlet />
          <Modal />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
