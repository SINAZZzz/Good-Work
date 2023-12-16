import React, { useContext } from "react";
import ContractExtensionItem from "./ContractExtensionItem";
import { RequestsContext } from "../../../../contexts/RequestsContext";
import Modal from "../ModaL";

import moment from "jalali-moment";

export default function ContractExtensionList({ item }) {
  const { setShowModal, setPrice, setDate, setCode, setMonth, setStats } =
    useContext(RequestsContext);

  var datetime = new Date(item.date * 1000);
  var allDate = datetime.toLocaleDateString();
  // handleClick for setState
  const handleClick = () => {
    setShowModal(true);
    setCode(item.code);
    setDate(moment(allDate).locale("fa").format("YYYY/M/D"));
    setMonth(item.period_amount);
    setPrice(numberWithCommas(item.amount));
    setStats("سررسید");
  };
  // fun Number With Commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <ContractExtensionItem
        price={numberWithCommas(item.amount) + " تومان"}
        date={" تاریخ : " + moment(allDate).locale("fa").format("YYYY/M/D")}
        code={" کد : " + item.code}
        month={item.period_amount + " ماهه "}
        stats={"سررسید"}
        handle={handleClick}
      />
      <Modal />
    </div>
  );
}
