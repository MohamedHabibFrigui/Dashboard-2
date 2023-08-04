import { CgLoadbarSound } from "react-icons/cg";
import { FiShoppingBag, FiBook, FiHelpCircle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineDollarCircle, AiOutlineShop } from "react-icons/ai";
import { LuTicket } from "react-icons/lu";
import { BsPeople, BsStar } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";

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

export const cards = [
  {
    id: 1,
    icon: <AiOutlineShop />,
    title: "Total sales",
    amount: "$825,491.73",
    increasePercentage: "20.9%",
    increase: "+18.4K",
    positive: true,
  },
  {
    id: 2,
    icon: <BsPeople />,
    title: "Visitors",
    amount: "780,192",
    increasePercentage: "13%",
    increase: "+3.5K",
    positive: true,
  },
  {
    id: 3,
    icon: <BsStar />,
    title: "Total Orders",
    amount: "2625.991",
    increasePercentage: "4.2%",
    increase: "+5K",
    positive: true,
  },
  {
    id: 4,
    icon: <TbArrowBackUp />,
    title: "Refund",
    amount: "780,192",
    increasePercentage: "9.1%",
    increase: "+66K",
    positive: false,
  },
];

export const linechartData = {
  revenueData: [140, 150, 280, 260, 320, 350, 200, 220, 150, 250, 240, 260],
  ordersData: [120, 150, 130, 140, 180, 220, 210, 200, 180, 160, 190, 250],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};
