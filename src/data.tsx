import { CgLoadbarSound } from "react-icons/cg";
import { FiShoppingBag, FiBook, FiHelpCircle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuTicket } from "react-icons/lu";

export const menu = [
  {
    id: 1,
    title: "Overview",
    url: "/",
    icon: <CgLoadbarSound />,
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
    icon: <FiShoppingBag />,
  },
  {
    id: 3,
    title: "Customers",
    url: "/customers",
    icon: <GoPerson />,
  },
  {
    id: 4,
    title: "Orders",
    url: "/orders",
    icon: <FiBook />,
  },
  {
    id: 5,
    title: "Settings",
    url: "/settings",
    icon: <RiSettingsLine />,
  },
  {
    id: 6,
    title: "Payments",
    url: "/payments",
    icon: <AiOutlineDollarCircle />,
  },
  {
    id: 7,
    title: "Tickets",
    url: "/tickets",
    icon: <LuTicket />,
  },
  {
    id: 8,
    title: "FAQs",
    url: "/faqs",
    icon: <FiHelpCircle />,
  },
];
