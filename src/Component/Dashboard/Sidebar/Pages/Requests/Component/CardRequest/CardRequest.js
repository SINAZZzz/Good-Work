import React from "react";
import { Link } from "react-router-dom";

export default function CardRequest(props) {
  return (
    <div>
      <div
        className={`${props.margin}
         bg-white lg:w-[450px] lg:h-[140px] sm:w-[345px] sm:h-[100px]
          rounded-[15px] shadow-Requests
         lg:p-6 sm:p-3 `}
      >
        <Link
          className="flex lg:mb-4 sm:mb-2 items-center cursor-pointer"
          onClick={props.handle}
          onMouseDown={props.MouseDown}
          to={props.path}
        >
          <img
            src={props.icon}
            className="lg:w-[35px] lg:h-[35px] sm:w-[25px] sm:h-[25px]"
          />
          <p className="font-DanaBold lg:text-[20px] sm:text-[16px] mr-2">
            {props.title}
          </p>
        </Link>
        <div>
          <p className="lg:text-[16px] sm:text-[12px] text-[#444444]">
            {props.des}
          </p>
        </div>
      </div>
    </div>
  );
}
