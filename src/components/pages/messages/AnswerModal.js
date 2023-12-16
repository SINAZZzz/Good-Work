import { AttachFileOutlined, Close } from "@mui/icons-material";
import { memo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";

//style
import "style/components/pages/messages/answerModal.scss";

//api
import Api from "api/newApi";

const AnswerModal = ({ setShow, show, content, id }) => {
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
    Api.Post("user/message/send", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    !matches && (
      <Modal
        className="answerModal"
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <div className=" py-3 px-4">
          <div className="d-flex py-3 justify-content-between align-items-center">
            <div className="title">ارسال پاسخ</div>
            <div onClick={() => setShow(false)}>
              <Close fontSize="large" />
            </div>
          </div>

          <div className="info p-3">{content}</div>

          <Form.Control
            as="textarea"
            rows={3}
            className="p-2  w-100 h-100 mt-2"
            placeholder="چیزی بنویسید..."
            value={msg}
            onChange={(e) => handleOnChange(e)}
            isInvalid={valid}
          />

          <div className="d-flex  justify-content-between">
            <Button className="px-4   mt-3 border" variant="default">
              <AttachFileOutlined fontSize="small" />
              پیوست
            </Button>
            <Button className="px-4   mt-3 send_btn" onClick={sendMsg}>
              ارسال
            </Button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default memo(AnswerModal);
