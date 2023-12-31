import React from "react";
import Message from "./Component/Message";
import Cards from "./Component/Cards/Cards";
import Advertising from "./Component/Advertising/Advertising";

export default function Home() {
  return (
    <div className="bg-black/5 h-full px-8 py-8">
      {/* message */}
      <Message />
      <Cards />
      {/* Advertising */}
      <Advertising />
    </div>
  );
}
