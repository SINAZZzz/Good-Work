import React from "react";
import CardInfo from "./CardInfo";
import CardBox from "./CardBox";
import { FaFileContract } from "react-icons/fa";
import { BsFillCalendar2DateFill, BsCalendar3 } from "react-icons/bs";

export default function Cards() {
  return (
    <div>
      {" "}
      <div className="flex">
        <CardBox
          title={"تعداد قراردادهای شما"}
          des={"۵ عدد جمعا به ارزش ۳۸۰ میلیون تومان"}
          background={"bg-[#CCDEEC]"}
          margin={"mt-9"}
          icon={<FaFileContract className="text-[#68b2ea] icon" />}
        />
        <CardInfo />
      </div>
      <div className="flex">
        <CardBox
          title={"تعداد قراردادهای ماهانه"}
          des={"۳ عدد جمعا به ارزش ۱۸۰ میلیون تومان"}
          background={"bg-[#CED4DA]"}
          margin={"mt-4"}
          icon={<BsFillCalendar2DateFill className="text-black/60 icon" />}
        />
        <CardBox
          title={"تعداد قراردادهای سررسید"}
          des={"۲ عدد جمعا به ارزش ۲۰۰ میلیون تومان"}
          background={"bg-[#F0F0F0]"}
          margin={"mt-4 mr-4"}
          icon={<BsCalendar3 className="text-black icon" />}
        />
      </div>
    </div>
  );
}
