import {
  AttachFileOutlined,
  NotificationsOutlined,
  ReplyOutlined,
} from "@mui/icons-material";
import { Slide } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Accordion, Button, Col, Form } from "react-bootstrap";

//components
import MessageAccordion from "components/pages/messages/MessageAccordion ";
import MessagesItem from "components/pages/messages/MessagesItem";

//contexts
import appContext from "contexts/appContext";

//style
import "style/pages/messages.scss";

//api
import Api from "api/newApi";

const Messages = ({ title }) => {
  const { setLocationTitle, setDrawerOption } = useContext(appContext);
  const [categoryId, setCategoryId] = useState(0);
  const [limit, setLimit] = useState(10);
  const [selectedId, setSelectedId] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [messages, setMessages] = useState([]);
  const [mounted, setMounted] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (mounted) {
      getMessages();
    }
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    setLocationTitle(title);
  });

  //components
  const DrawerContent = () => {
    const [msg, setMsg] = useState("");
    const [valid, setValid] = useState(false);

    const handleOnChange = (e) => {
      setMsg(e.target.value);
      setValid(false);
    };

    const sendMsg = () => {
      if (msg.length === 0) {
        setValid(true);
        return;
      }

      let data = JSON.stringify({
        replayTo: selectedId,
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
      <div className="messages__drawerContent">
        <div className="text p-2">{content}</div>
        <Form.Control
          className="w-100 p-2 my-3"
          as="textarea"
          rows={6}
          placeholder="چیزی بنویسید..."
          value={msg}
          onChange={(e) => handleOnChange(e)}
          isInvalid={valid}
        />

        <div className="d-flex justify-content-between ">
          <Button variant="default" className="border">
            <AttachFileOutlined fontSize="small" />
            پیوست
          </Button>
          <Button className="px-3 send_btn" onClick={sendMsg}>
            ارسال
          </Button>
        </div>
      </div>
    );
  };

  //handling
  const handleClick = (id) => {
    setCategoryId(id);
  };

  //api
  const getMessages = () => {
    var data = JSON.stringify({
      type: "public",
      status: "all",
      offset: 0,
      limit: limit,
    });

    Api.Post("/user/message", data)
      .then((res) => {
        setMessages(res.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="messages  p-md-3 p-0">
      <div className="messages__top d-md-flex d-none bg-white justify-content-around px-2 pt-3">
        <Col
          lg="2"
          className={`category  d-flex justify-content-center align-items-center text-center ${
            categoryId === 0 ? "category__selected" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <div className="">تمام پیام‌ها </div>
        </Col>
        <div className="vr  mb-2" />
        <Col
          lg="2"
          className={`category  d-flex justify-content-center align-items-center text-center ${
            categoryId === 1 ? "category__selected" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <div className="">پیام‌های جدید </div>
        </Col>
        <div className="vr  mb-2" />
        <Col
          lg="2"
          className={`category  d-flex justify-content-center align-items-center text-center ${
            categoryId === 2 ? "category__selected" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <div className="">اطلاعیه‌ها</div>
        </Col>
        <div className="vr  mb-2" />
        <Col
          lg="2"
          className={`category  d-flex justify-content-center align-items-center text-center ${
            categoryId === 3 ? "category__selected" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <div className="">تبلیغات </div>
        </Col>
      </div>

      <div className="messages__items d-md-block d-none  mx-2">
        {messages.map((message) => {
          return (
            <MessagesItem
              key={message.id}
              setSelectedId={setSelectedId}
              message={message}
              selectedId={selectedId}
            />
          );
        })}
      </div>

      <div className="mobileMessages d-md-none d-block">
        <div className=" mobileMessages__top bg-white w-100 p-3 ">
          <div className="d-flex ">
            <div className="icon p-2">
              <NotificationsOutlined />
            </div>
            <span className="align-self-center "> پیام‌ها</span>
          </div>

          <div className="d-flex mt-2">
            <div
              onClick={() => handleClick(0)}
              className={`category  py-2 px-3 ${
                categoryId === 0 ? "category__selected" : ""
              }`}
            >
              تمام پیام‌ها
            </div>
            <div
              onClick={() => handleClick(1)}
              className={`category  py-2 px-3 ${
                categoryId === 1 ? "category__selected" : ""
              }`}
            >
              پیام‌های جدید
            </div>
            <div
              onClick={() => handleClick(2)}
              className={`category  py-2 px-3 ${
                categoryId === 2 ? "category__selected" : ""
              }`}
            >
              اطلاعیه‌ها
            </div>
            <div
              onClick={() => handleClick(3)}
              className={`category  py-2 px-3 ${
                categoryId === 3 ? "category__selected" : ""
              }`}
            >
              تبلیغات
            </div>
          </div>
        </div>

        <Accordion className="d-md-none d-block p-3 " activeKey={selectedId}>
          {messages.map((message) => {
            return (
              <MessageAccordion
                key={message.id}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
                setContent={setContent}
                setAnswer={setAnswer}
                message={message}
              />
            );
          })}
        </Accordion>

        <Slide direction="right" in={answer} mountOnEnter unmountOnExit>
          <div
            onClick={() => {
              setDrawerOption((prev) => ({
                ...prev,
                show: true,
                content: <DrawerContent />,
              }));
            }}
            className="answer_btn text-white p-3"
          >
            ارسال پاسخ
            <ReplyOutlined />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Messages;
