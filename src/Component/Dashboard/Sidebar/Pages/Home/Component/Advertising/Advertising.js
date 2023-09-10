import React from "react";
import Tabligh from "../../../../../../../assets/Img/Pages/Home/Tabligh.svg";

export default function Advertising() {
  return (
    <div>
      <div className="flex">
        <div className="mt-4 w-1/2">
          <img className="z-0 rounded-[10px] w-[100%]" src={Tabligh} alt="" />
        </div>
        <div className="mt-4 mr-4 w-1/2">
          <img className="z-0 rounded-[10px] w-[100%]" src={Tabligh} alt="" />
        </div>
      </div>
    </div>
  );
}
