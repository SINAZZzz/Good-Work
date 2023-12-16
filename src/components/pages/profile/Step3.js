import { ChevronLeftOutlined } from "@mui/icons-material";

import { memo, useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

//api
import Api from "api/newApi";

const Step3 = ({ handleStep, user }) => {
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
    <div className="step3 py-3 px-4">
      <div className="d-flex py-3 justify-content-between align-items-center">
        <div className="closeIcon" onClick={() => handleStep(0)}>
          <ChevronLeftOutlined fontSize="large" />
        </div>
        <div className="title">شبکه های اجتماعی</div>
      </div>
      <InputGroup className="telegram mb-3 mt-4">
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
      <Button className="px-4 py-2  mt-3" onClick={changeSocial}>
        ذخیره اطلاعات
      </Button>
    </div>
  );
};

export default memo(Step3);
