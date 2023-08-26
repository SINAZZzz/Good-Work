// React and hooks
import React, { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiMapAlt } from "react-icons/bi";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
// data sidebar
import { menus, Setting, Exit } from "./DataSidebar";
// data login
import { LoginData } from "../../Login/LoginData";
// context
import { ThemeContext } from "../../../Context/ThemeContext";
export const OpenContext = React.createContext();

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState("ligth");
  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalMap, setShowModalMap] = useState(false);
  const [showModalSocial, setShowModalSocial] = useState(false);

  localStorage.setItem("buttonOpen", JSON.stringify(open));

  const code = JSON.parse(localStorage.getItem("code"));
  const number = JSON.parse(localStorage.getItem("phone"));

  const handleClickExit = () => {
    if (code === LoginData.code && number === LoginData.phone) {
      localStorage.removeItem("code");
      localStorage.removeItem("phone");
      window.location.reload();
      alert("Logout");
    } else {
      alert("you are Login");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <OpenContext.Provider value={{ open, setOpen }}>
        <div className={`${theme}`}>
          <section className="flex font-Dana dark:bg-black">
            <div
              className={`bg-[#FFFFFF]  shadow-3xl h-[100%] ${
                open
                  ? "w-[20rem] ease-out  duration-1000"
                  : "w-24 ease-in  duration-1000"
              } `}
            >
              <div className="mt-4 flex flex-col gap-4 fixed">
                <div
                  className={`flex -mb-[2px] ${
                    (!open && "mr-6") || (open && "px-8")
                  }`}
                >
                  <img
                    src={"https://s8.uupload.ir/files/user_0p1a.png"}
                    alt="User"
                  />
                  <div
                    className={`flex flex-col justify-center items-center mr-4
            ${!open && "hidden"}`}
                  >
                    <span className="font-normal text-[18px]">علی علوی</span>
                    <span className="text-[#A2A2AC] text-[12px]">
                      سرمایه گذار
                    </span>
                  </div>
                </div>
                <hr
                  className={` ${
                    (!open && "w-24 duration-1000") ||
                    (open && "w-[16.5rem] duration-1000")
                  } `}
                />
                <div className="px-4">
                  {menus?.map((menu, index) => (
                    <Link
                      onMouseDown={() => setId(menu.id)}
                      to={menu?.link}
                      key={index}
                      className={` ${
                        (!open && menu?.margin && "mt-[20rem]") ||
                        (open && menu?.margin && "mt-[23.5rem]")
                      } group z-0 flex items-center text-[1rem] gap-3.5 font-medium  ${
                        index === id && "bg-[#4F50FA] text-white"
                      }
              ${!open && "w-[4rem] h-[4rem] pr-[1.2rem] "}
              ${open && "px-6 py-3.5 "} rounded-lg`}
                    >
                      <div>
                        {React.createElement(menu?.icon, { size: "25" })}
                      </div>
                      <h2
                        className={`whitespace-pre ${
                          !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                      >
                        {menu?.name}
                      </h2>
                    </Link>
                  ))}
                  <button
                    className={` ${
                      (!open && Exit[0].margin && "-mt-[13rem]") ||
                      (open && Exit[0].margin && "-mt-[11rem]")
                    } group z-0 flex items-center text-[1rem] gap-3.5 font-medium
            ${!open && "w-[4rem] h-[4rem] pr-[1.2rem]"}
            ${
              open && "w-full h-[3.4rem] px-6 py-3.5"
            } bg-red-500 text-white mt-2 rounded-lg`}
                    onClick={handleClickExit}
                  >
                    <div>
                      {React.createElement(Exit[0].icon, { size: "25" })}
                    </div>
                    <h2
                      className={`whitespace-pre ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {Exit[0].name}
                    </h2>
                  </button>

                  <button
                    className={` ${
                      (!open && Setting[0].margin && "-mt-[13rem]") ||
                      (open && Setting[0].margin && "-mt-[11rem]")
                    } group z-0 flex items-center text-[1rem] gap-3.5 font-medium
            ${!open && "w-[4rem] h-[4rem] pr-[1.2rem]"}
            ${open && "w-full h-[3.4rem] px-6 py-3.5"} rounded-lg`}
                    onClick={() => setShowModal(true)}
                  >
                    <div>
                      {React.createElement(Setting[0].icon, { size: "25" })}
                    </div>
                    <h2
                      className={`whitespace-pre ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {Setting[0].name}
                    </h2>
                  </button>
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col p-8 w-[430px] h-[375px] bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-center">
                              <p className="text-[20px] font-DanaBold">
                                تنظیمات
                              </p>
                              <button onClick={() => setShowModal(false)}>
                                <AiOutlineClose className="mr-[17rem]  text-[23px]" />
                              </button>
                            </div>
                            {/* Profile */}
                            <div className="flex mt-4">
                              <div className="block">
                                <img
                                  className="w-[70px] h-[70px]"
                                  src={
                                    "https://s8.uupload.ir/files/user_0p1a.png"
                                  }
                                  alt="User"
                                />
                              </div>
                              <span className="bg-[#4F50FA] -mr-[4.4rem] mt-[3.2rem] flex items-center justify-center text-[14px] w-[20px] h-[20px] text-white rounded-full">
                                <MdOutlineModeEditOutline />
                              </span>

                              <div
                                className={`flex flex-col justify-center items-center mr-[5rem] font-Dana`}
                              >
                                <span className="font-normal text-[25px]">
                                  علی علوی
                                </span>
                                <span className="text-[#A2A2AC] text-[17px]">
                                  سرمایه گذار
                                </span>
                              </div>
                            </div>
                            {/* Button */}
                            <div>
                              <button
                                onClick={() => setShowModalMap(true)}
                                className="flex items-center mt-4 border-solid rounded-[14px] px-4 w-full h-[80px] border-[#00000033] border-[1px]"
                              >
                                <BiMapAlt className="bg-[#4F50FA]  text-white p-2 rounded-[8px] w-[40px] h-[40px]" />
                                <p className="mr-4 text-[15px]">
                                  ویرایش آدرس و تلفن ثابت
                                </p>
                              </button>
                              {showModalMap ? (
                                <>
                                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                      {/*content*/}
                                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col px-8 py-6 w-[430px] h-fit bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-center">
                                          <p className="text-[20px] font-DanaBold">
                                            ویرایش آدرس و تلفن ثابت{" "}
                                          </p>
                                          <button
                                            onClick={() =>
                                              setShowModalMap(false)
                                            }
                                          >
                                            <IoIosArrowBack className="mr-[7.5rem]  text-[23px]" />
                                          </button>
                                        </div>
                                        {/* Form */}
                                        <div>
                                          <div className="mt-4 pb-2">
                                            <p>آدرس جدید را وارد کنید</p>
                                          </div>
                                          {/* input city and place */}
                                          <div>
                                            <input
                                              type="text"
                                              className="w-[179px] pr-2  border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                                              placeholder="شهر"
                                            />
                                            <input
                                              type="text"
                                              className="w-[179px] pr-2 mr-2 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                                              placeholder="منطقه"
                                            />
                                          </div>
                                          {/* input address */}
                                          <div>
                                            <textarea
                                              className="w-full pr-2 resize-none  mt-2 border-[#00000033] border-[1px] rounded-[5px] h-[100px]"
                                              placeholder="شرح آدرس"
                                            ></textarea>
                                          </div>
                                          {/* input number const :) */}
                                          <div>
                                            <p className="pb-2">
                                              شماره ثابت جدید خود را وارد کنید
                                            </p>
                                          </div>
                                          <div>
                                            <input
                                              type="text"
                                              className="w-full pr-2  border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                                              placeholder="03155845841"
                                            />
                                          </div>
                                          {/* Burron save */}
                                          <div>
                                            <button className="w-[140px] h-[35px] text-white mt-4 shadow-3xl rounded-[5px] bg-[#4F50FA]">
                                              ذخیره اطلاعات
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                              ) : null}
                              <button
                                onClick={() => setShowModalSocial(true)}
                                className="flex items-center mt-4 border-solid rounded-[14px] px-4 w-full h-[80px] border-[#00000033] border-[1px]"
                              >
                                <FaHashtag className="bg-[#4F50FA]  text-white p-2 rounded-[8px] w-[40px] h-[40px]" />
                                <p className="mr-4 text-[15px]">
                                  شبکه های اجتماعی
                                </p>
                              </button>
                              {showModalSocial ? (
                                <>
                                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                      {/*content*/}
                                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col py-10 px-8 w-[430px] h-fit bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-center w-full">
                                          <p className="text-[20px] font-DanaBold">
                                            شبکه های اجتماعی{" "}
                                          </p>
                                          <button
                                            onClick={() =>
                                              setShowModalSocial(false)
                                            }
                                          >
                                            <IoIosArrowBack className="mr-[11.63rem]  text-[23px]" />
                                          </button>
                                        </div>
                                        <div className="px-12">
                                          <div className="flex mt-6">
                                            <input
                                              type="text"
                                              className="w-[190px] h-[50px] outline-none rounded-r-lg bg-white border text-gray-900 block text-sm border-gray-300 p-2.5"
                                            />
                                            <span className="inline-flex w-[6rem] items-center px-3 text-sm text-[#34ACE1] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                              <p>Telegram</p>
                                            </span>
                                          </div>
                                          <div className="flex mt-2">
                                            <input
                                              type="text"
                                              className="w-[190px] h-[50px] outline-none rounded-r-lg bg-white border text-gray-900 block text-sm border-gray-300 p-2.5"
                                            />
                                            <span className="inline-flex items-center pr-2 pl-3 text-sm text-[#fa495a] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                              <p>Instagram</p>
                                            </span>
                                          </div>

                                          <p className="mt-4 text-[#444444] text-[14px]">
                                            آیدی خود را بدون @ بنویسید
                                          </p>
                                          <div className="flex mt-4">
                                            <input
                                              type="text"
                                              className="w-[190px] h-[50px] outline-none rounded-r-lg bg-white border text-gray-900 block text-sm border-gray-300 p-2.5"
                                            />
                                            <span className="inline-flex items-center pr-2 pl-3 text-sm text-[#3eca5ad7] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                              <p>WhatsApp</p>
                                            </span>
                                          </div>

                                          <p className="text-[#444444] mt-4 text-[14px]">
                                            شماره واتساپ خود را بدون صفر وارد
                                            کنید
                                          </p>
                                        </div>
                                        <div>
                                          <button className="w-[140px] h-[35px] text-white mt-8 shadow-3xl rounded-[5px] bg-[#4F50FA]">
                                            ذخیره اطلاعات
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                              ) : null}
                            </div>
                            {/* Footer */}
                            <div>
                              <div className="flex items-center mt-2">
                                <hr className="w-full" />
                                <p className="text-[12px] w-[24rem] mx-1 text-[#4b4949a0]">
                                  قدرت‌گرفته از کاشان پلاس
                                </p>
                                <hr className="w-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="w-full">
              <nav className="border w-full h-20 flex items-center">
                <div className="mr-4 flex justify-start">
                  <HiMenuAlt3
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />
                </div>
                <h1 className="mr-4 text-[25px] w-full">
                  {menus[id].name === "تنظیمات" ? "" : menus[id].name}
                </h1>
                <div className="flex w-full justify-end">
                  <button
                    onClick={() =>
                      setTheme(theme === "ligth" ? "dark" : "ligth")
                    }
                    className="absolute top-4 left-4 h-12 w-12 rounded-xl 
                    p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center
                    items-center"
                  >
                    {theme === "dark" ? (
                      <BsFillMoonFill className="h-5 w-5" />
                    ) : (
                      <BsSun className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </nav>
              {menus[id].Component}
            </div>
          </section>
        </div>
      </OpenContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Sidebar;
