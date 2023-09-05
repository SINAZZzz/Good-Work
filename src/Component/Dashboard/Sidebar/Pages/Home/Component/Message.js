import React from "react";
import EmojiSmile from "../../../../../../assets/Img/Pages/Home/EmojiSmile.svg";

export default function Message() {
  return (
    <div className="card-message">
      <div className="item-card">
        <img src={EmojiSmile} alt="" />
      </div>
      <p className="text-[1.3rem]">
        سلام علی عزیز، به پنل کاربری کار خوب خوش آمدید!
      </p>
    </div>
  );
}
