import React from "react";

export default function CardRequest(props) {
  return (
    <div>
      <div
        className={`block ${props.margin}
         bg-white w-[500px] h-[150px] rounded-[15px] shadow-Requests
         p-6`}
      >
        <div className="flex mb-4 items-center">
          <props.icon className="w-[35px] h-[35px]" />
          <p
            className="font-DanaBold text-[20px] mr-2"
            onClick={() => props.state}
          >
            {props.title}
          </p>
        </div>
        <div>
          <p className="text-[17.5px] text-[#444444]">{props.des}</p>
        </div>
      </div>
    </div>
  );
}
