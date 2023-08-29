import CardBlocked from "./CardContract/CardBlocked";
import CardMonthly from "./CardContract/CardMonthly";
import CardMaturity from "./CardContract/CardMaturity";

export const DataContract = [
  {
    link: "/blocked",
    Component: <CardBlocked />,
    id: 0,
  },
  {
    link: "/mturity",
    Component: <CardMaturity />,
    id: 1,
  },
  {
    link: "/monthly",
    Component: <CardMonthly />,
    id: 2,
  },
];
