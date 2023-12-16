import React, { useEffect, useRef, useState } from "react";
// api
import Api from "../../../../api/newApi";
import toast, { Toaster } from "react-hot-toast";
import { ImAttachment } from "react-icons/im";
import addW from "../../../../assets/images/pages/requests/addW.svg";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { useNavigate } from "react-router-dom";
// Resizer
import Resizer from "react-image-file-resizer";

export default function Add() {
  const inputRef = useRef(null);
  // state hidden
  const [hidden, setHidden] = useState(false);
  // for add form
  const [priceAdd, setPriceAdd] = useState();
  const [periodAdd, setPeriodAdd] = useState();
  const [investment_typeAdd, setInvestment_typeAdd] = useState("سررسید");
  const [dateAdd, setDateAdd] = useState();
  const [serialAdd, setSerialAdd] = useState();
  const [payment_typeAdd, setPayment_typeAdd] = useState("بین بانکی");
  const [imageAdd, setImageAdd] = useState();

  const navigate = useNavigate();
  // set payment_type
  useEffect(() => {
    switch (payment_typeAdd) {
      case "بین بانکی": {
        setPayment_typeAdd("satna");
        break;
      }
      case "درون بانکی": {
        setPayment_typeAdd("local");
        break;
      }
      case "کارت به کارت": {
        setPayment_typeAdd("ctc");
        break;
      }
      case "نقد": {
        setPayment_typeAdd("cash");
        break;
      }
      case "دسته ای": {
        setPayment_typeAdd("group");
        break;
      }
      case "چک": {
        setPayment_typeAdd("cheque");
        break;
      }
    }
  }, [payment_typeAdd]);
  // set investment_type
  useEffect(() => {
    switch (investment_typeAdd) {
      case "سررسید": {
        setInvestment_typeAdd("deadline");
        break;
      }
      case "ماهانه": {
        setInvestment_typeAdd("monthly");
        break;
      }
    }
  }, [investment_typeAdd]);

  function change(unix, formatted) {
    setDateAdd(formatted);
  }

  function DatePickerInput(props) {
    return <input className="input-add w-full" {...props} />;
  }

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (imageAdd === undefined) {
      toast.error("فایل باید فرمت عکس باید باشد");
      setImageAdd("");
    } else {
      var fileInput = false;
      if (e.target.files[0]) {
        fileInput = true;
      }
      if (fileInput) {
        try {
          Resizer.imageFileResizer(
            e.target.files[0],
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
              setImageAdd(uri);
            },
            "base64",
            200,
            200
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const Next = () => {
    if (priceAdd !== undefined && periodAdd !== undefined) {
      setHidden(true);
    } else {
      toast.error("مقدار خالیه");
    }
  };
  const Back = () => {
    setHidden(false);
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
    Api.Post("user/investment/request", data)
      .then((res) => {
        if (res.data.Code === 200) {
          toast.success(res.data.Message);
          setPriceAdd("");
          setPeriodAdd("سررسید");
          setDateAdd("");
          setSerialAdd("");
          setPayment_typeAdd("بین بانکی");
          setImageAdd("");
          setTimeout(() => {
            navigate("/requests");
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response.data.Code === 400) {
          toast.error(err.response.data.Message);
        }
      });
  };

  return (
    <div
      className="h-[100vh] w-full flex flex-col bg-white font-YekanBakhF 
      justify-between py-6"
      dir="rtl"
    >
      <Toaster position="bottom-center" reverseOrder={false} />

      <div
        className="lg:items-center w-full
       flex overflow-x-hidden overflow-y-hidden lg:fixed inset-0 
       z-50 outline-none focus:outline-none"
      >
        {" "}
        <div className="relative flex w-full">
          {/*content*/}
          <div
            className="border-0 
            relative flex  h-full
            flex-col lg:px-12 w-full
             bg-white outline-none focus:outline-none"
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
                <h1 className="lg:text-[24px] font-[700] sm:text-[18px] lg:mr-[34%] font-DanaBold">
                  قرارداد جدید
                </h1>
                <p className="lg:text-[18px] font-[400] sm:text-[13px] lg:mt-3 lg:mr-[6%]">
                  تا ثبت قرارداد جدید 2 مرحله باقی‌مانده است.
                </p>
              </div>
            </div>
            {/* inputs */}
            <div className={`flex mt-[1rem] px-3 py-6 w-full`}>
              <div className={`${hidden === true ? "hidden" : ""} w-full`}>
                <div className="flex flex-col w-full">
                  <label for="price" className="text-[14px] font-[400] pr-1">
                    مبلغ قرارداد{" "}
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="input-add w-full"
                    onChange={(e) => setPriceAdd(e.target.value)}
                  />
                  <span className="text-[10px] mt-1 pr-1 font-[300] text-[#444444]">
                    مبلغ قرارداد باید از 50 میلیون تومان بالاتر باشد
                  </span>
                </div>
                <div className="flex flex-col mt-[3rem]">
                  <label
                    for="contract-period"
                    className="text-[14px] font-[400] pr-1"
                  >
                    مدت قرارداد
                  </label>
                  <input
                    id="contract-period"
                    type="text"
                    className="input-add w-full"
                    onChange={(e) => setPeriodAdd(e.target.value)}
                  />
                  <span className="text-[10px] mt-1 pr-1 font-[300] text-[#444444]">
                    تعداد ماه‌های قرارداد را وارد کنید
                  </span>
                </div>
                <div className="flex flex-col mt-[3rem]">
                  <label
                    for="Learning-profit"
                    className="text-[14px] font-[400] pr-1"
                  >
                    تحصیل سود
                  </label>

                  <select
                    id="Learning-profit"
                    className="input-add w-full"
                    onChange={(e) => setInvestment_typeAdd(e.target.value)}
                  >
                    <option>سررسید</option>
                    <option>ماهانه</option>
                  </select>
                  <span className="text-[10px] font-[300] mt-1 w-[350px] pr-1 text-[#444444]">
                    در صورتی که سررسید را انتخاب کنید، سود بیشتری به شما تعلق
                    می‌گیرد
                  </span>
                </div>
              </div>

              <div className={`${hidden === false ? "hidden" : ""} w-full`}>
                <div>
                  <div className="flex flex-col">
                    <label for="Date" className="text-[14px] font-[400] pr-1">
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
                    <label
                      for="Serial-code"
                      className="text-[14px] font-[400] pr-1"
                    >
                      سریال یا کد رهگیری
                    </label>
                    <input
                      id="Serial-code"
                      type="text"
                      className="input-add w-full"
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
                      className="input-add w-full"
                      onChange={(e) => setPayment_typeAdd(e.target.value)}
                    >
                      <option>بین بانکی</option>
                      <option>درون بانکی</option>
                      <option>کارت به کارت</option>
                      <option>نقد</option>
                      <option>دسته ای</option>
                      <option>چک</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-[2rem]">
                    <label for="Serial-code" className="text-[17.81px] pr-1">
                      سند حواله
                    </label>
                    <input
                      className="hidden"
                      ref={inputRef}
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={handleFileChange}
                    />
                    <button
                      onClick={handleClick}
                      className="flex rounded-[4px] items-center justify-center w-full h-[50px] border-2 border-gray-300 border-solid cursor-pointer bg-white hover:bg-gray-100"
                    >
                      <ImAttachment className="ml-2 w-[20px] h-[20px]" />
                      <p className="text-[20.52px] font-medium">پیوست</p>
                    </button>
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
             text-white shadow-3xl text-[16px] font-[800]
             rounded-[3px] font-DanaBold bg-[#4F50FA]
             flex justify-center items-center ${
               hidden === true ? "hidden" : ""
             }`}
        >
          بعدی
        </button>

        {/* Back */}
        <button
          onClick={Back}
          className={`w-[115px] h-[44px]
             text-black border text-[16px] font-[800] 
             rounded-[3px] font-DanaBold 
             flex justify-center items-center
             ${hidden === false ? "hidden" : ""}`}
        >
          برگشت
        </button>
        {/* Button save */}
        <button
          onClick={add}
          className={`w-[197px] h-[44px]
             text-white shadow-3xl text-[16px] font-[800] 
             rounded-[3px] mx-2 font-DanaBold bg-[#4F50FA]
             flex justify-center items-center
             ${hidden === false ? "hidden" : ""}`}
        >
          ارسال درخواست
        </button>
      </div>
    </div>
  );
}
