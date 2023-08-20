import CardAllMessages from "./CardMessages/CardAllMessages";
import CardDiscount from "./CardMessages/CardDiscount";
import CardNewMessages from "./CardMessages/CardNewMessages";
import CardNotification from "./CardMessages/CardNotification";

export const DataMessages = [
  {
    link: "/Discount",
    Component: <CardDiscount />,
    id: 1,
  },
  {
    link: "/Notification",
    Component: <CardNotification />,
    id: 2,
  },
  {
    link: "/NewMessages",
    Component: <CardNewMessages />,
    id: 3,
  },
  {
    link: "/AllMessages",
    Component: <CardAllMessages />,
    id: 4,
  },
];
