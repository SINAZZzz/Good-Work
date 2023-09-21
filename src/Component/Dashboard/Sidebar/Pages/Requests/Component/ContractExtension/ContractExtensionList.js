import React, { useContext, useEffect } from "react";
import ContractExtensionItem from "./ContractExtensionItem";
import { RequestsContext } from "../../../../../../../Context/RequestsContext";
import Modal from "../Modal";

export default function ContractExtensionList({ item }) {
  const {
    setShowModal,
    setPrice,
    setDate,
    setCode,
    setMonth,
    setStats,
    // code,
    // date,
    // month,
    // price,
    // stats,
  } = useContext(RequestsContext);

  // useEffect(() => {
  //   setCode(item.code);
  //   setDate(item.date);
  //   setMonth(item.period_amount);
  //   setPrice(item.amount);
  //   setStats("سررسید");
  // }, []);

  const handleClick = () => {
    setShowModal(true);
    setCode(item.code);
    setDate(item.date);
    setMonth(item.period_amount);
    setPrice(item.amount);
    setStats("سررسید");
  };

  return (
    <div>
      <ContractExtensionItem
        price={item.amount}
        date={" تاریخ : " + item.date}
        code={" کد : " + item.code}
        month={item.period_amount + " ماهه "}
        stats={"سررسید"}
        handle={handleClick}
      />
      <Modal />
    </div>
  );
}
