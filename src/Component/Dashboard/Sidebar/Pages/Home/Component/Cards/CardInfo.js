import React from "react";
import EmojiSmile from "../../../../../../../assets/Img/Pages/Home/EmojiSmile.svg";

export default function CardInfo(props) {
  return (
    <div
      className={`w-1/2 mt-9 mr-4
     bg-white h-[100px] rounded-xl flex items-center`}
    >
      <div className="item-card">
        <img src={EmojiSmile} alt="" />
      </div>
      <p className="lable-font-des">
        {`دوست عزیز، ${props.days} روز با کارخوب بوده‌اید!`}{" "}
      </p>
    </div>
  );
}
