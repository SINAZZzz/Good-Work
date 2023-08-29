import React, { useState } from "react";
import CardRequest from "./CardRequest";
import {
  IoMdCheckmarkCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { AiOutlineSync } from "react-icons/ai";

export default function CardRequestItems() {
  const [contractExtension, setContractExtension] = useState(false);
  const [newContract, setNewContract] = useState(false);


  return (
    <div className="pr-10">
      <CardRequest
        icon={IoMdCheckmarkCircleOutline}
        title={"تسویه قرارداد"}
        des={
          "برای تسویه قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تسویه مدنظر دارید انتخاب کنید."
        }
      />
      <div
        className={`block mt-8
         bg-white w-[500px] h-[150px] rounded-[15px] shadow-Requests
         p-6`}
      >
        <div className="flex mb-4 items-center">
          <AiOutlineSync className="w-[35px] h-[35px]" />
          <p
            className="font-DanaBold text-[20px] cursor-pointer mr-2"
            onClick={() => setContractExtension(true)}
          >
            {"تمدید قرارداد"}
          </p>
        </div>
        <div>
          <p className="text-[17.5px] text-[#444444]">
            {" "}
            برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که
            برای تمدید مدنظر دارید انتخاب کنید.
          </p>
        </div>
      </div>
      {contractExtension ? (
        <>
          <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-[25px] shadow-lg relative flex flex-col px-[3rem] py-8 w-[860px] h-fit bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[25px] font-DanaBold">تمدید قرارداد</p>
                  <p className="text-[#444444] text-[18px] mt-4">
                    شما درخواست تمدید قرارداد زیر را دارید. برای درخواست خود
                    اطمینان دارید؟
                  </p>
                </div>
                {/* cards */}
                <div className="flex mt-2">
                  <div className="w-[700px] h-[186px] mt-7 rounded-[10px] font-Dana bg-white  border-solid border-[#D3D4D06] border-[1px]">
                    <div>
                      <div>
                        <h1 className="text-[25.38px] pt-6 font-DanaBold mr-[4rem]">
                          ۵۰٬۰۰۰٬۰۰۰ تومان
                        </h1>
                      </div>
                      <div className="flex justify-between px-8 py-8">
                        <div>
                          <div>
                            <p className="text-[17px] "> تاریخ: ۱۳ آذر ۱۴۰۰</p>
                          </div>
                          <div>
                            <p className="text-[17px] pt-4"> کد : ۱۴۰۰۰۴۲۹۳۲</p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="text-[17px]">۳ ماهه</p>
                          </div>
                          <div>
                            <p className="text-[18px] pt-4">
                              وضعیت:{" "}
                              <span
                                className="text-white bg-[#4CAF50]
               px-2 py-[4px] mr-1 rounded-[5px]"
                              >
                                سررسید
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="w-[700px] h-[186px] pr-4 outline-none pt-2 mr-8 resize-none  mt-7 border-[#D3D4D06] border-[1px] rounded-[10px]"
                    placeholder="اگر توضیحی دارید اینجا بنویسید..."
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={() => setContractExtension(false)}
                    className="w-full mt-10 h-[70px] text-white shadow-3xl text-[22px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
                  >
                    ارسال درخواست
                  </button>
                </div>
              </div>
              {/* Button save */}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* <CardRequest
        margin={"mt-8"}
        icon={AiOutlineSync}
        title={"تمدید قرارداد"}
        des={
          " برای تمدید قرارداد روی این گزینه کلیک کنید و در قسمت بعد قراردادی که برای تمدید مدنظر دارید انتخاب کنید."
        }
      /> */}

      <div
        className={`block mt-8
         bg-white w-[500px] h-[150px] rounded-[15px] shadow-Requests
         p-6`}
      >
        <div className="flex mb-4 items-center">
          <IoIosAddCircleOutline className="w-[35px] h-[35px]" />
          <p
            className="font-DanaBold text-[20px] cursor-pointer mr-2"
            onClick={() => setNewContract(true)}
          >
            قرارداد جدید
          </p>
        </div>
        <div>
          <p className="text-[17.5px] text-[#444444]">
            شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید.
          </p>
        </div>
      </div>
      {newContract ? (
        <>
          <div className=" items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-[25px] shadow-lg relative flex flex-col px-[3rem] py-4 w-[860px] h-fit bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[25px] font-DanaBold">قرار داد جدید</p>
                  <p className="text-[#444444] text-[18px] mt-4">
                    برای ثبت درخواست جدید کافی‌است تا موارد زیر را تکمیل
                    بفرمائید
                  </p>
                </div>
                {/* inputs */}
                <div className="flex mt-[2rem]">
                  <div>
                    <div className="flex flex-col">
                      <label for="price" className="text-[17.81px] pr-1">
                        مبلغ قرارداد{" "}
                      </label>
                      <input
                        id="price"
                        type="text"
                        className="w-[350px] outline-none pr-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      />
                      <span className="text-[12px] mt-1 pr-1 text-[#444444]">
                        مبلغ قرارداد باید از 50 میلیون تومان بالاتر باشد
                      </span>
                    </div>
                    <div className="flex flex-col mt-[3rem]">
                      <label
                        for="contract-period"
                        className="text-[17.81px] pr-1"
                      >
                        مدت قرارداد
                      </label>
                      <input
                        id="contract-period"
                        type="text"
                        className="w-[350px] outline-none pr-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      />
                      <span className="text-[12px] mt-1 pr-1 text-[#444444]">
                        تعداد ماه‌های قرارداد را وارد کنید
                      </span>
                    </div>
                    <div className="flex flex-col mt-[3rem]">
                      <label
                        for="Learning-profit"
                        className="text-[17.81px] pr-1"
                      >
                        تحصیل سود
                      </label>

                      <select
                        id="Learning-profit"
                        className="w-[350px] pl-[2rem] outline-none px-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      >
                        <option>انتخاب کنید</option>
                        <option>Saab</option>
                        <option>Mercedes</option>
                        <option>Audi</option>
                      </select>
                      <span className="text-[12px] mt-1 w-[350px] pr-1 text-[#444444]">
                        در صورتی که سررسید را انتخاب کنید، سود بیشتری به شما
                        تعلق می‌گیرد
                      </span>
                    </div>
                  </div>
                  <hr className="h-[500px] bg-[#C5C7D4] w-[1px] mx-7" />
                  <div>
                    <div className="flex flex-col">
                      <label for="Date" className="text-[17.81px] pr-1">
                        تاریخ
                      </label>
                      <input
                        id="Date"
                        type="text"
                        className="w-[350px] outline-none pr-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      />
                    </div>
                    <div className="flex flex-col mt-[4rem]">
                      <label for="Serial-code" className="text-[17.81px] pr-1">
                        سریال یا کد رهگیری
                      </label>
                      <input
                        id="Serial-code"
                        type="text"
                        className="w-[350px] outline-none pr-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      />
                    </div>
                    <div className="flex flex-col mt-[3rem]">
                      <label
                        for="Remittance-type"
                        className="text-[17.81px] pr-1"
                      >
                        نوع حواله
                      </label>
                      <select
                        id="Remittance-type"
                        className="w-[350px] pl-[2rem] outline-none px-2 mt-1 border-[#00000033] border-[1px] rounded-[5px] h-[44px]"
                      >
                        <option>انتخاب کنید</option>
                        <option>Saab</option>
                        <option>Mercedes</option>
                        <option>Audi</option>
                      </select>
                    </div>
                    <div className="flex flex-col mt-[4rem]">
                      <label for="Serial-code" className="text-[17.81px] pr-1">
                        سند حواله
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          for="dropzone-file"
                          className="flex flex-col rounded-[4px] items-center justify-center w-full h-[50px] border-2 border-gray-300 border-solid cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex items-center justify-center pt-5 pb-6">
                            <ImAttachment className="ml-2 w-[20px] h-[20px]" />
                            <p className="text-[20.52px] font-medium">پیوست</p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                      <span className="text-[12px] mt-1 w-[350px] pr-1 text-[#444444]">
                        تصویر رسید واریزی را در این قسمت بارگذاری کنید
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button save */}
                <div>
                  <button
                    onClick={() => setNewContract(false)}
                    className="w-full mt-10 h-[60px] text-white shadow-3xl text-[22px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
                  >
                    ارسال درخواست
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* <CardRequest
        margin={"mt-8"}
        icon={IoIosAddCircleOutline}
        title={"قرارداد جدید"}
        des={
          "شما می‌توانید از این طریق به صورت آنلاین درخواست قرارداد جدید بدهید."
        }
        openModal={setNewContract}
      /> */}
    </div>
  );
}
