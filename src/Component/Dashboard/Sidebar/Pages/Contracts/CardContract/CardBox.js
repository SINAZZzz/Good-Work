import React, { useContext, useState, useEffect } from "react";
import calendar from "../../../../../../assets/Img/Pages/Contracts/Card/calendar.svg";
import note from "../../../../../../assets/Img/Pages/Contracts/Card/note.svg";
import print from "../../../../../../assets/Img/Pages/Contracts/Card/print.svg";
import time from "../../../../../../assets/Img/Pages/Contracts/Card/time.svg";
import wallet from "../../../../../../assets/Img/Pages/Contracts/Card/wallet.svg";
import { ContractContext } from "../../../../../../Context/ContractContext";
import { get } from "../../../../../../servises";

export default function CardBox({ item }) {
  const [details, setDetails] = useState("");
  const { categoryId } = useContext(ContractContext);
  useEffect(() => {
    get(`user/investment/detail/${item.code}`)
      .then((res) => {
        setDetails(res.data.Data.investment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderSwitch(categoryId) {
    switch (categoryId) {
      case "block":
        return "مسدود";
      case "monthly":
        return "ماهانه";
      case "deadline":
        return "سررسید";
      default:
        return "";
    }
  }

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
            {details?.amount} تومان
          </p>
          {/* des */}
          <p className="text-[17px] text-[#4CAF50] ">
            {categoryId === "monthly"
              ? "با سود تقریبی: هر ماه "
              : "با ثمن تقریبی در سررسید:   "}
            {details?.benefit} تومان
          </p>
        </div>
        <div>
          {/* calendar */}
          <div className="flex">
            <img src={calendar} alt="" className="text-[#C5C7D4] w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {details?.date}
            </p>
          </div>
          {/* time */}
          <div className="flex mt-5">
            <img src={time} alt="" className="contract-style-icon w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {details?.period_amount} ماهه
            </p>
          </div>
        </div>
        <div>
          {/* code */}
          <div className="flex mb-5">
            <img src={note} alt="" className="contract-style-icon w-7 h-7" />
            <p className="contract-color-text mr-2 text-[18px]">
              {" "}
              کد : {details?.code}
            </p>
          </div>
          {/* state */}
          <div className="mr-1">
            <p className="contract-color-text text-[18px]">
              وضعیت:{" "}
              <span
                className={`text-white
          onClick={() => handleClick("monthly")}
          ${
            categoryId === "deadline" && categoryId === "monthly"
              ? "bg-[#4CAF50]"
              : "bg-[#F44336]"
          }
             mr-4 text-[18px] px-2 py-[4px] w-[60px] h-[30px] rounded-[5px]`}
              >
                {renderSwitch(categoryId)}
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#3F51B5]">
          {/* wallet */}
          <div className="flex">
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
