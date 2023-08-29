import React from "react";
import CardRequestItems from "./Component/CardRequest/CardRequestItems";
import ContractExtension from "./Component/ContractExtension/ContractExtension";

export default function Requests() {
  return (
    <div className="bg-black/5 h-[100%] p-8">
      <div className="flex">
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
