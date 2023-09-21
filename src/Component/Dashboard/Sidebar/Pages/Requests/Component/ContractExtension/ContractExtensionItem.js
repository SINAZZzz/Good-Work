import React from "react";

export default function ContractExtensionItem(props) {
  return (
    <div>
      <div className="w-[400px] cursor-pointer h-[186px] mt-7 shadow-Requests rounded-[13px] font-Dana bg-white  border-solid border-[#D3D4D06] border-[1px]">
        <div onClick={props.handle}>
          <div>
            <h1 className="text-[25.38px] pt-6 font-DanaBold flex justify-center">
              {props.price}
            </h1>
          </div>
          <div className="flex justify-between px-8 py-8">
            <div>
              <div>
                <p className="text-[17px] ">{props.date}</p>
              </div>
              <div>
                <p className="text-[17px] pt-4">{props.code}</p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-[17px]">{props.month}</p>
              </div>
              <div>
                <p className="text-[18px] pt-4">
                  وضعیت:{" "}
                  <span
                    className="text-white bg-[#4CAF50]
               px-2 py-[4px] mr-1 rounded-[5px]"
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
