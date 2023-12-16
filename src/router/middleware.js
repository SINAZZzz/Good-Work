import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//contexts
import appContext from "contexts/appContext";

//api
import Api from "api/newApi";

const Middleware = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) {
      setLoading(true);
      getUserProfile();
    }
  }, [user, location.pathname]);

  //api
  const getUserProfile = () => {
    let token;
    if (!Cookies.get("imsToken")) {
      navigate("/");
      return null;
    } else {
      token = JSON.parse(Cookies.get("imsToken"));
    }
    Api.Get("user/profile", {
      authorization: token,
    })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.Data);
        }
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <span>در حال بارگذاری...</span>;
  }
  return children;
};

export default Middleware;
