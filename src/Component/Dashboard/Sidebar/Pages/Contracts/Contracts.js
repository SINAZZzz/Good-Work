import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import cancel from "../../../../../assets/Img/Pages/Contracts/Head/cancel.svg";
import calendar from "../../../../../assets/Img/Pages/Contracts/Head/calendar.svg";
import ok from "../../../../../assets/Img/Pages/Contracts/Head/ok.svg";
import { ContractContext } from "../../../../../Context/ContractContext";

export default function Contracts() {
  const [id, setId] = useState(0);
  const { state, setState } = useContext(ContractContext);

  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex justify-between h-[90px]
       bg-white items-center px-[12rem] rounded-[10px] shadow-contracts-shadow"
      >
        <Link
          onClick={() => setId(1)}
          onMouseDown={() => setState(id === 1 ? "سررسید" : "")}
          to="/dashboard/contracts/mturity"
          className={`flex flex-col items-center ${
            id === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <img src={ok} alt="" className="w-[26px]" />
          <p className="text-[18px]">قراردادهای سررسید</p>
        </Link>
        <Link
          onClick={() => setId(2)}
          onMouseDown={() => setState(id == 2 ? "ماهانه" : "")}
          to="/dashboard/contracts/monthly"
          className={`flex flex-col items-center ${
            id === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          } `}
        >
          <img src={calendar} alt="" className="w-[26px]" />
          <p className="text-[18px]">قراردادهای ماهانه </p>
        </Link>
        <Link
          onClick={() => setId(0)}
          onMouseDown={() => setState(id == 0 ? "مسدود" : "")}
          to="/dashboard/contracts/blocked"
          className={`flex flex-col items-center ${
            id === 0 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <img src={cancel} alt="" className="w-[33px]" />
          <p className="text-[18px]">قراردادهای مسدود </p>
        </Link>
      </div>
      <div
        className={`flex  ml-[4rem] -mt-[1px]
      ${
        // (id === 0 && "hidden") ||
        (id === 0 && "justify-end") ||
        (id === 2 && "justify-center mr-[4rem]") ||
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
