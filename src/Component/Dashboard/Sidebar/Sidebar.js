// React and hooks
import React, { useContext } from "react";
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
// data login
import { LoginData } from "../../Login/LoginData";
// context
import { SidebarContext } from "../../../Context/SidebarContext";
// router Hooks
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // use context
  const {
    name,
    setName,
    path,
    setPath,
    open,
    setOpen,
    showModal,
    setShowModal,
    showModalMap,
    setShowModalMap,
    showModalSocial,
    setShowModalSocial,
  } = useContext(SidebarContext);

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
    <div>
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
              <img src={User} alt="User" />
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
                    onMouseDown={() => setPath(data.path)}
                    onClick={() => setName(data.name)}
                    to={path}
                    key={index}
                    className={`button-side ${
                      data.path === path && "active-button"
                    }
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
                        className={` ${
                          (!open && "w-[8rem] ") || (open && "w-[1.5rem]")
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
                <Link
                  onClick={() => setName(SettingsData[0].name)}
                  to={path}
                  key={SettingsData[0].id}
                  className={`button-side ${
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
                    {SettingsData[0].name}
                  </h2>
                </Link>
                <Link
                  onMouseDown={() => setPath(MessagesData[0].path)}
                  onClick={() => setName(MessagesData[0].name)}
                  to={path}
                  key={MessagesData[0].id}
                  className={`button-side
                    ${MessagesData[0].path === path && "active-button"}
                
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
                  onClick={() => setName(ExitData[0].name)}
                  to={path}
                  key={ExitData[0].id}
                  className={`button-side
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
        <div className="w-full">
          <nav className="border w-full h-20 flex items-center bg-white ">
            <div className="mr-4 flex justify-start">
              <img
                src={menu}
                alt=""
                className="cursor-pointer w-[1.5rem]"
                onClick={() => setOpen(!open)}
              />
            </div>
            <h1 className="mr-4 text-[25px] w-full">{name}</h1>
          </nav>
          {/* Show component */}
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
