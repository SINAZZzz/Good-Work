import React from "react";
import Image from "../../../assets/Img/Login/Rectangle 5.png";
import Logo from "../../../assets/Img/Login/logo 1.png";

export default function Banear() {
  return (
    <div>
      {" "}
      <div className="lg:absolute sm:relative -left-0 z-0 h-full">
        <img
          src={Logo}
          alt=""
          className="z-0 absolute lg:left-20 lg:top-[18rem] lg:w-[18rem] 
             sm:w-[260px] sm:top-[103px] sm:left-[60px]"
        />
        <img src={Image} alt="" className="w-full h-full z-10" />
      </div>
    </div>
  );
}
