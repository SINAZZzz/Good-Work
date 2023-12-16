import {
  Close,
  CreateOutlined,
  StickyNote2Outlined,
  TagOutlined,
} from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
//contexts
import appContext from "contexts/appContext";
import { memo, useContext } from "react";
const Step1 = ({ handleStep, user }) => {
  const { setShowProfileModal } = useContext(appContext);

  return (
    <div className="step1 p-4">
      <div className="d-flex py-3 justify-content-between align-items-center">
        <div className="closeIcon" onClick={() => setShowProfileModal(false)}>
          <Close fontSize="large" />
        </div>
        <div className="title">تنظیمات</div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="mx-2 align-self-center">
          <div className="name">
            {" "}
            {user.userdetail.fname} {user.userdetail.lname}
          </div>
          <div className="post text-end">{user.userdetail.role}</div>
        </div>
        <div>
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={<CreateOutlined fontSize="small" />}
            color="primary"
            variant="standard"
            overlap="circular"
          >
            <Avatar sx={{ width: 90, height: 90 }} />
          </Badge>
        </div>
      </div>
      <div
        className="change d-flex justify-content-end mt-4 p-3"
        onClick={() => handleStep(1)}
      >
        <div className="align-self-center mx-2">ویرایش آدرس و تلفن ثابت</div>
        <div className="icon p-2">
          <StickyNote2Outlined />
        </div>
      </div>
      <div
        className="social d-flex justify-content-end mt-4 p-3"
        onClick={() => handleStep(2)}
      >
        <div className="align-self-center mx-2">شبکه های اجتماعی</div>
        <div className="icon p-2">
          <TagOutlined />
        </div>
      </div>
    </div>
  );
};

export default memo(Step1);
