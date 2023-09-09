import React, { useContext } from "react";
import notif from "../../../../../../assets/Img/Pages/Messages/notif.svg";
import { SidebarContext } from "../../../../../../Context/SidebarContext";

export default function CardNotification() {
  const open = useContext(SidebarContext);
  return (
    <div>
      <div
        className="w-full flex h-[79px]
        mt-6 px-3
       bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="flex items-center w-full justify-between">
          <div className="w-[44px] h-[44px] bg-[#4CAF50] flex justify-center items-center rounded-full">
            <img src={notif} alt="" className="w-[20px] text-white" />
          </div>
          {/* <div className="w-[12px] h-[12px] bg-[#4F50FA] rounded-full"></div> */}
          <div
            className={`${
              (open && "-mr-[9rem]") || (!open && "-mr-[calc(10rem-15rem)]")
            }
           text-[20px]`}
          >
            واریزی برای قرارداد شما به کد 1399122683 به میزان 50000000 به حساب
            125489 <span className="text-[#1585D6]">بیشتر...</span>
          </div>
          <div
            className={` flex items-center transition-all duration-[500ms] ease-in-out 
            text-[22px]`}
          >
            {/* ${(open && "justify-end") || (!open && "mr-[21rem]")}  */}
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
        {/* <div className="flex items-center w-full z-0">
          
        </div> */}
      </div>
    </div>
  );
}
