import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function CardInfo() {
  return (
    <div className="w-1/2 mt-9 mr-4 bg-white h-[100px] rounded-xl flex items-center">
      <div className="item-card">
        <BsEmojiSmile className="icon-card" />
      </div>
      <p className="lable-font-des">دوست عزیز، ۱۵۷ روز با کارخوب بوده‌اید! </p>
    </div>
  );
}
