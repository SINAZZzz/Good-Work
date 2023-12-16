import React, { useContext, useRef, useEffect, useState } from "react";
import { RequestsContext } from "../../../contexts/RequestsContext";
import toast, { Toaster } from "react-hot-toast";
import { ImAttachment } from "react-icons/im";
import { DatePicker } from "react-advance-jalaali-datepicker";
// api
import Api from "api/newApi";
//Resizer
import Resizer from "react-image-file-resizer";

export default function ModaL() {
  const inputRef = useRef(null);
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
  const [investment_typeAdd, setInvestment_typeAdd] = useState("سررسید");
  const [dateAdd, setDateAdd] = useState();
  const [serialAdd, setSerialAdd] = useState();
  const [payment_typeAdd, setPayment_typeAdd] = useState("بین بانکی");
  const [imageAdd, setImageAdd] = useState();

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

  // change date
  function change(unix, formatted) {
    setDateAdd(formatted);
  }

  // Date Picker Input
  function DatePickerInput(props) {
    return <input className="input-add" {...props} />;
  }

  //api close
  const close = () => {
    var data = JSON.stringify({
      request_type: "close",
      investment_code: code.toString(),
      user_description: description,
    });
    Api.Post("user/investment/request", data)
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

  //api extend
  const extend = () => {
    var data = JSON.stringify({
      request_type: "extend",
      investment_code: code.toString(),
      user_description: description,
    });
    Api.Post("user/investment/request", data)
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
  // esc close
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
        setAddModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  //api add
  const add = () => {
    var data = {
      request_type: "add",
      amount: priceAdd,
      period_amount: periodAdd,
      investment_type: investment_typeAdd,

      date: dateAdd,
      serial: serialAdd,
      payment_type: payment_typeAdd,
      image: imageAdd,
    };
    Api.Post("user/investment/request", data)
      .then((res) => {
        if (res.data.Code === 200) {
          toast.success(res.data.Message);
          console.log(imageAdd);
          setAddModal(false);
          setPriceAdd("");
          setPeriodAdd("سررسید");
          setDateAdd("");
          setSerialAdd("");
          setPayment_typeAdd("بین بانکی");
          setImageAdd("");
        }
      })
      .catch((err) => {
        if (err.response.data.Code === 400) {
          console.log(imageAdd);

          toast.error(err.response.data.Message);
        }
      });
  };

  return (
    <div className="font-YekanBakhF">
      <Toaster position="bottom-center" reverseOrder={false} />

      {title === "تسویه" ? (
        showModal ? (
          <>
            <div className="style-Modal">
              <div className="lg:relative lg:w-auto sm:w-full lg:my-6 lg:mx-auto">
                {/*content*/}
                <div className="style-content-Modal">
                  {/*header*/}
                  <div className="pr-8">
                    <div className="lg:flex items-center justify-center sm:hidden">
                      <p className="text-[25px]  font-[700]">تسویه قرارداد</p>
                    </div>
                    <p
                      className="text-[#444444] text-[16px] font-[600] mt-4 sm:flex
                    lg:flex lg:justify-center"
                    >
                      شما درخواست {title} قرارداد زیر را دارید. برای درخواست خود
                      اطمینان دارید؟
                    </p>
                  </div>
                  {/* cards */}
                  <div className="flex lg:flex-row sm:flex-col mt-2">
                    <div className="style-card-Modal font-Dana">
                      <div>
                        <div>
                          <h1 className="text-[20px] font-[700] pt-4 font-DanaBold flex justify-center">
                            {price} تومان
                          </h1>
                        </div>
                        <div className="flex justify-between sm:px-6 sm:py-4 lg:px-8 lg:py-8">
                          <div>
                            <div>
                              <p className="text-[16px] font-[400]">
                                تاریخ: {date}
                              </p>
                            </div>
                            <div>
                              <p className="text-[16px] font-[400] pt-4">
                                کد: {code}
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div>
                              <p className="text-[16px] font-[400]">
                                {month} ماهه
                              </p>
                            </div>
                            <div>
                              <p className="text-[16px] font-[400] pt-4">
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
                      className="style-textarea-Modal"
                      placeholder="اگر توضیحی دارید اینجا بنویسید..."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      onClick={close}
                      className="style-button-Modal font-DanaBold"
                    >
                      ارسال درخواست
                    </button>
                  </div>
                </div>
                {/* Button save */}
              </div>
            </div>
            <div
              className=" inset-0 z-0 fixed bg-black opacity-5"
              onClick={() => setShowModal(false)}
            ></div>
          </>
        ) : null
      ) : showModal ? (
        <>
          <div className="style-Modal">
            <div className="lg:relative lg:w-auto sm:w-full lg:my-6 lg:mx-auto">
              {/*content*/}
              <div className="style-content-Modal">
                {/*header*/}
                <div className="pr-8">
                  <div className="lg:flex items-center justify-center sm:hidden">
                    <p className="text-[25px] font-[700]">تمدید قرارداد</p>
                  </div>
                  <p
                    className="text-[#444444] text-[16px] sm:font-DanaBold mt-4 sm:flex
                    lg:flex lg:justify-center font-[600]"
                  >
                    شما درخواست {title} قرارداد زیر را دارید. برای درخواست خود
                    اطمینان دارید؟
                  </p>
                </div>
                {/* cards */}
                <div className="flex lg:flex-row sm:flex-col mt-2">
                  <div className="style-card-Modal font-Dana">
                    <div>
                      <div>
                        <h1 className="text-[20px] font-[700] pt-4 font-DanaBold flex justify-center">
                          {price} تومان
                        </h1>
                      </div>
                      <div className="flex justify-between sm:px-6 sm:py-4 lg:px-8 lg:py-8">
                        <div>
                          <div>
                            <p className="text-[16px] font-[400]">
                              تاریخ: {date}
                            </p>
                          </div>
                          <div>
                            <p className="text-[16px] font-[400] pt-4">
                              کد: {code}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <p className="text-[16px] font-[400]">
                              {month} ماهه
                            </p>
                          </div>
                          <div>
                            <p className="text-[16px] font-[400] pt-4">
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
                    className="style-textarea-Modal"
                    placeholder="اگر توضیحی دارید اینجا بنویسید..."
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    onClick={extend}
                    className="style-button-Modal font-DanaBold"
                  >
                    ارسال درخواست
                  </button>
                </div>
              </div>
              {/* Button save */}
            </div>
          </div>
          <div
            className=" inset-0 z-0 fixed bg-black opacity-5"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      {/* قرارداد جدید*/}
      {addModal ? (
        <>
          <div className="style-addModal">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="style-Addcontent-Modal">
                {/*header*/}
                <div className="w-full flex flex-col">
                  <div className="flex items-center justify-center">
                    <p className="text-[25px] font-[700]">قرار داد جدید</p>
                  </div>
                  <p className="text-[#444444] text-[18px] font-[600] mt-4 flex justify-center">
                    شما درخواست تمدید قرارداد زیر را دارید. برای درخواست خود
                    اطمینان دارید؟
                  </p>
                </div>
                {/* inputs */}
                <div className="flex mt-[1rem]">
                  <div>
                    <div className="flex flex-col">
                      <label
                        for="price"
                        className="text-[17.81px] font-[400] pr-1"
                      >
                        مبلغ قرارداد{" "}
                      </label>
                      <input
                        id="price"
                        type="text"
                        className="input-add"
                        onChange={(e) => setPriceAdd(e.target.value)}
                      />
                      <span className="text-[12px]  font-[300] mt-1 pr-1 text-[#444444]">
                        مبلغ قرارداد باید از 50 میلیون تومان بالاتر باشد
                      </span>
                    </div>
                    <div className="flex flex-col mt-[3rem]">
                      <label
                        for="contract-period"
                        className="text-[17.81px]  font-[400] pr-1"
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
                        <option>سررسید</option>
                        <option>ماهانه</option>
                      </select>
                      <span className="text-[12px] mt-1 w-[350px] pr-1 text-[#444444]">
                        در صورتی که سررسید را انتخاب کنید، سود بیشتری به شما
                        تعلق می‌گیرد
                      </span>
                    </div>
                  </div>
                  <hr className="h-[400px] bg-[#38393d] w-[1px] mx-7" />
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
                {/* Button save */}
                <div>
                  <button
                    onClick={add}
                    className="font-DanaBold style-Addbutton-Modal"
                  >
                    ارسال درخواست
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" fixed inset-0 z-0 bg-black opacity-5"
            onClick={() => setAddModal(false)}
          ></div>
        </>
      ) : null}
    </div>
  );
}
