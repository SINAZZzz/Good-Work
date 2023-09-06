// React and hooks
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// img
import User from "../../../assets/Img/Sidebar/User.svg";
import menu from "../../../assets/Img/Sidebar/menu.svg";
// react icons
import { AiOutlineClose } from "react-icons/ai";
import { BiMapAlt } from "react-icons/bi";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
// data sidebar
import {
  SidebarData,
  SettingsData,
  ExitData,
  MessagesData,
} from "./data/DataSidebar";
// data login
import { LoginData } from "../../Login/LoginData";
// context
import { ThemeContext } from "../../../Context/ThemeContext";
import { SidebarContext } from "../../../Context/SidebarContext";
// router Hooks
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // use context
  const {
    id,
    setId,
    open,
    setOpen,
    showModal,
    setShowModal,
    showModalMap,
    setShowModalMap,
    showModalSocial,
    setShowModalSocial,
  } = useContext(SidebarContext);

  const { theme, setTheme } = useContext(ThemeContext);
  const [name, setName] = useState();
  // state route
  const navigate = useNavigate();
  // func exite
  const handleClickExit = () => {
    if (code === LoginData.code && number === LoginData.phone) {
      localStorage.removeItem("code");
      localStorage.removeItem("phone");
      navigate("/");
      window.location.reload();
      alert("Logout");
    } else {
      alert("you are Login");
    }
  };

  localStorage.setItem("buttonOpen", JSON.stringify(open));

  const code = JSON.parse(localStorage.getItem("code"));
  const number = JSON.parse(localStorage.getItem("phone"));

  return (
    <div className={`${theme}`}>
      <section className="flex font-Dana dark:bg-black">
        <div
          className={`bg-[#ffffff] shadow-3xl h-full transition-all duration-[200ms] ${
            open ? "w-[20rem]" : "w-24"
          } `}
        >
          <div className="mt-4 flex flex-col h-full gap-4 fixed ">
            <div
              className={`flex -mb-[2px] ${
                (!open && "mr-5") || (open && "px-7")
              }`}
            >
              <img
                src={"https://s8.uupload.ir/files/user_0p1a.png"}
                alt="User"
              />
              <div
                className={`flex flex-col justify-center items-center mr-4
            ${!open && "hidden"}`}
              >
                <span className="font-normal text-[18px]">علی علوی</span>
                <span className="text-[#A2A2AC] text-[12px]">سرمایه گذار</span>
              </div>
            </div>
            <hr
              className={`  ${
                (!open && "w-[6rem]") || (open && "w-[16.5rem]")
              } `}
            />
            <div
              className={`px-3  ${
                (!open && "min-h-[58vh]") || (open && "min-h-[60.5vh]")
              }`}
            >
              <div className="flex h-full flex-col">
                {SidebarData?.map((data, index) => (
                  <Link
                    onMouseDown={() => setId(data.id)}
                    onClick={() => setName(data.name)}
                    to={data?.path}
                    key={index}
                    className={`group z-0 my-1 flex items-center
                    text-[1rem] font-medium rounded-lg
                   ${index === id && "bg-[#4F50FA] text-white"}
                  ${
                    (!open && "w-[4rem] h-[4rem] pr-[1.2rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                  >
                    <div>
                      <img
                        src={data?.icon}
                        alt=""
                        className={`${
                          (!open && "w-[2rem]") || (open && "w-[1.5rem]")
                        }`}
                      />
                    </div>
                    <h2
                      className={`whitespace-pre ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {data?.name}
                    </h2>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                <Link
                  onMouseDown={() => setId(SettingsData[0].id)}
                  onClick={() => setName(SettingsData[0].name)}
                  to={SettingsData[0].path}
                  key={SettingsData[0].id}
                  className={`group z-0 flex my-1 items-center
                    text-[1rem] font-medium rounded-lg  ${
                      SettingsData[0].id === id && "bg-[#4F50FA] text-white"
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
                      className={`${
                        (!open && "w-[2rem]") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {SettingsData[0].name}
                  </h2>
                </Link>
                <Link
                  onMouseDown={() => setId(MessagesData[0].id)}
                  onClick={() => setName(MessagesData[0].name)}
                  to={MessagesData[0].path}
                  key={MessagesData[0].id}
                  className={`group z-0 my-1 flex items-center
                    text-[1rem] font-medium rounded-lg
                    ${MessagesData[0].id === id && "bg-[#4F50FA] text-white"}
                
                  ${
                    (!open && "w-[4rem] h-[4rem] pr-[1.2rem]") ||
                    (open && "px-4 py-4")
                  }
                   `}
                >
                  <div>
                    <img
                      src={MessagesData[0].icon}
                      alt=""
                      className={`${
                        (!open && "w-[2rem]") || (open && "w-[1.5rem]")
                      }`}
                    />
                  </div>
                  <h2
                    className={`whitespace-pre ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {MessagesData[0].name}
                  </h2>
                </Link>
                <Link
                  onMouseDown={() => setId(ExitData[0].id)}
                  onClick={() => setName(ExitData[0].name)}
                  to={ExitData[0].path}
                  key={ExitData[0].id}
                  className={`group z-0 my-1 flex items-center
                    text-[1rem] font-medium rounded-lg
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
                    className={`whitespace-pre ${
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
          <nav className="border w-full h-20 flex items-center bg-white ">
            <div className="mr-4 flex justify-start">
              <img
                src={menu}
                alt=""
                className="cursor-pointer w-[3rem]"
                onClick={() => setOpen(!open)}
              />
            </div>
            <h1 className="mr-4 text-[25px] w-full">{name}</h1>
            {/* Dark Mode */}
            <div className="flex w-full justify-end">
              <button
                onClick={() => setTheme(theme === "ligth" ? "dark" : "ligth")}
                className="absolute top-4 left-4 h-12 w-12 rounded-xl 
                    p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center
                    items-center"
              >
                {theme === "dark" ? (
                  <BsFillMoonFill className="h-5 w-5" />
                ) : (
                  <BsSun className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
          {/* Show component */}
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
