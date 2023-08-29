import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function Message() {
  return (
    <div className="card-message">
      <div className="item-card">
        <BsEmojiSmile className="icon-card" />
      </div>
      <p className="text-[1.3rem]">
        سلام علی عزیز، به پنل کاربری کار خوب خوش آمدید!
      </p>
    </div>
  );
}
