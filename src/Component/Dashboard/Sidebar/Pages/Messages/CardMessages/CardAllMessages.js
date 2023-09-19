import React from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
import CardNotification from "./CardNotification";
import CardDiscount from "./CardDiscount";

export default function CardAllMessages() {
  return (
    <div>
      <CardNotification />
      <CardDiscount />
    </div>
  );
}
