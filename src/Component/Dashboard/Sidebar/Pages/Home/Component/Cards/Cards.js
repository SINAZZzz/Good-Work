import React from "react";
import CardInfo from "./CardInfo";
import CardBox from "./CardBox";
import { FaFileContract } from "react-icons/fa";
import { BsFillCalendar2DateFill, BsCalendar3 } from "react-icons/bs";

import Contract from "../../../../../../../assets/Img/Pages/Home/Contract.svg";
import Calendar1 from "../../../../../../../assets/Img/Pages/Home/Calendar1.svg";
import Calendar2 from "../../../../../../../assets/Img/Pages/Home/Calendar2.svg";

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
          icon={<img src={Contract} alt="" />}
        />
        <CardInfo />
      </div>
      <div className="flex">
        <CardBox
          title={"تعداد قراردادهای ماهانه"}
          des={"۳ عدد جمعا به ارزش ۱۸۰ میلیون تومان"}
          background={"bg-[#CED4DA]"}
          margin={"mt-4"}
          icon={<img src={Calendar2} alt="" />}
        />
        <CardBox
          title={"تعداد قراردادهای سررسید"}
          des={"۲ عدد جمعا به ارزش ۲۰۰ میلیون تومان"}
          background={"bg-[#F0F0F0]"}
          margin={"mt-4 mr-4"}
          icon={<img src={Calendar1} alt="" />}
        />
      </div>
    </div>
  );
}
