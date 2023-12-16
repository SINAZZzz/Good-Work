import {
  NotificationsNone,
  PercentOutlined,
  ReplyAllOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { memo, useState } from "react";
import { Col } from "react-bootstrap";

//components
import AnswerModal from "./AnswerModal";

//utils
import { dateToIR, enToFaDigit } from "utility/utils";

//api
import Api from "api/newApi";

const MessagesItem = ({ message, selectedId, setSelectedId }) => {
  const { id, content, time } = message;
  const [show, setShow] = useState(false);
  const [sendRead, setSendRead] = useState(false);

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
    Api.Post("user/message/read", data)
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
    <>
      <div
        className={`${
          selectedId === id ? "show" : " "
        }   message bg-white  px-3  py-2 mt-3`}
        onClick={() => handleClick()}
      >
        <div className="message-content">
          <div className="d-flex  justify-content-between ">
            <Col lg="9" className=" d-flex ">
              <Badge
                color={true ? "default" : "info"}
                badgeContent=" "
                overlap="circular"
                variant="dot"
              >
                {"red" === "red" ? (
                  <div className="icon discount">
                    <PercentOutlined />
                  </div>
                ) : (
                  <div className="icon ">
                    <NotificationsNone />
                  </div>
                )}
              </Badge>

              <div
                className={`${
                  selectedId !== id ? "less" : " "
                } content align-self-center text-justify w-100`}
              >
                {selectedId === id ? (
                  <>
                    {content}
                    <div
                      className="reply d-flex justify-content-end  w-100 bg-white px-3 py-1"
                      onClick={() => setShow(true)}
                    >
                      ارسال پاسخ
                      <ReplyAllOutlined />
                    </div>
                  </>
                ) : (
                  <div className="d-flex ">
                    {sliceText(content)}
                    <div className="moreBtn">بیشتر....</div>
                  </div>
                )}
              </div>
            </Col>
            <div className="vr  mb-2" />
            <Col lg="1" className="date mt-3 text-center">
              {dateToIR(time)}
            </Col>
            <div className="vr  mb-2" />
            <Col lg="1" className="time  mt-3 text-center">
              {`${enToFaDigit(new Date(time * 1000).getHours())}:${enToFaDigit(
                new Date(time * 1000).getMinutes()
              )}`}
            </Col>
          </div>
        </div>
      </div>

      <AnswerModal show={show} setShow={setShow} content={content} id={id} />
    </>
  );
};

export default memo(MessagesItem);
