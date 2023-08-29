import React from "react";
// import ContractExtensionItem from "./ContractExtensionItem";
import ContractExtensionList from "./ContractExtensionList";

export default function ContractExtension(props) {
  return (
    <div>
      <div className="w-[520px] border-solid border-[#D3D4D6] border-[1px] h-[100%] px-[57px] py-8 block  justify-center bg-white rounded-[15px] shadow-Requests mr-10">
        <div>
          <h1 className="text-[24px] mr-[34%] font-DanaBold">تمدید قرارداد</h1>
          <p className="text-[18px] mt-3 mr-[6%]">
            قراردادی که برای تمدید مدنظر دارید انتخاب کنید.
          </p>
        </div>
        <ContractExtensionList />
      </div>
    </div>
  );
}
