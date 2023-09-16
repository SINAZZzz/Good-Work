import React from "react";
import CardRequestItems from "./Component/CardRequest/CardRequestItems";
import ContractExtension from "./Component/ContractExtension/ContractExtension";

export default function Requests() {
  return (
    <div className="bg-black/5 h-full">
      <div className="flex pt-[2rem]">
        <div className="block w-1/2">
          <CardRequestItems />
        </div>
        <div>
          <ContractExtension />
        </div>
      </div>
    </div>
  );
}
