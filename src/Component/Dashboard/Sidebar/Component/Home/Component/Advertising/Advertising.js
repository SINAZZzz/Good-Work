import React from "react";

export default function Advertising() {
  return (
    <div>
      <div className="flex">
        <div className="mt-4 w-1/2 flex items-center">
          <img
            className=" rounded-[10px] w-[100%]"
            src="https://imgurl.ir/uploads/s905226_Rectangle_111.png"
            alt=""
          />
          <div className="absolute mr-8">
            <p className="text-[25px] text-white">با تخفیف خرید کنید!</p>
            <p className="text-[14px] text-white">
              خرید با تخفیف ویژه برای اعضای باشگاه کارخوب
            </p>
          </div>
        </div>
        <div className="mt-4 mr-4 w-1/2 flex items-center">
          <img
            className=" rounded-[10px] h-[100%]"
            src="https://imgurl.ir/uploads/s905226_Rectangle_111.png"
            alt=""
          />
          <div className="absolute mr-8">
            <p className="text-[25px] text-white">با تخفیف خرید کنید!</p>
            <p className="text-[14px] text-white">
              خرید با تخفیف ویژه برای اعضای باشگاه کارخوب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
