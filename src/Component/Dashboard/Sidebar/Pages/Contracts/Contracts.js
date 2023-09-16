import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import cancel from "../../../../../assets/Img/Pages/Contracts/Head/cancel.svg";
import calendar from "../../../../../assets/Img/Pages/Contracts/Head/calendar.svg";
import ok from "../../../../../assets/Img/Pages/Contracts/Head/ok.svg";
import { ContractContext } from "../../../../../Context/ContractContext";
import { SidebarContext } from "../../../../../Context/SidebarContext";
import { get } from "../../../../../servises";
import CardBox from "../Home/Component/Cards/CardBox";

export default function Contracts({ title }) {
  const [id, setId] = useState(0);
  const {
    categoryId,
    setCategoryId,
    mounted,
    setMounted,
    category,
    setCategory,
    investments,
    setInvestments,
  } = useContext(ContractContext);
  const { setLocationTitle } = useContext(SidebarContext);
  useEffect(() => {
    setLocationTitle(title);
  });

  useEffect(() => {
    if (mounted) {
      getInvestment();
    }

    return () => {
      setMounted(false);
    };
  }, []);

  //for filter investments
  useEffect(() => {
    if (investments.length !== 0) {
      filterCategory();
    }
  }, [categoryId]);

  //handling
  const handleClick = (id) => {
    setCategoryId(id);
  };

  const filterCategory = () => {
    if (categoryId === "block") {
      setCategory(
        investments?.filter((item) => {
          return item.status === "close";
        })
      );
    } else
      setCategory(
        investments?.filter((item) => {
          return item.type === categoryId && item.status !== "close";
        })
      );
  };

  //api
  const getInvestment = () => {
    get("user/investment")
      .then((res) => {
        setInvestments(res.data.Data);
      })
      .then(() => {
        setCategoryId("deadline");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-black/5 h-[100%] px-4 py-5">
      <div
        className="w-full flex justify-center h-[90px]
       bg-white items-center  rounded-[10px] shadow-contracts-shadow"
      >
        <Link
          // onClick={() => setId(1)}
          onMouseDown={() => setId(1)}
          onClick={() => handleClick("deadline")}
          // onMouseDown={() => setState(id === 1 ? "سررسید" : "")}
          to="/dashboard/contracts/mturity"
          className={`flex flex-col items-center ${
            id === 1 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }
          ${categoryId === "deadline" ? "category__selected" : ""}`}
        >
          <img src={ok} alt="" className="w-[26px]" />
          <p className="text-[18px]">قراردادهای سررسید</p>
        </Link>
        <Link
          onMouseDown={() => setId(2)}
          // onClick={() => setId(2)}
          onClick={() => handleClick("monthly")}
          // onMouseDown={() => setState(id == 2 ? "ماهانه" : "")}
          to="/dashboard/contracts/monthly"
          className={`flex flex-col items-center px-[12rem] ${
            id === 2 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }
          ${categoryId === "monthly" ? "category__selected" : ""} `}
        >
          <img src={calendar} alt="" className="w-[26px]" />
          <p className="text-[18px]">قراردادهای ماهانه </p>
        </Link>
        <Link
          onMouseDown={() => setId(0)}
          onClick={() => handleClick("block")}
          // onMouseDown={() => setState(id == 0 ? "مسدود" : "")}
          to="/dashboard/contracts/blocked"
          className={`flex flex-col items-center ${
            id === 0 ? "text-[#4F50FA]" : "text-[#0b0b12]"
          }
          ${categoryId === "block" ? "category__selected" : ""}`}
        >
          <img src={cancel} alt="" className="w-[33px]" />
          <p className="text-[18px]">قراردادهای مسدود </p>
        </Link>
      </div>
      <div
        className={`flex  mr-[9rem] -mt-[1px] max-[1300px]:hidden  ${
          (id === 2 && "hidden") || (id === 0 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      <div
        className={`flex justify-center  mr-[0.5rem] -mt-[1px] max-[1300px]:hidden ${
          (id === 1 && "hidden") || (id === 0 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      <div
        className={`flex justify-end ml-[8.5rem] -mt-[1px] max-[1300px]:hidden ${
          (id === 2 && "hidden") || (id === 1 && "hidden")
        }`}
      >
        <hr className="bg-[#4F50FA] w-[310px] h-[3.5px] rounded-full" />
      </div>
      {category.length !== 0 ? (
        category.map((item) => {
          return <Outlet key={item.code} item={item} />;
        })
      ) : (
        <h1 className="text-center mt-5"> لیست خالی است!</h1>
      )}
      {/* <Outlet /> */}
      {/* <Outlet />
      <Outlet /> */}
    </div>
  );
}
