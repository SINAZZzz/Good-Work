import React, { useContext } from "react";
import notif from "../../../../../../assets/Img/Pages/Messages/notif.svg";
import { SidebarContext } from "../../../../../../Context/SidebarContext";

export default function CardNotification() {
  return (
    <div>
      <div
        className="w-full flex h-[79px]
        mt-6 px-3
       bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] bg-[#4CAF50] flex justify-center items-center rounded-full">
              <img src={notif} alt="" className="w-[20px] text-red-500" />
            </div>
            <div className="px-[6px] py-[6px] mr-2 bg-[#4F50FA] rounded-full"></div>
            <div className="mr-3 text-[20px]">
              واریزی برای قرارداد شما به کد 1399122683 به میزان 50000000 به حساب
              125489 <span className="text-[#1585D6]">بیشتر...</span>
            </div>
          </div>
          <div
            className={` flex items-center transition-all duration-[500ms] ease-in-out 
            text-[22px]`}
          >
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
