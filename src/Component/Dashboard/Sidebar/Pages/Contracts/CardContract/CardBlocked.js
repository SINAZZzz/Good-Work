import React, { useContext, useRef } from "react";
import calendar from "../../../../../../assets/Img/Pages/Contracts/Card/calendar.svg";
import note from "../../../../../../assets/Img/Pages/Contracts/Card/note.svg";
import print from "../../../../../../assets/Img/Pages/Contracts/Card/print.svg";
import time from "../../../../../../assets/Img/Pages/Contracts/Card/time.svg";
import wallet from "../../../../../../assets/Img/Pages/Contracts/Card/wallet.svg";
import { ContractContext } from "../../../../../../Context/ContractContext";

export default function CardBlocked() {
  const { state } = useContext(ContractContext);
  return (
    <div>
      <div
        className="w-full flex h-[150px]
        mt-6 pr-10 pl-20 
       bg-white items-center justify-between rounded-[10px] shadow-contracts-shadow"
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
            <img src={calendar} alt="" className="text-[#C5C7D4] w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">۲۵ تیر ۱۴۰۰</p>
          </div>
          {/* time */}
          <div className="flex mt-5">
            <img src={time} alt="" className="contract-style-icon w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">۳ ماهه</p>
          </div>
        </div>
        <div>
          {/* code */}
          <div className="flex mb-5">
            <img src={note} alt="" className="contract-style-icon w-7 h-7" />
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
                className={`text-white ${
                  (state == "مسدود" && "bg-[#F44336]") ||
                  (state == "ماهانه" && "bg-[#4CAF50]") ||
                  (state == "سررسید" && "bg-[#4CAF50]")
                }
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]`}
              >
                {state}
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#3F51B5]">
          {/* wallet */}
          <div className="flex ">
            <img src={wallet} alt="" className="w-5 h-5" />
            <p className="text-[14px] mr-2">سودهای واریزی</p>
          </div>
          {/* wallet */}
          <div className="flex mt-4">
            <img src={wallet} alt="" className="w-5 h-5" />
            <p className="text-[14px] mr-2">پرداختی ها</p>
          </div>
          {/* print */}
          <div className="flex mt-4">
            <img src={print} alt="" className="w-5 h-5" />
            <p className="text-[14px] mr-2">نسخه پرینت</p>
          </div>
        </div>
      </div>
    </div>
  );
}
