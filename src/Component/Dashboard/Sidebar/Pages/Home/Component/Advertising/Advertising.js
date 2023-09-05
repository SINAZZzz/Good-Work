import React from "react";
import Tabligh from "../../../../../../../assets/Img/Pages/Home/Tabligh.svg";

export default function Advertising() {
  return (
    <div>
      <div className="flex">
        <div className="mt-4 w-1/2">
          <img className="z-0 rounded-[10px] w-[100%]" src={Tabligh} alt="" />
          {/* <div className="z-20 -mt-[11rem] mr-8">
            <p className="text-[25px] text-white">با تخفیف خرید کنید!</p>
            <p className="text-[14px] text-white">
              خرید با تخفیف ویژه برای اعضای باشگاه کارخوب
            </p>
          </div> */}
        </div>
        <div className="mt-4 mr-4 w-1/2">
          <img className="z-0 rounded-[10px] w-[100%]" src={Tabligh} alt="" />
          {/* <div className="z-20 -mt-[11rem] mr-8">
            <p className="text-[25px] text-white">با تخفیف خرید کنید!</p>
            <p className="text-[14px] text-white">
              خرید با تخفیف ویژه برای اعضای باشگاه کارخوب
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
