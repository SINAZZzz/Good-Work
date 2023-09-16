import React, { useContext } from "react";
import EmojiSmile from "../../../../../../assets/Img/Pages/Home/EmojiSmile.svg";
import { SidebarContext } from "../../../../../../Context/SidebarContext";

export default function Message() {
  const { user } = useContext(SidebarContext);
  return (
    <div className="card-message">
      <div className="item-card">
        <img src={EmojiSmile} alt="" />
      </div>
      <p className="text-[1.3rem]">
        سلام {user?.fname} عزیز، به پنل کاربری کار خوب خوش آمدید!
      </p>
    </div>
  );
}
