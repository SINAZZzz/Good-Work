import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { memo, useState } from "react";
import { Accordion } from "react-bootstrap";

//utils
import { dateToIR, enToFaDigit } from "utility/utils";

//api
import Api from "api/newApi";

const MessageAccordion = ({
  selectedId,
  setSelectedId,
  message,
  setAnswer,
  setContent,
}) => {
  const { id, content, time } = message;
  const [sendRead, setSendRead] = useState(false);

  //handling
  const handleClick = () => {
    setSelectedId((prev) => (prev === id ? 0 : id));
    if (selectedId === id) {
      setAnswer((prev) => !prev);
    } else setAnswer(true);
    setContent(content);
    if (!sendRead) {
      readThisMsg();
    }
  };

  //api
  const readThisMsg = () => {
    let data = JSON.stringify({
      messageId: id,
    });
    Api.Post("user/message/read", data)
      .then((res) => {
        setSendRead(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="messageAccordion mb-3 border bg-white p-3">
      <div
        className="d-flex  justify-content-between "
        onClick={() => handleClick()}
      >
        <div className="d-flex align-items-center">
          {true && <div className="seen" />}
          <div className=""> {dateToIR(time)}</div>
          <div className="vr  mb-2 mx-2" />
          <div className="">
            {`${enToFaDigit(new Date(time * 1000).getHours())}:${enToFaDigit(
              new Date(time * 1000).getMinutes()
            )}`}
          </div>
        </div>
        <div className="icon_Btn">
          {id === selectedId ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
      </div>
      <Accordion.Collapse className=" " eventKey={id}>
        <div className=" content p-3 text-justify mt-3">{content}</div>
      </Accordion.Collapse>
    </div>
  );
};

export default memo(MessageAccordion);
