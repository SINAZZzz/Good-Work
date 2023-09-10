import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import cancel from "../../../../../assets/Img/Pages/Contracts/Head/cancel.svg";
import calendar from "../../../../../assets/Img/Pages/Contracts/Head/calendar.svg";
import ok from "../../../../../assets/Img/Pages/Contracts/Head/ok.svg";
import { ContractContext } from "../../../../../Context/ContractContext";

export default function Contracts() {
  const [id, setId] = useState(0);
  const { setState } = useContext(ContractContext);

  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex justify-center h-[90px]
       bg-white items-center  rounded-[10px] shadow-contracts-shadow"
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
          className={`flex flex-col items-center px-[12rem] ${
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
        className={`flex  mr-[9rem] -mt-[1px] max-[1300px]:hidden  ${
          (id === 2 && "hidden") || (id === 0 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      <div
        className={`flex justify-center  mr-[0.5rem] -mt-[1px] max-[1300px]:hidden ${
          (id === 1 && "hidden") || (id === 0 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      <div
        className={`flex justify-end ml-[8.5rem] -mt-[1px] max-[1300px]:hidden ${
          (id === 2 && "hidden") || (id === 1 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      <Outlet />
      <Outlet />
      <Outlet />
    </div>
  );
}
