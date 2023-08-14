import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";
import { FiPrinter } from "react-icons/fi";
import { PiNoteThin, PiWalletLight } from "react-icons/pi";

export default function CardMaturity() {
  return (
    <div>
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
                className="text-white bg-[#4CAF50]
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]"
              >
                سررسید
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
