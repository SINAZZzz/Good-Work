import React, { useEffect, useState, useContext } from "react";
import CardRequestItems from "./Component/CardRequest/CardRequestItems";
import ContractExtension from "./Component/ContractExtension/ContractExtension";
import CardRequest from "./Component/CardRequest/CardRequest";
import Checkmark from "../../../../../assets/Img/Pages/Requests/Checkmark.svg";
import add from "../../../../../assets/Img/Pages/Requests/add.svg";
import sync from "../../../../../assets/Img/Pages/Requests/sync.svg";

import { get } from "../../../../../servises";
import { RequestsContext } from "../../../../../Context/RequestsContext";
import Modal from "./Component/Modal";

export default function Requests() {
  const [investments, setInvestments] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [mounted, setMounted] = useState(true);
  const { title, setTitle, setAddModal } = useContext(RequestsContext);
  //handling
  const handleClick = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    if (mounted) {
      getInvestment();
    }

    return () => {
      setMounted(false);
    };
  }, []);

  //api
  const getInvestment = () => {
    get("user/investment")
      .then((res) => {
        setInvestments(res.data.Data);
      })
      .then(() => {
        setCategoryId("monthly");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-black/5 h-full">
      <div className="flex pt-[2rem]">
        <div className="block w-1/2">
          {/* <CardRequestItems /> */}
          <div className="pr-8">
            <CardRequest
              icon={Checkmark}
              title={"تسویه قرارداد"}
              des={
                "برای تسویه قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تسویه مدنظر دارید انتخاب کنید."
              }
              handle={() => handleClick("monthly")}
              MouseDown={() => setTitle("تسویه")}
            />
            <CardRequest
              icon={sync}
              margin={"mt-8"}
              title={"تمدید قرارداد"}
              des={
                "برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تمدید مدنظر دارید انتخاب کنید."
              }
              handle={() => handleClick("monthly")}
              MouseDown={() => setTitle("تمدید")}
            />
            <CardRequest
              icon={add}
              margin={"mt-8"}
              title={"قرارداد جدید"}
              des={
                "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
              }
              handle={() => setAddModal(true)}
            />
          </div>
        </div>
        <div>
          <div
            className="w-[520px] border-solid
       border-[#D3D4D6] border-[1px] h-full px-[4rem]
        py-8 block  justify-center bg-white rounded-[15px] shadow-Requests"
          >
            <div>
              <h1 className="text-[24px] mr-[34%] font-DanaBold">
                {title} قرارداد
              </h1>
              <p className="text-[18px] mt-3 mr-[6%]">
                قراردادی که برای {title} مدنظر دارید انتخاب کنید.
              </p>
            </div>
            {investments.length !== 0 ? (
              investments.map((item) => {
                if (item.type === "monthly") {
                  return <ContractExtension key={item.code} item={item} />;
                } else {
                  <h1 className="text-center mt-5"> لیست خالی است!</h1>;
                }
              })
            ) : (
              <h1 className="text-center mt-5"> لیست خالی است!</h1>
            )}
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
}
