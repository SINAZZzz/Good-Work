import React, { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { OpenContext } from "../../../Sidebar";

export default function CardNotification() {
  const open = useContext(OpenContext);
  return (
    <div>
      <div
        className="w-full flex h-[79px]
        mt-6 px-3 
       bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="w-[44px] h-[44px]  bg-[#4CAF50] flex justify-center items-center rounded-full">
          <IoMdNotificationsOutline className="w-[25px] h-[25px] rotate-[30deg] text-white" />
        </div>
        <div className="w-[12px] h-[12px] bg-[#4F50FA] mr-3 rounded-full"></div>
        <div className="mr-3 text-[20px]">
          واریزی برای قرارداد شما به کد 1399122683 به میزان 50000000 به حساب
          125489 <span className="text-[#1585D6]">بیشتر...</span>
        </div>
        <div>
          <div
            className={` flex items-center transition-all duration-[500ms] ease-in-out ${
              (open.open && "mr-[10rem]") || (!open.open && "mr-[21rem]")
            } text-[22px]`}
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
