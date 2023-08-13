import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { menus } from "./DataSidebar";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  return (
    <section className="flex font-Dana">
      <div
        className={`bg-[#FFFFFF] shadow-3xl h-[100%] ${
          open ? "w-[20rem]" : "w-24"
        } `}
      >
        <div className="mt-4 flex flex-col gap-4 fixed">
          <div
            className={`flex -mb-[2px] ${
              (!open && "mr-6") || (open && "px-8")
            }`}
          >
            <img src={"https://s8.uupload.ir/files/user_0p1a.png"} alt="User" />
            <div
              className={`flex flex-col justify-center items-center mr-4
            ${!open && "hidden"}`}
            >
              <span className="font-normal text-[18px]">علی علوی</span>
              <span className="text-[#A2A2AC] text-[12px]">سرمایه گذار</span>
            </div>
          </div>
          <hr className={` ${(!open && "w-24") || (open && "w-[16.5rem]")} `} />
          <div className="px-4">
            {menus?.map((menu, index) => (
              <Link
                onClick={(e) => setId(menu.id)}
                onMouseDown={(e) => setName(menu.name)}
                to={menu?.link}
                key={index}
                className={` ${
                  (!open && menu?.margin && "mt-[15rem]") ||
                  (open && menu?.margin && "mt-[20rem]")
                } group flex items-center text-[1rem] gap-3.5 font-medium  ${
                  index === id && "bg-[#4F50FA] text-white"
                }
                ${index === 5 && "bg-red-500 text-white mt-2"} 
              ${!open && "w-[4rem] h-[4rem] pr-[1.2rem]"}
              ${open && "px-6 py-3.5"} rounded-lg`}
              >
                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                <h2
                  className={`whitespace-pre ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <nav className="border w-full h-20 flex items-center ">
          <div className="mr-4 flex justify-start">
            <HiMenuAlt3
              size={30}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <h1 className="mr-4 text-[25px]">{name}</h1>
        </nav>
        {menus[id].Component}
      </div>
    </section>
  );
};

export default Sidebar;
