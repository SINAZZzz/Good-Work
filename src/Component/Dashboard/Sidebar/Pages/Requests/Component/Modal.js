import React, { useContext, useState, useEffect } from "react";
import { RequestsContext } from "../../../../../../Context/RequestsContext";
import { post } from "../../../../../../servises";
import toast, { Toaster } from "react-hot-toast";
import { DatePicker } from "react-advance-jalaali-datepicker";

export default function ModaL() {
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
  const [imageAdd, setImageAdd] = useState("");
  function change(unix, formatted) {
    setDateAdd(formatted);
    // console.log(unix); // returns timestamp of the selected value, for example.
    // console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
  }
  function DatePickerInput(props) {
    return <input className="input-add" {...props} />;
  }
  //api
  const close = () => {
    var data = JSON.stringify({
      request_type: "close",
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
          setShowModal(false);
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
          setShowModal(false);
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
            <div
              className="lg:items-center sm:items-end flex
             overflow-x-hidden overflow-y-hidden fixed sm:bottom-0
              outline-none focus:outline-none z-10 lg:inset-x-[9%] lg:inset-y-[10%]"
            >
              <div className="lg:relative lg:w-auto sm:w-full lg:my-6 lg:mx-auto">
                {/*content*/}
                <div
                  className="border-0 lg:rounded-[25px] sm:rounded-tl-[20px] sm:rounded-tr-[20px] shadow-lg lg:relative
                 flex sm:flex-col lg:px-[3rem] sm:px-4 lg:py-8 lg:w-[860px] h-fit bg-white
                  outline-none focus:outline-none"
                >
                  {/*header*/}
                  <div className="pr-8">
                    <div className="lg:flex items-center justify-center sm:hidden">
                      <p className="text-[25px] font-DanaBold">تسویه قرارداد</p>
                    </div>
                    <p
                      className="text-[#444444] text-[16px] sm:font-DanaBold mt-4 sm:flex
                    lg:flex lg:justify-center"
                    >
                      شما درخواست {title} قرارداد زیر را دارید. برای درخواست خود
                      اطمینان دارید؟
                    </p>
                  </div>
                  {/* cards */}
                  <div className="flex lg:flex-row sm:flex-col mt-2">
                    <div className="lg:w-[700px] lg:h-[186px] lg:mt-7 rounded-[10px] font-Dana bg-white  border-solid border-[#D3D4D06] border-[1px]">
                      <div>
                        <div>
                          <h1 className="lg:text-[25.38px] sm:text-[20px] pt-4 font-DanaBold flex justify-center">
                            {price} تومان
                          </h1>
                        </div>
                        <div className="flex justify-between sm:px-6 sm:py-4 lg:px-8 lg:py-8">
                          <div>
                            <div>
                              <p className="lg:text-[17px] sm:text-[14px]">
                                تاریخ: {date}
                              </p>
                            </div>
                            <div>
                              <p className="lg:text-[17px] sm:text-[14px] pt-4">
                                کد: {code}
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div>
                              <p className="lg:text-[17px] sm:text-[14px]">
                                {month} ماهه
                              </p>
                            </div>
                            <div>
                              <p className="lg:text-[18px] sm:text-[14px] pt-4">
                                وضعیت:{" "}
                                <span
                                  className="text-white bg-[#4CAF50]
               lg:px-2 lg:py-[4px] sm:px-1 sm:py-0.5 mr-1 rounded-[5px]"
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
                      className="lg:w-[700px] lg:h-[186px] sm:w-full sm:h-[130px] pr-4 outline-none pt-2 lg:mr-8 resize-none sm:mt-4 lg:mt-7 border-[#D3D4D06] border-[1px] rounded-[10px]"
                      placeholder="اگر توضیحی دارید اینجا بنویسید..."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      onClick={close}
                      className="w-full lg:mt-10 sm:my-4 lg:h-[70px] sm:h-[44px] text-white shadow-3xl text-[22px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
                    >
                      ارسال درخواست
                    </button>
                  </div>
                </div>
                {/* Button save */}
              </div>
            </div>
            <div
              className="opacity-25 inset-0 z-0 fixed bg-black"
              onClick={() => setShowModal(false)}
            ></div>
          </>
        ) : null
      ) : showModal ? (
        <>
          <div
            className="lg:items-center sm:items-end flex
            overflow-x-hidden overflow-y-hidden fixed sm:bottom-0
             outline-none focus:outline-none z-10 lg:inset-x-[9%] lg:inset-y-[10%]"
          >
            <div className="lg:relative lg:w-auto sm:w-full lg:my-6 lg:mx-auto">
              {/*content*/}
              <div
                className="border-0 lg:rounded-[25px] sm:rounded-tl-[20px] sm:rounded-tr-[20px] shadow-lg lg:relative
                 flex sm:flex-col lg:px-[3rem] sm:px-4 lg:py-8 lg:w-[860px] h-fit bg-white
                  outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="pr-8">
                  <div className="lg:flex items-center justify-center sm:hidden">
                    <p className="text-[25px] font-DanaBold">تمدید قرارداد</p>
                  </div>
                  <p
                    className="text-[#444444] text-[16px] sm:font-DanaBold mt-4 sm:flex
                    lg:flex lg:justify-center"
                  >
                    شما درخواست {title} قرارداد زیر را دارید. برای درخواست خود
                    اطمینان دارید؟
                  </p>
                </div>
                {/* cards */}
                <div className="flex lg:flex-row sm:flex-col mt-2">
                  <div className="lg:w-[700px] lg:h-[186px] lg:mt-7 rounded-[10px] font-Dana bg-white  border-solid border-[#D3D4D06] border-[1px]">
                    <div>
                      <div>
                        <h1 className="lg:text-[25.38px] sm:text-[20px] pt-4 font-DanaBold flex justify-center">
                          {price} تومان
                        </h1>
                      </div>
                      <div className="flex justify-between sm:px-6 sm:py-4 lg:px-8 lg:py-8">
                        <div>
                          <div>
                            <p className="lg:text-[17px] sm:text-[14px]">
                              تاریخ: {date}
                            </p>
                          </div>
                          <div>
                            <p className="lg:text-[17px] sm:text-[14px] pt-4">
                              کد: {code}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <p className="lg:text-[17px] sm:text-[14px]">
                              {month} ماهه
                            </p>
                          </div>
                          <div>
                            <p className="lg:text-[18px] sm:text-[14px] pt-4">
                              وضعیت:{" "}
                              <span
                                className="text-white bg-[#4CAF50]
               lg:px-2 lg:py-[4px] sm:px-1 sm:py-0.5 mr-1 rounded-[5px]"
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
                    className="lg:w-[700px] lg:h-[186px] sm:w-full sm:h-[130px] pr-4 outline-none pt-2 lg:mr-8 resize-none sm:mt-4 lg:mt-7 border-[#D3D4D06] border-[1px] rounded-[10px]"
                    placeholder="اگر توضیحی دارید اینجا بنویسید..."
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    onClick={extend}
                    className="w-full lg:mt-10 sm:my-4 lg:h-[70px] sm:h-[44px] text-white shadow-3xl text-[22px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
                  >
                    ارسال درخواست
                  </button>
                </div>
              </div>
              {/* Button save */}
            </div>
          </div>
          <div
            className="opacity-25 inset-0 z-0 fixed bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      {/* قرارداد جدید*/}
      {addModal ? (
        <>
          <div
            className="items-center
           flex overflow-x-hidden overflow-y-hidden fixed w-fit lg:inset-x-[22%] lg:inset-y-[4%]
           z-10 outline-none focus:outline-none"
          >
            {" "}
            <div className="relative w-auto my-6 mx-auto">
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
                        onChange={(e) => setInvestment_typeAdd(e.target.value)}
                      >
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
                      <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        id="datePicker"
                        preSelected=""
                        onChange={change}
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
                        onChange={(e) => setPayment_typeAdd(e.target.value)}
                      >
                        <option>satna</option>
                        <option>satna</option>
                        <option>satna</option>
                      </select>
                    </div>
                    <div className="flex flex-col mt-[2rem]">
                      <label for="Serial-code" className="text-[17.81px] pr-1">
                        سریال یا کد رهگیری
                      </label>
                      <input
                        id="Serial-code"
                        type="text"
                        className="input-add"
                        onChange={(e) => setImageAdd(e.target.value)}
                      />
                    </div>
                    {/* <div className="flex flex-col mt-[2rem]">
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
                    </div> */}
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
          <div
            className="opacity-25 fixed inset-0 z-0 bg-black"
            onClick={() => setAddModal(false)}
          ></div>
        </>
      ) : null}
    </div>
  );
}
