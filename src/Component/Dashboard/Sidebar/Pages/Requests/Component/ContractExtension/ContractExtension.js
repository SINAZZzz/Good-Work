import React from "react";
// import ContractExtensionItem from "./ContractExtensionItem";
import ContractExtensionList from "./ContractExtensionList";

export default function ContractExtension({ item }) {
  return (
    <div>
      <ContractExtensionList item={item} />
      {/* </div> */}
    </div>
  );
}
