import React from "react";
import Image from "../../../assets/Img/Login/Rectangle 5.png";
import Logo from "../../../assets/Img/Login/logo 1.png";

export default function Banear() {
  return (
    <div>
      {" "}
      <div className="absolute -left-0 z-0 h-full">
        <img
          src={Logo}
          alt=""
          className="z-0 absolute lg:left-20 lg:top-[18rem] lg:w-[18rem] 
      sm:w-[261px] sm:top-[103px] sm:left-[60px]"
        />
        <img
          src={Image}
          alt=""
          className="lg:w-[33rem] lg:h-[104.1vh] sm:w-[25rem] sm:h-[28rem] sm:-mt-[2rem] z-10"
        />
      </div>
    </div>
  );
}
