import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";

export default function Contracts() {
  const [id, setId] = useState(0);
  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex justify-between h-[90px]
       bg-white items-center px-[12rem] rounded-[10px] shadow-contracts-shadow"
      >
        <Link
          onClick={() => setId(1)}
          to="/dashboard/contracts/mturity"
          className={`flex flex-col items-center ${
            id === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <AiOutlineCheckCircle className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای سررسید</p>
        </Link>
        <Link
          onClick={() => setId(2)}
          to="/dashboard/contracts/monthly"
          className={`flex flex-col items-center ${
            id === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          } `}
        >
          <BsCalendar4Week className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای ماهانه </p>
        </Link>
        <Link
          onClick={() => setId(0)}
          to="/dashboard/contracts/blocked"
          className={`flex flex-col items-center ${
            id === 0 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <MdOutlineCancel className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای مسدود </p>
        </Link>
      </div>
      <div
        className={`flex justify-end ml-[4rem] -mt-[1px]
      ${
        // (id === 0 && "hidden") ||
        (id === 0 && "justify-end ml-[4rem]") ||
        (id === 2 && "justify-center ml-[1.2rem]") ||
        (id === 1 && "justify-between mr-[4rem]")
      }`}
      >
        <hr className="bg-[#4F50FA] w-[390px] h-[3.5px] rounded-full" />
      </div>
      <Outlet />
      <Outlet />
      <Outlet />
    </div>
  );
}
