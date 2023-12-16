import React, { useEffect, useState, useContext } from "react";
import ContractExtension from "./Component/ContractExtension/ContractExtension";
import CardRequest from "./Component/CardRequest/CardRequest";
import Checkmark from "../../assets/images/pages/requests/Checkmark.svg";
import add from "../../assets/images/pages/requests/add.svg";
import sync from "../../assets/images/pages/requests/sync.svg";

import { RequestsContext } from "../../contexts/RequestsContext";
import ModaL from "./Component/ModaL";
// api
import Api from "api/newApi";
export default function Requests() {
  const { title, setTitle, setAddModal, setCategoryId, setPath, Path } =
    useContext(RequestsContext);
  const [mounted, setMounted] = useState(true);
  const [investments, setInvestments] = useState([]);
  //handling
  const handleClick = (id) => {
    setCategoryId(id);
    if (window.innerWidth <= 1016) {
      setPath("/requests/CloseList");
    } else {
      // setAddModal(true);
    }
  };

  const handleAdd = () => {
    if (window.innerWidth <= 1016) {
      setPath("/requests/Add");
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
    Api.Get("user/investment")
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
    <div>
      <div className="flex lg:pt-[2rem] w-full">
        <div className="lg:block lg:w-[50%] xl:w-full sm:w-full">
          <div className="lg:px-8 lg:pt-0 sm:pt-4 sm:px-4">
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
              margin={"mt-4"}
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
              margin={"mt-4"}
              title={"قرارداد جدید"}
              des={
                "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
              }
              handle={handleAdd}
              path={Path}
            />
          </div>
        </div>
        <div className="sm:hidden lg:flex lg:pl-8 lg:w-[50%] lg:justify-center">
          <div
            className="lg:w-[520px] lg:h-fit sm:w-full lg:border-solid sm:pt-6
       lg:border-[#D3D4D6] lg:border-[1px] h-full font-YekanBakhF
        lg:py-8 lg:px-8 bg-white rounded-[15px] lg:shadow-Requests"
          >
            <div>
              <div className={`flex pr-10 w-full justify-center items-center`}>
                <div className={`flex flex-col`}>
                  <h1 className="lg:text-[24px]  sm:text-[18px] lg:mr-[34%]  font-[700]">
                    {title} قرارداد
                  </h1>
                  <p className="text-[18px] font-[300] lg:mt-3">
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
