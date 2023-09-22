import React, { useContext, useState, useEffect } from "react";
import { RequestsContext } from "../../../../../../Context/RequestsContext";
import { AiOutlineClose } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { post } from "../../../../../../servises";
import toast, { Toaster } from "react-hot-toast";

export default function Modal() {
  const {
    setShowModal,
    showModal,
    title,
    addModal,
    setAddModal,
    code,
    date,
    month,
    price,
    stats,
  } = useContext(RequestsContext);
  const [description, setDescription] = useState();
  // for add form
  const [priceAdd, setPriceAdd] = useState();
  const [periodAdd, setPeriodAdd] = useState();
  const [investment_typeAdd, setInvestment_typeAdd] = useState();
  const [dateAdd, setDateAdd] = useState();
  const [serialAdd, setSerialAdd] = useState();
  const [payment_typeAdd, setPayment_typeAdd] = useState();
  const [imageAdd, setImageAdd] = useState();
  //api
  const close = () => {
    var data = JSON.stringify({
      request_type: "close",
      investment_code: code.toString(),
      user_description: description,
    });
    console.log(code);
    post("user/investment/request", data)
      .then((res) => {
        if (res.data.Code === 200) {
          toast.success(res.data.Message);
          setShowModal(false);
        }
      })
      .catch((err) => {
        if (err.response.data.Code === 400) {
          console.log(err);
          toast.error(err.response.data.Message);
        }
      });
  };
  //api
  const extend = () => {
    var data = JSON.stringify({
      request_type: "extend",
      investment_code: code.toString(),
      user_description: description,
    });
    post("user/investment/request", data)
      .then((res) => {
        if (res.data.Code === 200) {
          toast.success(res.data.Message);
          setShowModal(false);
        }
      })
      .catch((err) => {
        if (err.response.data.Code === 400) {
          console.log(err);
          toast.error(err.response.data.Message);
        }
      });
  };

  //api
  const add = () => {
    var data = JSON.stringify({
      request_type: "add",
      amount: priceAdd,
      period_amount: periodAdd,
      investment_type: investment_typeAdd,

      date: dateAdd,
      serial: serialAdd,
      payment_type: payment_typeAdd,
      image: imageAdd,
    });
    post("user/investment/request", data)
      .then((res) => {
        if (res.data.Code === 200) {
          toast.success(res.data.Message);
          setAddModal(false);
        }
      })
      .catch((err) => {
        if (err.response.data.Code === 400) {
          console.log(err);
          toast.error(err.response.data.Message);
        }
      });
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />

      {title == "تسویه" ? (
        showModal ? (
          <>
            <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-[25px] shadow-lg relative flex flex-col px-[3rem] py-8 w-[860px] h-fit bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="w-full flex flex-col">
                    <div className="flex items-center justify-center">
                      <p className="text-[25px] font-DanaBold">تسویه قرارداد</p>
                    </div>
                    <div
                      className="flex justify-end -mt-8 "
                      onClick={() => setShowModal(false)}
                    >
                      <AiOutlineClose className="text-[25px] font-DanaBold cursor-pointer" />
                    </div>
                    <p className="text-[#444444] text-[18px] mt-4 flex justify-center">
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
                            {price} تومان
                          </h1>
                        </div>
                        <div className="flex justify-between px-8 py-8">
                          <div>
                            <div>
                              <p className="text-[17px] "> تاریخ: {date}</p>
                            </div>
                            <div>
                              <p className="text-[17px] pt-4"> کد : {code}</p>
                            </div>
                          </div>
                          <div>
                            <div>
                              <p className="text-[17px]">{month} ماهه</p>
                            </div>
                            <div>
                              <p className="text-[18px] pt-4">
                                وضعیت:{" "}
                                <span
                                  className="text-white bg-[#4CAF50]
                     px-2 py-[4px] mr-1 rounded-[5px]"
                                >
                                  {stats}
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
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      onClick={close}
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
        ) : null
      ) : showModal ? (
        <>
          <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-[25px] shadow-lg relative flex flex-col px-[3rem] py-8 w-[860px] h-fit bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full flex flex-col">
                  <div className="flex items-center justify-center">
                    <p className="text-[25px] font-DanaBold">تمدید قرارداد</p>
                  </div>
                  <div
                    className="flex justify-end -mt-8 "
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineClose className="text-[25px] font-DanaBold cursor-pointer" />
                  </div>
                  <p className="text-[#444444] text-[18px] mt-4 flex justify-center">
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
                          {price} تومان
                        </h1>
                      </div>
                      <div className="flex justify-between px-8 py-8">
                        <div>
                          <div>
                            <p className="text-[17px] "> تاریخ: {date}</p>
                          </div>
                          <div>
                            <p className="text-[17px] pt-4"> کد : {code}</p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="text-[17px]">{month} ماهه</p>
                          </div>
                          <div>
                            <p className="text-[18px] pt-4">
                              وضعیت:{" "}
                              <span
                                className="text-white bg-[#4CAF50]
             px-2 py-[4px] mr-1 rounded-[5px]"
                              >
                                {stats}
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
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={extend}
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
      {/* قرارداد جدید*/}
      {addModal ? (
        <>
          <div
            className="items-center
           flex overflow-x-hidden overflow-y-hidden fixed inset-0 
           z-50 outline-none focus:outline-none"
          >
            {" "}
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="border-0
               rounded-[25px] shadow-lg relative flex flex-col px-12 py-3 w-[860px] h-fit bg-white outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="w-full flex flex-col">
                  <div className="flex items-center justify-center">
                    <p className="text-[25px] font-DanaBold">قرار داد جدید</p>
                  </div>
                  <div
                    className="flex justify-end -mt-8 "
                    onClick={() => setAddModal(false)}
                  >
                    <AiOutlineClose className="text-[25px] font-DanaBold cursor-pointer" />
                  </div>
                  <p className="text-[#444444] text-[18px] mt-4 flex justify-center">
                    شما درخواست تمدید قرارداد زیر را دارید. برای درخواست خود
                    اطمینان دارید؟
                  </p>
                </div>
                {/* inputs */}
                <div className="flex mt-[1rem]">
                  <div>
                    <div className="flex flex-col">
                      <label for="price" className="text-[17.81px] pr-1">
                        مبلغ قرارداد{" "}
                      </label>
                      <input
                        id="price"
                        type="text"
                        className="input-add"
                        onChange={(e) => setPriceAdd(e.target.value)}
                        value={priceAdd}
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
                        className="input-add"
                        onChange={(e) => setPeriodAdd(e.target.value)}
                        value={periodAdd}
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
                        className="input-add"
                        onClick={(e) => setInvestment_typeAdd(e.target.value)}
                      >
                        <option>انتخاب کنید</option>
                        <option>deadline</option>
                        <option>deadline</option>
                        <option>deadline</option>
                      </select>
                      <span className="text-[12px] mt-1 w-[350px] pr-1 text-[#444444]">
                        در صورتی که سررسید را انتخاب کنید، سود بیشتری به شما
                        تعلق می‌گیرد
                      </span>
                    </div>
                  </div>
                  <hr className="h-[400px] bg-[#C5C7D4] w-[1px] mx-7" />
                  <div>
                    <div className="flex flex-col">
                      <label for="Date" className="text-[17.81px] pr-1">
                        تاریخ
                      </label>
                      <input
                        id="Date"
                        type="date"
                        className="input-add"
                        onChange={(e) => setDateAdd(e.target.value)}
                        value={dateAdd}
                      />
                    </div>
                    <div className="flex flex-col mt-[2rem]">
                      <label for="Serial-code" className="text-[17.81px] pr-1">
                        سریال یا کد رهگیری
                      </label>
                      <input
                        id="Serial-code"
                        type="text"
                        className="input-add"
                        onChange={(e) => setSerialAdd(e.target.value)}
                        value={serialAdd}
                      />
                    </div>
                    <div className="flex flex-col mt-[2rem]">
                      <label
                        for="Remittance-type"
                        className="text-[17.81px] pr-1"
                      >
                        نوع حواله
                      </label>
                      <select
                        id="Remittance-type"
                        className="input-add"
                        onClick={(e) => setPayment_typeAdd(e.target.value)}
                      >
                        <option>انتخاب کنید</option>
                        <option>satna</option>
                        <option>satna</option>
                        <option>satna</option>
                      </select>
                    </div>
                    <div className="flex flex-col mt-[2rem]">
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
                            onClick={(e) => setImageAdd(e.target.value)}
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
                    onClick={add}
                    className="w-full mt-6 h-[60px] text-white shadow-3xl text-[22px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
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
    </div>
  );
}
