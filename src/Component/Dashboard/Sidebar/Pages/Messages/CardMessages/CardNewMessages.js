import React from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
import CardNotification from "./CardNotification";
import CardDiscount from "./CardDiscount";

export default function CardNewMessages() {
  return (
    <div>
      <CardNotification />
      <CardDiscount />
    </div>
  );
}
