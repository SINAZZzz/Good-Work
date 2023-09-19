import takhfif from "../../../../../../assets/Img/Pages/Messages/takhfif.svg";
import { post } from "../../../../../../servises";
import { useState } from "react";
import { BsReplyAllFill } from "react-icons/bs";
import AnswerModal from "./AnswerModal";

export default function CardBox({ item }) {
  const { id, content } = item;
  const [sendRead, setSendRead] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  //handling
  const handleClick = () => {
    setSelectedId(id);
    if (!sendRead) {
      readThisMsg();
    }
  };
  //api
  const readThisMsg = () => {
    let data = JSON.stringify({
      messageId: id,
    });
    post("user/message/read", data)
      .then((res) => {
        setSendRead(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //other
  const sliceText = (text) => {
    return text.slice(0, 80);
  };
  return (
    <div>
      <div
        className={`w-full flex h-[79px] ${selectedId === id ? "show" : " "}
          mt-6 px-3
         bg-white items-center rounded-[10px] shadow-contracts-shadow`}
        onClick={() => handleClick()}
      >
        {/* CardDiscount */}
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] text-white bg-[#F44336] flex justify-center items-center rounded-full">
              <img src={takhfif} alt="" className="w-[20px]" />
            </div>
            <div className="w-[12px] h-[12px] bg-[#4F50FA] mr-3 rounded-full"></div>
            <div
              className={`mr-3 text-[20px] ${selectedId !== id ? "less" : " "}`}
            >
              {selectedId === id ? (
                <>
                  {content}
                  <div
                    className={`flex justify-center text-center text-[#4F50FA]`}
                    onClick={() => setShow(true)}
                  >
                    ارسال پاسخ
                    <BsReplyAllFill />
                  </div>
                </>
              ) : (
                <div className="flex ">
                  {sliceText(content)}
                  <div className="text-[#4F50FA]">بیشتر....</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center text-[22px]">
            <div>
              <p className="border-x-[1px] flex items-center px-6">
                ۱۵ آذر ۱۴۰۰
              </p>
            </div>
            <div>
              <p className="px-8">۲۲:۵۰</p>
            </div>
          </div>
        </div>
      </div>
      <AnswerModal show={show} setShow={setShow} content={content} id={id} />
    </div>
  );
}
