import React from "react";

export default function CardBox(props) {
  return (
    <div
      className={`w-1/2 ${props.margin} bg-white h-[100px] rounded-xl flex items-center`}
    >
      <div
        className={`${props.background} rounded-full mx-4 w-[3.6rem] h-[3.6rem] flex justify-center items-center`}
      >
        {props.icon}
      </div>
      <div>
        <p className="text-[#A2A2AC] text-[12px]">{props.title}</p>
        <p className="lable-font-des">{props.des}</p>
      </div>
    </div>
  );
}
