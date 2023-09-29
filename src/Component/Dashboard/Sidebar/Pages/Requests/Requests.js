import React, { useEffect, useState, useContext } from "react";
import ContractExtension from "./Component/ContractExtension/ContractExtension";
import CardRequest from "./Component/CardRequest/CardRequest";
import Checkmark from "../../../../../assets/Img/Pages/Requests/Checkmark.svg";
import add from "../../../../../assets/Img/Pages/Requests/add.svg";
import sync from "../../../../../assets/Img/Pages/Requests/sync.svg";

import { RequestsContext } from "../../../../../Context/RequestsContext";
import ModaL from "./Component/ModaL";
import { get } from "../../../../../servises";

export default function Requests() {
  const { title, setTitle, setAddModal, setCategoryId, setPath, Path } =
    useContext(RequestsContext);
  const [mounted, setMounted] = useState(true);
  const [investments, setInvestments] = useState([]);
  //handling
  const handleClick = (id) => {
    setCategoryId(id);
    if (window.innerWidth === 375) {
      setPath("/dashboard/requests/CloseList");
    } else {
      // setAddModal(true);
    }
  };

  const handleAdd = () => {
    if (window.innerWidth === 375) {
      setPath("/dashboard/requests/Add");
    } else {
      setAddModal(true);
    }
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
    <div className="bg-black/5 h-full w-full flex">
      <div className="flex lg:pt-[2rem] lg:w-full">
        <div className="lg:block lg:w-1/2 sm:w-full">
          <div className="lg:pr-8 lg:pt-0 sm:pt-4 sm:pr-4">
            <CardRequest
              icon={Checkmark}
              title={"تسویه قرارداد"}
              des={
                "برای تسویه قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تسویه مدنظر دارید انتخاب کنید."
              }
              handle={() => handleClick("monthly")}
              MouseDown={() => setTitle("تسویه")}
              path={Path}
            />
            <CardRequest
              icon={sync}
              margin={"lg:mt-8 sm:mt-4"}
              title={"تمدید قرارداد"}
              des={
                "برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تمدید مدنظر دارید انتخاب کنید."
              }
              handle={() => handleClick("monthly")}
              MouseDown={() => setTitle("تمدید")}
              path={Path}
            />
            <CardRequest
              icon={add}
              margin={"lg:mt-8 sm:mt-4"}
              title={"قرارداد جدید"}
              des={
                "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
              }
              handle={handleAdd}
              path={Path}
            />
          </div>
        </div>
        <div className="sm:hidden lg:block lg:w-1/2">
          <div
            className="lg:w-[520px] lg:h-fit sm:w-full lg:border-solid sm:pt-6
       lg:border-[#D3D4D6] lg:border-[1px] h-full
        lg:py-8 lg:px-8 bg-white rounded-[15px] lg:shadow-Requests"
          >
            <div>
              <div className={`flex pr-10`}>
                <div className={`flex flex-col`}>
                  <h1 className="lg:text-[24px] sm:text-[18px] lg:mr-[34%] font-DanaBold">
                    {title} قرارداد
                  </h1>
                  <p className="text-[20px] lg:mt-3">
                    قراردادی که برای {title} مدنظر دارید انتخاب کنید.
                  </p>
                </div>
              </div>
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
        <ModaL />
      </div>
    </div>
  );
}
