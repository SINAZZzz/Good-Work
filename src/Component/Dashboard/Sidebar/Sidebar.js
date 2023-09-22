// React and hooks
import React, { useContext, useEffect, useState } from "react";
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
           sm:w-full sm:h-[100vh] sm:flex
           sm:items-end  ${open ? "lg:w-[20rem]" : "lg:w-24"} `}
        >
          <div
            className="lg:pt-4 lg:flex lg:flex-col
           lg:shadow-3xl lg:h-full
            sm:h-[5rem] sm:w-full lg:gap-1 fixed bg-[#FFFFFF]
           sm:border-t "
          >
            {/* profile */}
            <div>
              {/* ${(!open && "") || (open && "px-5")} */}
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
                className={`mt-[0.9rem] sm:hidden lg:flex ${
                  (!open && "w-[6rem]") || (open && "w-[16.5rem]")
                } `}
              />
            </div>

            <div
              className={`h-full w-full
               flex lg:flex-col lg:justify-between lg:pt-1 lg:pb-2 lg:px-4
               sm:justify-center sm:items-center sm:pb-2 sm:px-4`}
            >
              <div className="flex lg:flex-col">
                {SidebarData?.map((data, index) => (
                  <Link
                    onMouseDown={() => setPath(data.path)}
                    onClick={() => setName(data.name)}
                    to={path}
                    key={index}
                    className={`button-side sm:flex sm:flex-col ${
                      data.path === path && "active-button"
                    }
                  ${
                    (!open && "lg:w-[4rem] lg:py-4") ||
                    (open && "lg:px-4 lg:py-4")
                  }
                   `}
                  >
                    <div className="">
                      <img
                        src={data?.icon}
                        alt=""
                        className={`${
                          (!open && "lg:w-[31px] lg:mr-4") ||
                          (open && "lg:w-[1.5rem]")
                        }`}
                      />
                    </div>
                    <h2
                      className={`whitespace-pre mr-2 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
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
                    (!open && "w-[4rem] h-[4rem] pr-[1.2rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={SettingsData[0].icon}
                      alt=""
                      className={` ${
                        (!open && "w-[2rem]") || (open && "w-[1.5rem]")
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
                  className={`button-side lg:flex sm:flex sm:flex-col
                    ${MessagesData[0].path === path && "active-button"}
                
                  ${
                    (!open && "lg:w-[4rem] lg:h-[4rem] lg:pr-[1.2rem]") ||
                    (open && "lg:px-4 lg:py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={MessagesData[0].icon}
                      alt=""
                      className={` ${
                        (!open && "w-[2rem]") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre mr-2 first-letter:${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
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
                    (!open && "w-[4rem] h-[4rem] pr-[1.2rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={ExitData[0].icon}
                      alt=""
                      className={`${
                        (!open && "w-[2rem]") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre mr-2 ${
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
        <div className="w-full sm:hidden">
          {/* navbar */}
          <nav className="border border-r-0 w-full h-20 flex items-center bg-white ">
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
