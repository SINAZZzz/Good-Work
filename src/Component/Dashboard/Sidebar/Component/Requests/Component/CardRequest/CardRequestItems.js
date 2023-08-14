import React from "react";
import CardRequest from "./CardRequest";
import {
  IoMdCheckmarkCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { AiOutlineSync } from "react-icons/ai";

export default function CardRequestItems() {
  return (
    <div>
      <CardRequest
        icon={IoMdCheckmarkCircleOutline}
        title={"تسویه قرارداد"}
        des={
          "برای تسویه قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تسویه مدنظر دارید انتخاب کنید."
        }
      />
      <CardRequest
        margin={"mt-8"}
        icon={AiOutlineSync}
        title={"تمدید قرارداد"}
        des={
          " برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تمدید مدنظر دارید انتخاب کنید."
        }
      />
      <CardRequest
        margin={"mt-8"}
        icon={IoIosAddCircleOutline}
        title={"قرارداد جدید"}
        des={
          "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
        }
      />
    </div>
  );
}
