import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import CardBox from "./CardBox";
import { post } from "../../../../../../../servises";

import Contract from "../../../../../../../assets/Img/Pages/Home/Contract.svg";
import Calendar1 from "../../../../../../../assets/Img/Pages/Home/Calendar1.svg";
import Calendar2 from "../../../../../../../assets/Img/Pages/Home/Calendar2.svg";

export default function Cards() {
  const [stat, setStat] = useState("");
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (mounted) {
      getStat();
    }

    return () => {
      setMounted(false);
    };
  }, []);

  //api
  const getStat = () => {
    post("user/profile/stat")
      .then((res) => {
        setStat(res.data.Data.stat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {" "}
      <div className="flex">
        <CardBox
          title={"تعداد قراردادهای شما"}
          des={`${stat.count_investment}
           عدد جمعا به ارزش ${stat.sum_investment} تومان`}
          background={"bg-[#CCDEEC]"}
          margin={"mt-9"}
          icon={<img src={Contract} alt="" />}
        />
        <CardInfo days={stat.days} />
      </div>
      <div className="flex">
        <CardBox
          title={"تعداد قراردادهای ماهانه"}
          des={`${stat.count_monthly_investment}
           عدد جمعا به ارزش ${stat.sum_monthly_investment} میلیون تومان`}
          background={"bg-[#CED4DA]"}
          margin={"mt-4"}
          icon={<img src={Calendar2} alt="" />}
        />
        <CardBox
          title={"تعداد قراردادهای سررسید"}
          des={`${stat.count_deadline_investment}
             عدد جمعا به ارزش ${stat.sum_deadline_investment} میلیون تومان`}
          background={"bg-[#F0F0F0]"}
          margin={"mt-4 mr-4"}
          icon={<img src={Calendar1} alt="" />}
        />
      </div>
    </div>
  );
}
