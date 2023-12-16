import { ChevronLeftOutlined, Done, TagOutlined } from "@mui/icons-material";
import { memo, useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

//api
import Api from "api/newApi";

const Social = ({ handleStep, user }) => {
  const [socials, setSocials] = useState({
    telegram: "",
    instagram: "",
    whatsApp: "",
  });

  useEffect(() => {
    user?.socials.forEach((item) => {
      setSocials((prev) => ({ ...prev, [item.social]: item.social_id }));
    });
  }, [user]);

  //handling
  const handleOnChange = (e) => {
    setSocials((prev) => ({ ...prev, [e.name]: e.value }));
  };

  //api

  const changeSocial = () => {
    Object.keys(socials).forEach((item) => {
      let data = JSON.stringify({
        social: item,
        social_id: socials[item],
      });

      Api.Post("user/profile/social", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    user && (
      <div className="social p-4 h-100 d-flex flex-column justify-content-between align-items-end">
        <div className="social__top w-100 ">
          <div className="d-flex justify-content-between ">
            <div className=" d-flex">
              <div className="icon p-1">
                <TagOutlined />
              </div>
              <div className="title align-self-center">شبکه های اجتماعی</div>
            </div>
            <div className="" onClick={() => handleStep(0)}>
              <ChevronLeftOutlined fontSize="large" />
            </div>
          </div>

          <InputGroup className="telegram mb-3 mt-5">
            <InputGroup.Text className="text d-flex justify-content-center  ">
              Telegram
            </InputGroup.Text>
            <FormControl
              className="py-2"
              name="telegram"
              value={socials.telegram}
              onChange={(e) => handleOnChange(e.target)}
            />
          </InputGroup>
          <InputGroup className="instagram mb-2">
            <InputGroup.Text className="text d-flex justify-content-center  ">
              Instagram
            </InputGroup.Text>
            <FormControl
              className="py-2"
              name="instagram"
              value={socials.instagram}
              onChange={(e) => handleOnChange(e.target)}
            />
          </InputGroup>
          <div className="mb-3 text-end">آیدی خود را بدون @ بنویسید</div>
          <InputGroup className="whatsApp mb-2">
            <InputGroup.Text className="text d-flex justify-content-center  ">
              WhatsApp
            </InputGroup.Text>
            <FormControl
              className="py-2"
              name="whatsApp"
              value={socials.whatsApp}
              onChange={(e) => handleOnChange(e.target)}
            />
          </InputGroup>
          <div className="text-end">شماره واتساپ خود را بدون صفر وارد کنید</div>
        </div>

        <div className="save p-4" onClick={changeSocial}>
          <Done fontSize="large" />
        </div>
      </div>
    )
  );
};

export default memo(Social);
