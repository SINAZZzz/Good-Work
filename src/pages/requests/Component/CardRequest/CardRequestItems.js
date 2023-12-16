import React, { useState } from "react";
import CardRequest from "./CardRequest";
import Checkmark from "../../../../../../../assets/Img/Pages/Requests/Checkmark.svg";
import add from "../../../../../../../assets/Img/Pages/Requests/add.svg";
import sync from "../../../../../../../assets/Img/Pages/Requests/sync.svg";

export default function CardRequestItems() {
  const [contractExtension, setContractExtension] = useState(false);
  const [newContract, setNewContract] = useState(false);

  return (
    <div className="pr-8">
      <CardRequest
        icon={Checkmark}
        title={"تسویه قرارداد"}
        des={
          "برای تسویه قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تسویه مدنظر دارید انتخاب کنید."
        }
      />

      <CardRequest
        icon={sync}
        margin={"mt-8"}
        title={"تمدید قرارداد"}
        des={
          "برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تمدید مدنظر دارید انتخاب کنید."
        }
        // handle={() => alert("Hi")}
      />

      <CardRequest
        icon={add}
        margin={"mt-8"}
        title={"تسویه قرارداد"}
        des={
          "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
        }
      />
    </div>
  );
}
