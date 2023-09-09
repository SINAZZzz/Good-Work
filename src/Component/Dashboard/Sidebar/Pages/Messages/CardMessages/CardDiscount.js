import React, { useContext } from "react";
import takhfif from "../../../../../../assets/Img/Pages/Messages/takhfif.svg";
import { SidebarContext } from "../../../../../../Context/SidebarContext";

export default function CardDiscount() {
  const { open } = useContext(SidebarContext);
  return (
    <div>
      <div
        className="w-full flex h-[79px]
        mt-6 px-3
       bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] text-white bg-[#F44336] flex justify-center items-center rounded-full">
              <img src={takhfif} alt="" className="w-[20px]" />
            </div>
            <div className="w-[12px] h-[12px] bg-[#4F50FA] mr-3 rounded-full"></div>
            <div className="mr-3 text-[20px]">
              تخفیف خرید کالا از فروشگاه{" "}
              <span className="text-[#1585D6]">بیشتر...</span>
            </div>
          </div>
          <div className="flex items-center text-[22px]">
            <div>
              <p className="border-x-[1px] flex items-center px-6">
                ۱۵ آذر ۱۴۰۰
              </p>
            </div>
            <div>
              <p className="px-8">۲۲:۵۰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
