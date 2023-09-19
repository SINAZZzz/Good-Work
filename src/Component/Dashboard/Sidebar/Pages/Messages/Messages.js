import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { SidebarContext } from "../../../../../Context/SidebarContext";
import { post } from "../../../../../servises";
import { ContractContext } from "../../../../../Context/ContractContext";
import CardBox from "./CardMessages/CardBox";
import Cookies from "js-cookie";

export default function Messages({ title }) {
  const { setLocationTitle } = useContext(SidebarContext);

  const [categoryId, setCategoryId] = useState(0);
  const [limit, setLimit] = useState(10);
  const [selectedId, setSelectedId] = useState(0);
  const [messages, setMessages] = useState([]);
  const [category, setCategory] = useState([]);
  const [mounted, setMounted] = useState(true);
  const [content, setContent] = useState(null);

  // function renderSwitch(categoryId) {
  //   switch (categoryId) {
  //     case 0:
  //       return "pr-[2rem]";
  //     case 1:
  //       return `pr-[22rem] ${!open && "pr-[26rem]"}`;
  //     case 2:
  //       return "justify-center pr-[20rem]";
  //     default:
  //       return "";
  //   }
  // }

  useEffect(() => {
    if (mounted) {
      getMessages();
    }
    return () => {
      setMounted(false);
    };
  }, []);

  //handling
  const handleClick = (id) => {
    setCategoryId(id);
  };

  //api
  const getMessages = () => {
    var data = JSON.stringify({
      type: "public",
      status: "all",
      offset: 0,
      limit: limit,
    });

    post("/user/message", data)
      .then((res) => {
        setMessages(res.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLocationTitle(title);
  });

  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex h-[90px]
       bg-white items-center justify-between px-[7rem] rounded-[10px] shadow-contracts-shadow"
      >
        {/* ${
            (open.open && "") || (!open.open && "")
          } */}
        <Link
          onClick={() => handleClick(0)}
          to="/dashboard/messages/AllMessages"
          className={`flex flex-col  items-center h-[57px] justify-center ${
            categoryId === 0 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <p className="text-[22px]">تمام پیام‌ها</p>
        </Link>
        <Link
          onClick={() => handleClick(1)}
          to="/dashboard/messages/NewMessages"
          className={`flex flex-col items-center
           h-[57px] justify-center border-[#D3D4D6] ${
             categoryId === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
           }`}
        >
          <p className="text-[22px]"> پیام‌های جدید</p>
        </Link>
        <Link
          onClick={() => handleClick(2)}
          to="/dashboard/messages/Notification"
          className={`flex flex-col items-center
           h-[57px] justify-center border-[#D3D4D6] ${
             categoryId === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
           } `}
        >
          <p className="text-[22px]">اطلاعیه‌ها</p>
        </Link>
        <Link
          onClick={() => handleClick(3)}
          to="/dashboard/messages/Discount"
          className={`flex flex-col items-center h-[57px] justify-center ${
            categoryId === 3 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }`}
        >
          <p className="text-[22px]">تبلیغات </p>
        </Link>
      </div>
      {/* <div
        className={`flex justify-start ml-[4rem] w-full -mt-[1px]
      `}
        // ${renderSwitch(categoryId)}
      >
        <hr className="bg-[#4F50FA] w-[240px] h-[3.5px] rounded-full" />
      </div> */}
      {messages.length !== 0 ? (
        messages.map((item) => {
          return <CardBox key={item.id} item={item} />;
        })
      ) : (
        <h1 className="text-center mt-5"> لیست خالی است!</h1>
      )}
    </div>
  );
}
