import React from "react";
import { Link } from "react-router-dom";

export default function ContractExtensionItem(props) {
  return (
    <div className="sm:px-7">
      <div
        className="lg:w-[400px] sm:w-[320px] cursor-pointer sm:h-[148px] lg:h-[186px] sm:mt-4 lg:mt-7 
      lg:shadow-Requests rounded-[13px] font-Dana bg-white border-solid border-[#D3D4D06] border-[1px]"
      >
        <div onClick={props.handle}>
          <div>
            <h1 className="lg:text-[25.38px] sm:text-[20px] pt-6 font-DanaBold flex justify-center">
              {props.price}
            </h1>
          </div>
          <div className="flex justify-between sm:px-6 sm:py-4 lg:py-6 lg:px-8">
            <div>
              <div>
                <p className="lg:text-[17px] sm:text-[14px]">{props.date}</p>
              </div>
              <div>
                <p className="lg:text-[17px] sm:text-[14px] pt-4">
                  {props.code}
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="lg:text-[17px] sm:text-[14px]">{props.month}</p>
              </div>
              <div>
                <p className="lg:text-[18px] sm:text-[14px] pt-4">
                  وضعیت:{" "}
                  <span
                    className="text-white bg-[#4CAF50]
               lg:px-2 lg:py-[4px] sm:px-1 sm:py-0.5 mr-1 rounded-[5px]"
                  >
                    {props.stats}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
