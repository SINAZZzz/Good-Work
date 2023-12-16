import { Close, CreateOutlined, Map, TagOutlined } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//api
import Api from "api/newApi";
import { memo, useContext } from "react";
import appContext from "contexts/appContext";

const MainSection = ({ handleStep, user }) => {
  const { setUser } = useContext(appContext);
  const navigate = useNavigate();
  //api
  const logout = () => {
    Api.Post("user/logout")
      .then((res) => {
        if (res.status === 200) {
          Cookies.remove("imsToken");
          setUser(null);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    user && (
      <div className="mainSection d-md-none d-block h-100  ">
        <div className="d-flex flex-column h-100 ">
          <div className="user__photo pt-3 d-flex flex-column align-items-center ">
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
            <div className="text-center mt-2">
              <div className="name">
                {user.userdetail.fname} {user.userdetail.lname}
              </div>
              <div className="post">{user.userdetail.role}</div>
            </div>
          </div>

          <div className="header ">
            <div className="pt-5 d-flex">
              <div className="title">تنظیمات</div>
              <div className="hoz__hr"></div>
            </div>

            <div className="d-flex px-3 mt-3" onClick={() => handleStep(1)}>
              <div className="icon p-1">
                <Map />
              </div>
              <div className="align-self-center">ویرایش آدرس و تلفن ثابت</div>
            </div>
            <div className="d-flex px-3 mt-3" onClick={() => handleStep(2)}>
              <div className="icon p-1">
                <TagOutlined />
              </div>
              <div className="align-self-center">شبکه های اجتماعی</div>
            </div>
            <div className="d-flex px-3 mt-3" onClick={() => logout()}>
              <div className="icon_close p-1">
                <Close />
              </div>
              <div className="align-self-center">خروج</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(MainSection);
