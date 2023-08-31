import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { SidebarContext } from "../../../../../Context/SidebarContext";

export default function Messages() {
  const [id, setId] = useState(0);
  const open = useContext(SidebarContext);

  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex h-[90px]
       bg-white items-center justify-between px-[7rem] rounded-[10px] shadow-contracts-shadow"
      >
        <Link
          onClick={() => setId(3)}
          to="/dashboard/messages/AllMessages"
          className={`flex flex-col  items-center ${
            (open.open && " pl-[0rem]") || (!open.open && " pr-[2rem]")
          } h-[57px] justify-center ${
            id === 3 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <p className="text-[22px]">تمام پیام‌ها</p>
        </Link>
        <Link
          onClick={() => setId(2)}
          to="/dashboard/messages/NewMessages"
          className={`flex flex-col items-center border-x-[1px] ${
            (open.open && " px-[6rem]") || (!open.open && " px-[7rem]")
          } h-[57px] justify-center border-[#D3D4D6] ${
            id === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <p className="text-[22px]"> پیام‌های جدید</p>
        </Link>
        <Link
          onClick={() => setId(1)}
          to="/dashboard/messages/Notification"
          className={`flex flex-col items-center border-l-[1px] ${
            (open.open && " pl-[7rem]") ||
            (!open.open && "-mr-[2rem] pl-[8rem]")
          } h-[57px] justify-center border-[#D3D4D6] ${
            id === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          } `}
        >
          <p className="text-[22px]">اطلاعیه‌ها </p>
        </Link>
        <Link
          onClick={() => setId(0)}
          to="/dashboard/messages/Discount"
          className={`flex flex-col items-center h-[57px] justify-center ${
            id === 0 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          } 
          ${(open.open && " pl-[0rem]") || (!open.open && " pl-[2rem]")}`}
        >
          <p className="text-[22px]">تبلیغات </p>
        </Link>
      </div>
      <div
        className={`flex justify-start ml-[4rem] w-full -mt-[1px]
        ${
          (id === 0 && open.open && "justify-end pl-[1.5rem]") ||
          (id === 0 && !open.open && "justify-end pl-[3.5rem]")
        }
        ${
          (id === 1 && open.open && "justify-center pr-[22rem]") ||
          (id === 1 && !open.open && "justify-center pr-[23rem]")
        }
        ${
          (id === 2 && open.open && "justify-center pl-[17rem]") ||
          (id === 2 && !open.open && "justify-center pl-[18rem]")
        }
        ${
          (id === 3 && open.open && "justify-start pr-[3rem]") ||
          (id === 3 && !open.open && "justify-start pr-[5rem]")
        }
      `}
      >
        <hr className="bg-[#4F50FA] w-[240px] h-[3.5px] rounded-full" />
      </div>
      <Outlet />
      <Outlet />
      <Outlet />
      <Outlet />
      <Outlet />
    </div>
  );
}
