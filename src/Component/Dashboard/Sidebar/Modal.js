import React, { useContext } from "react";
import { SidebarContext } from "../../../Context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiMapAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";

export default function Modal() {
  const {
    showModal,
    setShowModal,
    showModalMap,
    setShowModalMap,
    showModalSocial,
    setShowModalSocial,
  } = useContext(SidebarContext);
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col p-8 w-[430px] h-[375px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center">
                  <p className="text-[20px] font-DanaBold">تنظیمات</p>
                  <button onClick={() => setShowModal(false)}>
                    <AiOutlineClose className="mr-[17rem]  text-[23px]" />
                  </button>
                </div>
                {/* Profile */}
                <div className="flex mt-4">
                  <div className="block">
                    <img
                      className="w-[70px] h-[70px]"
                      src={"https://s8.uupload.ir/files/user_0p1a.png"}
                      alt="User"
                    />
                  </div>
                  <span className="bg-[#4F50FA] -mr-[4.4rem] mt-[3.2rem] flex items-center justify-center text-[14px] w-[20px] h-[20px] text-white rounded-full">
                    <MdOutlineModeEditOutline />
                  </span>

                  <div
                    className={`flex flex-col justify-center items-center mr-[5rem] font-Dana`}
                  >
                    <span className="font-normal text-[25px]">علی علوی</span>
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
                    <p className="mr-4 text-[15px]">ویرایش آدرس و تلفن ثابت</p>
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
                              <button onClick={() => setShowModalMap(false)}>
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
                    <p className="mr-4 text-[15px]">شبکه های اجتماعی</p>
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
                              <button onClick={() => setShowModalSocial(false)}>
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
                                شماره واتساپ خود را بدون صفر وارد کنید
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
  );
}
