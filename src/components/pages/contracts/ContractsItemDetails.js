//utils
import { memo } from "react";
import { commafy, enToFaDigit, dateToIR } from "utility/utils";

const ContractsItemDetails = ({ item }) => {
  return (
    <div className="contractsItemDetails ">
      <div className="contractsItemDetails__money d-flex justify-content-center">
        <span className="mx-1">تومان</span>
        <span>{enToFaDigit(commafy(item.amount))}</span>
      </div>
      <div className="d-flex  justify-content-between border-bottom py-1 mb-1">
        <span>{enToFaDigit(item.serial)}</span>
        <span>:سریال</span>
      </div>
      <div className="d-flex  justify-content-between border-bottom py-1 mb-1">
        <span>دسته‌ای </span>
        <span> :نوع پرداخت</span>
      </div>
      <div className="d-flex  justify-content-between border-bottom py-1 mb-1">
        <span> {dateToIR(item.date)} </span>
        <span> :تاریخ </span>
      </div>
      <div className="d-flex  justify-content-between border-bottom py-1 mb-1">
        <span>{enToFaDigit(item.snumber)}</span>
        <span>:شماره حساب مبدا</span>
      </div>
      <div className="d-flex  justify-content-between border-bottom py-1 mb-1">
        <span>{enToFaDigit(item.dnumber)}</span>
        <span>:شماره حساب مقصد </span>
      </div>
    </div>
  );
};

export default memo(ContractsItemDetails);
