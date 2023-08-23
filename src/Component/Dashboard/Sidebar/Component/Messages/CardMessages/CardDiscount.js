import React, { useContext } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { OpenContext } from "../../../Sidebar";

export default function CardDiscount() {
  const open = useContext(OpenContext);
  return (
    <div>
      <div
        className="w-full flex h-[79px]
        mt-6 px-3 
       bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="w-[44px] h-[44px] text-white bg-[#F44336] flex justify-center items-center rounded-full">
          <CiDiscount1 className="w-[30px] h-[30px]" />
        </div>
        <div className="w-[12px] h-[12px] bg-[#4F50FA] mr-3 rounded-full"></div>
        <div className="mr-3 text-[20px]">
          تخفیف خرید کالا از فروشگاه چله{" "}
          <span className="text-[#1585D6]">بیشتر...</span>
        </div>
        <div>
          <div
            className={` flex items-center ${
              (open.open && "mr-[34rem]") || (!open.open && "mr-[45rem]")
            }  text-[22px]`}
          >
            <div>
              <p className="border-x-[1px] flex items-center h-[40px] px-6">
                ۱۵ آذر ۱۴۰۰
              </p>
            </div>
            <div>
              <p className="px-6">۲۲:۵۰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
