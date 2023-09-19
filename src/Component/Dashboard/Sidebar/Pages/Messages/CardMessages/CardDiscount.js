import React, { useContext, useEffect, useState } from "react";
import takhfif from "../../../../../../assets/Img/Pages/Messages/takhfif.svg";
import { post } from "../../../../../../servises";

export default function CardDiscount() {
  const [messages, setMessages] = useState([]);
  const [limit, setLimit] = useState(10);
  const [key, setKey] = useState(0);

  useEffect(() => {
    var data = JSON.stringify({
      type: "public",
      status: "all",
      offset: 0,
      limit: limit,
    });
    post(`/user/message`, data)
      .then((res) => {
        setMessages(res.data.Data);
        // console.log(res.data.Data[key]);
        // console.log(res.data.Data.investment.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        className="w-full flex h-[79px]
          mt-6 px-3
         bg-white items-center rounded-[10px] shadow-contracts-shadow"
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] text-white bg-[#F44336] flex justify-center items-center rounded-full">
              <img src={takhfif} alt="" className="w-[20px]" />
            </div>
            <div className="w-[12px] h-[12px] bg-[#4F50FA] mr-3 rounded-full"></div>
            <div className="mr-3 text-[20px]">
              <span className="text-[#1585D6]">بیشتر...</span>
            </div>
          </div>
          <div className="flex items-center text-[22px]">
            <div>
              <p className="border-x-[1px] flex items-center px-6">
                ۱۵ آذر ۱۴۰۰
              </p>
            </div>
            <div>
              <p className="px-8"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
