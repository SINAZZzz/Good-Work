import React, { useContext, useEffect } from "react";
import ContractExtensionItem from "./ContractExtensionItem";
import { RequestsContext } from "../../../../../../../Context/RequestsContext";
import Modal from "../ModaL";

import moment from "jalali-moment";

export default function ContractExtensionList({ item }) {
  const { setShowModal, setPrice, setDate, setCode, setMonth, setStats } =
    useContext(RequestsContext);

  let datE = moment(item.date).locale("fa").format("YYYY/M/D");

  const handleClick = () => {
    setShowModal(true);
    setCode(item.code);
    setDate(datE);
    setMonth(item.period_amount);
    setPrice(item.amount);
    setStats("سررسید");
  };

  return (
    <div>
      <ContractExtensionItem
        price={item.amount}
        date={" تاریخ : " + datE}
        code={" کد : " + item.code}
        month={item.period_amount + " ماهه "}
        stats={"سررسید"}
        handle={handleClick}
      />
      <Modal />
    </div>
  );
}
