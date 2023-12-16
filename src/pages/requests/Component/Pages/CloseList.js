import React, { useContext, useEffect, useState } from "react";
import ContractExtension from "../ContractExtension/ContractExtension";
import { RequestsContext } from "../../../../contexts/RequestsContext";
import sync from "../../../../assets/images/pages/requests/Vector (1).svg";
import Checkmark from "../../../../assets/images/pages/requests/icons8_Checkmark 1.svg";
// api
import Api from "../../../../api/newApi";
export default function CloseList() {
  const [mounted, setMounted] = useState(true);
  const [investments, setInvestments] = useState([]);
  const { title, setTitle, setAddModal, setCategoryId } =
    useContext(RequestsContext);
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
      <div
        dir="rtl"
        className=" bg-white w-full font-YekanBakhF lg:border-solid sm:pt-6 h-full"
      >
        <div>
          <div className={`flex pr-7`}>
            <div className="sm:bg-[#4F50FA]  font-[700] sm:w-[44px] sm:h-[44px] rounded-[5px] flex justify-center items-center">
              {title === "تسویه" ? (
                <img
                  src={Checkmark}
                  alt=""
                  className="lg:hidden sm:flex sm:w-[30px] sm:h-[30px]"
                />
              ) : (
                <img
                  src={sync}
                  alt=""
                  className="lg:hidden sm:flex sm:w-[30px] sm:h-[30px]"
                />
              )}
            </div>
            <div className={`flex flex-col mr-4`}>
              <h1 className="lg:text-[24px] sm:text-[18px] lg:mr-[34%] font-[700]">
                {title} قرارداد
              </h1>
              <p className="lg:text-[18px] sm:text-[13px] font-[400] lg:mt-3 lg:mr-[6%]">
                قراردادی که برای {title} مدنظر دارید انتخاب کنید.
              </p>
            </div>
          </div>
          <div className="flex flex-col"></div>
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
  );
}
