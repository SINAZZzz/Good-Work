import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCalendar4Week, BsCalendar3 } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";
import { FiPrinter } from "react-icons/fi";
import { PiNoteThin, PiWalletLight } from "react-icons/pi";

export default function Contracts() {
  const [id, setId] = useState(0);
  return (
    <div className="bg-black/5 h-[100vh] px-4 py-5">
      <div
        className="w-full flex justify-between h-[90px]
       bg-white items-center px-[12rem] rounded-[10px] shadow-contracts-shadow"
      >
        <Link
          onClick={() => setId(3)}
          className={`flex flex-col items-center ${
            id === 3 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <AiOutlineCheckCircle className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای سررسید</p>
        </Link>
        <Link
          onClick={() => setId(2)}
          className={`flex flex-col items-center ${
            id === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          } `}
        >
          <BsCalendar4Week className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای ماهانه </p>
        </Link>
        <Link
          className={`flex flex-col items-center ${
            id === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
          onClick={() => setId(1)}
        >
          <MdOutlineCancel className="w-[26px] h-[26px]" />
          <p className="text-[18px]">قراردادهای مسدود </p>
        </Link>
      </div>
      <div
        className={`flex justify-end ml-[4rem] -mt-[1px]
      ${
        (id === 0 && "hidden") ||
        (id === 1 && "justify-end ml-[4rem]") ||
        (id === 2 && "justify-center -ml-[0rem]") ||
        (id === 3 && "justify-between mr-[4rem]")
      }`}
      >
        <hr className="bg-[#4F50FA] w-[390px] h-[3.5px] rounded-full" />
      </div>
      <div
        className="w-full flex h-[150px]
        mt-6 pr-14 pl-32 
       bg-white items-center justify-between  rounded-[10px] shadow-contracts-shadow"
      >
        <div>
          {/* price */}
          <p className="text-[24px] contract-color-text font-DanaBold">
            ۴۱٬۷۵۰٬۰۰۰ تومان
          </p>
          {/* des */}
          <p className="text-[17px] w-60 text-[#4CAF50] ">
            {" "}
            تقریبی: هر ماه ۱،۴۶۱،۲۵۰ تومان با سود
          </p>
        </div>
        <div>
          {/* calendar */}
          <div className="flex">
            <BsCalendar3 className="text-[#C5C7D4] w-5 h-5" />
            <p className="contract-color-text mr-2 text-[18px]">۲۵ تیر ۱۴۰۰</p>
          </div>
          {/* time */}
          <div className="flex mt-5">
            <LuTimer className="contract-style-icon" />
            <p className="contract-color-text mr-2 text-[18px]">۳ ماهه</p>
          </div>
        </div>
        <div>
          {/* code */}
          <div className="flex mb-5">
            <PiNoteThin className="contract-style-icon text-[18px w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {" "}
              کد : ۱۴۰۰۰۴۲۹۳۲
            </p>
          </div>
          {/* state */}
          <div className="mr-1">
            <p className="contract-color-text text-[18px]">
              وضعیت:{" "}
              <span
                className="text-white bg-[#F44336]
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]"
              >
                مسدود
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#3F51B5]">
          {/* wallet */}
          <div className="flex ">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">سودهای واریزی</p>
          </div>
          {/* wallet */}
          <div className="flex mt-4">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">پرداختی ها</p>
          </div>
          {/* print */}
          <div className="flex mt-4">
            <FiPrinter className="w-5 h-5" />
            <p className="text-[14px] mr-2">نسخه پرینت</p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex h-[150px]
        mt-6 pr-14 pl-32 
       bg-white items-center justify-between  rounded-[10px] shadow-contracts-shadow"
      >
        <div>
          {/* price */}
          <p className="text-[24px] contract-color-text font-DanaBold">
            ۴۱٬۷۵۰٬۰۰۰ تومان
          </p>
          {/* des */}
          <p className="text-[17px] w-60 text-[#4CAF50] ">
            {" "}
            تقریبی: هر ماه ۱،۴۶۱،۲۵۰ تومان با سود
          </p>
        </div>
        <div>
          {/* calendar */}
          <div className="flex">
            <BsCalendar3 className="text-[#C5C7D4] w-5 h-5" />
            <p className="contract-color-text mr-2 text-[18px]">۲۵ تیر ۱۴۰۰</p>
          </div>
          {/* time */}
          <div className="flex mt-5">
            <LuTimer className="contract-style-icon" />
            <p className="contract-color-text mr-2 text-[18px]">۳ ماهه</p>
          </div>
        </div>
        <div>
          {/* code */}
          <div className="flex mb-5">
            <PiNoteThin className="contract-style-icon text-[18px w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {" "}
              کد : ۱۴۰۰۰۴۲۹۳۲
            </p>
          </div>
          {/* state */}
          <div className="mr-1">
            <p className="contract-color-text text-[18px]">
              وضعیت:{" "}
              <span
                className="text-white bg-[#F44336]
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]"
              >
                مسدود
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#3F51B5]">
          {/* wallet */}
          <div className="flex ">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">سودهای واریزی</p>
          </div>
          {/* wallet */}
          <div className="flex mt-4">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">پرداختی ها</p>
          </div>
          {/* print */}
          <div className="flex mt-4">
            <FiPrinter className="w-5 h-5" />
            <p className="text-[14px] mr-2">نسخه پرینت</p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex h-[150px]
        mt-6 pr-14 pl-32 
       bg-white items-center justify-between  rounded-[10px] shadow-contracts-shadow"
      >
        <div>
          {/* price */}
          <p className="text-[24px] contract-color-text font-DanaBold">
            ۴۱٬۷۵۰٬۰۰۰ تومان
          </p>
          {/* des */}
          <p className="text-[17px] w-60 text-[#4CAF50] ">
            {" "}
            تقریبی: هر ماه ۱،۴۶۱،۲۵۰ تومان با سود
          </p>
        </div>
        <div>
          {/* calendar */}
          <div className="flex">
            <BsCalendar3 className="text-[#C5C7D4] w-5 h-5" />
            <p className="contract-color-text mr-2 text-[18px]">۲۵ تیر ۱۴۰۰</p>
          </div>
          {/* time */}
          <div className="flex mt-5">
            <LuTimer className="contract-style-icon" />
            <p className="contract-color-text mr-2 text-[18px]">۳ ماهه</p>
          </div>
        </div>
        <div>
          {/* code */}
          <div className="flex mb-5">
            <PiNoteThin className="contract-style-icon text-[18px w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {" "}
              کد : ۱۴۰۰۰۴۲۹۳۲
            </p>
          </div>
          {/* state */}
          <div className="mr-1">
            <p className="contract-color-text text-[18px]">
              وضعیت:{" "}
              <span
                className="text-white bg-[#F44336]
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]"
              >
                مسدود
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#3F51B5]">
          {/* wallet */}
          <div className="flex ">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">سودهای واریزی</p>
          </div>
          {/* wallet */}
          <div className="flex mt-4">
            <PiWalletLight className="w-5 h-5" />
            <p className="text-[14px] mr-2">پرداختی ها</p>
          </div>
          {/* print */}
          <div className="flex mt-4">
            <FiPrinter className="w-5 h-5" />
            <p className="text-[14px] mr-2">نسخه پرینت</p>
          </div>
        </div>
      </div>
    </div>
  );
}
