import { useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { post } from "../../../../../../servises";
import { AiOutlineClose } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

export default function AnswerModal({ setShow, show, content, id }) {
  const [msg, setMsg] = useState("");
  const [valid, setValid] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");

  //handling
  const handleOnChange = (e) => {
    setMsg(e.target.value);
    setValid(false);
  };

  //api
  const sendMsg = () => {
    if (msg.length === 0) {
      setValid(true);
      return;
    }

    let data = JSON.stringify({
      replayTo: id,
      subject: null,
      content: msg,
    });
    post("user/message/send", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {show ? (
        <>
          <div
            className=" items-center flex overflow-x-hidden overflow-y-auto
             fixed inset-0 z-50 outline-none focus:outline-none"
            show={show}
            onHide={() => setShow(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="border-0 rounded-[25px] shadow-lg relative 
              flex flex-col px-[3rem] py-8 w-[600px] h-fit bg-white outline-none
               focus:outline-none"
              >
                {/*header*/}
                <div className="flex justify-between items-center text-[25px]">
                  <p className=" font-DanaBold">ارسال پاسخ</p>
                  <div onClick={() => setShow(false)}>
                    <AiOutlineClose />
                  </div>
                </div>
                {/* cards */}
                <div className="">
                  <div
                    className="w-full h-[4rem] mt-7 pr-4 py-4
                   rounded-[10px] font-Dana bg-slate-400
                     border-solid border-[#D3D4D06] border-[1px]"
                  >
                    <div>{content}</div>
                  </div>
                  <textarea
                    className="w-full h-[10rem] pr-4 outline-none pt-2
                     resize-none mt-2 border-[#D3D4D06] border-[1px] rounded-[10px]"
                    placeholder="چیزی بنویسید..."
                    value={msg}
                    onChange={(e) => handleOnChange(e)}
                    isInvalid={valid}
                  ></textarea>
                </div>
                <div className="flex mt-4 justify-between">
                  <div
                    className="flex items-center justify-center w-[8rem] rounded-md h-[3rem] cursor-pointer border"
                    nClick={sendMsg}
                  >
                    <ImAttachment className="ml-2 w-[20px] h-[20px]" />
                    <p className="text-[20.52px] font-medium">پیوست</p>
                  </div>
                  <button
                    onClick={() => setShow(false)}
                    className="w-[8rem] h-[3rem] text-white
                     shadow-3xl text-[18px] rounded-[3px] font-DanaBold bg-[#4F50FA]"
                  >
                    ارسال
                  </button>
                </div>
              </div>
              {/* Button save */}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
