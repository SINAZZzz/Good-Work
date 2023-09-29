import React, { useState } from "react";
import { post } from "../../../../../../../servises";
import toast, { Toaster } from "react-hot-toast";
import { ImAttachment } from "react-icons/im";
import addW from "../../../../../../../assets/Img/Pages/Requests/addW.svg";
import { DatePicker } from "react-advance-jalaali-datepicker";

export default function Add() {
  const [hidden, setHidden] = useState(false);
  // for add form
  const [priceAdd, setPriceAdd] = useState();
  const [periodAdd, setPeriodAdd] = useState();
  const [investment_typeAdd, setInvestment_typeAdd] = useState();
  const [dateAdd, setDateAdd] = useState();
  const [serialAdd, setSerialAdd] = useState();
  const [payment_typeAdd, setPayment_typeAdd] = useState();
  const [imageAdd, setImageAdd] = useState();

  function change(unix, formatted) {
    setDateAdd(unix);
    // console.log(unix); // returns timestamp of the selected value, for example.
    // console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
  }
  function DatePickerInput(props) {
    return <input className="input-add" {...props} />;
  }

  const Next = () => {
    if (priceAdd !== undefined && periodAdd !== undefined) {
      setHidden(true);
    } else {
      toast.error("مقدار خالیه");
    }
  };
  // //api
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
    <div className="h-full flex flex-col justify-between py-6">
      <Toaster position="bottom-center" reverseOrder={false} />

      <div
        className="lg:items-center
           flex overflow-x-hidden overflow-y-hidden lg:fixed inset-0 
           z-50 outline-none focus:outline-none"
      >
        {" "}
        <div className="relative lg:w-auto flex lg:my-6 lg:mx-auto lg:max-w-3xl">
          {/*content*/}
          <div
            className="border-0 
                relative flex
                flex-col lg:px-12 lg:w-[860px]
                 lg:h-fit bg-white outline-none focus:outline-none"
          >
            {/*header*/}
            <div className={`flex px-3`}>
              <div
                className="sm:bg-[#4F50FA] sm:w-[44px] sm:h-[44px]
               rounded-[5px] flex justify-center items-center"
              >
                <img
                  src={addW}
                  alt=""
                  className="lg:hidden sm:flex sm:w-[30px] sm:h-[30px]"
                />
              </div>
              <div className={`flex flex-col mr-4`}>
                <h1 className="lg:text-[24px] sm:text-[18px] lg:mr-[34%] font-DanaBold">
                  قرارداد جدید
                </h1>
                <p className="lg:text-[18px] sm:text-[13px] lg:mt-3 lg:mr-[6%]">
                  تا ثبت قرارداد جدید 2 مرحله باقی‌مانده است.
                </p>
              </div>
            </div>
            {/* inputs */}
            <div className={`flex mt-[1rem] px-3 py-6 `}>
              <div className={`${hidden === true ? "hidden" : ""} `}>
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
                  <label for="contract-period" className="text-[17.81px] pr-1">
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
                  <label for="Learning-profit" className="text-[17.81px] pr-1">
                    تحصیل سود
                  </label>

                  <select
                    id="Learning-profit"
                    className="input-add"
                    onClick={(e) => setInvestment_typeAdd(e.target.value)}
                  >
                    <option>deadline</option>
                    <option>deadline</option>
                    <option>deadline</option>
                  </select>
                  <span className="text-[12px] mt-1 w-[350px] pr-1 text-[#444444]">
                    در صورتی که سررسید را انتخاب کنید، سود بیشتری به شما تعلق
                    می‌گیرد
                  </span>
                </div>
              </div>

              <div className={`${hidden === false ? "hidden" : ""}`}>
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
                      preSelected="1396/05/15"
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
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full flex items-end justify-center`}>
        {/* Button Next */}
        <button
          onClick={Next}
          className={`w-[320px] h-[44px]
                 text-white shadow-3xl text-[16px] 
                 rounded-[3px] font-DanaBold bg-[#4F50FA]
                 flex justify-center items-center ${
                   hidden === true ? "hidden" : ""
                 }`}
        >
          مرحله بعدی
        </button>
        {/* Button save */}
        <button
          onClick={add}
          className={`w-[320px] h-[44px]
                 text-white shadow-3xl text-[16px] 
                 rounded-[3px] font-DanaBold bg-[#4F50FA]
                 flex justify-center items-center
                 ${hidden === false ? "hidden" : ""}`}
        >
          ارسال درخواست
        </button>
      </div>
    </div>
  );
}
