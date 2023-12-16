import { useContext, useEffect, useState } from "react";
import { Col, Carousel } from "react-bootstrap";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Addchart,
  DateRange,
  Feed,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";

//contexts
import appContext from "contexts/appContext";

//utility
import { commafy, enToFaDigit } from "utility/utils";

//style
import "style/pages/home.scss";

//api
import Api from "api/newApi";

//imgs
import advertise1 from "../../assets/images/pages/home/advertise1.jpg";
import advertise2 from "../../assets/images/pages/home/advertise2.jpg";
import advertise3 from "../../assets/images/pages/home/advertise3.jpg";
import advertise4 from "../../assets/images/pages/home/advertise4.jpg";

const Home = ({ title }) => {
  const { setLocationTitle, user } = useContext(appContext);
  const [mounted, setMounted] = useState(true);
  const [stat, setStat] = useState(null);
  const matches = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    setLocationTitle(title);
  });

  useEffect(() => {
    if (mounted) {
      getStat();
    }

    return () => {
      setMounted(false);
    };
  }, []);

  //api
  const getStat = () => {
    Api.Post("user/profile/stat")
      .then((res) => {
        setStat(res.data.Data.stat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    stat && (
      <div className=" w-100 home  p-3 ">
        <Col lg="12" className="sec1 d-flex bg-white p-3 align-items-center">
          <div className="icon d-flex ">
            <SentimentSatisfiedAlt fontSize="large" className="m-auto" />
          </div>
          <div>
            سلام {user?.userdetail.fname} عزیز، به پنل کاربری کار خوب خوش آمدید!
          </div>
        </Col>
        <div className="sec2 d-flex flex-column flex-md-row mt-4">
          <div className="right d-flex bg-white p-3 align-items-center w-100">
            <div className="icon d-flex ">
              <Feed fontSize="large" className="m-auto" />
            </div>
            <div className="d-flex flex-column">
              <span className="moreInfo">تعداد قراردادهای شما</span>
              <span>
                {enToFaDigit(stat.count_investment)} عدد جمعا به ارزش{" "}
                {enToFaDigit(commafy(stat.sum_investment))} تومان
              </span>
            </div>
          </div>
          <div className="mx-1" />
          <div className="left d-flex bg-white p-3 align-items-center w-100">
            <div className="icon d-flex ">
              <SentimentSatisfiedAlt fontSize="large" className="m-auto" />
            </div>
            <div>
              دوست عزیز، {enToFaDigit(commafy(stat.days))} روز با کارخوب
              بوده‌اید!
            </div>
          </div>
        </div>
        <div className="sec3 d-flex flex-column flex-md-row mt-2">
          <div className="right d-flex bg-white p-3 align-items-center w-100">
            <div className="icon d-flex ">
              <Addchart fontSize="large" className="m-auto" />
            </div>
            <div className="d-flex flex-column">
              <span className="moreInfo">تعداد قراردادهای ماهانه</span>
              <span>
                {enToFaDigit(stat.count_monthly_investment)} عدد جمعا به ارزش{" "}
                {enToFaDigit(commafy(stat.sum_monthly_investment))} تومان
              </span>
            </div>
          </div>
          <div className="mx-1" />
          <div className="left d-flex bg-white p-3 align-items-center w-100">
            <div className="icon d-flex ">
              <DateRange fontSize="large" className="m-auto" />
            </div>
            <div className="d-flex flex-column">
              <span className="moreInfo">تعداد قراردادهای سررسید</span>
              <span>
                {enToFaDigit(stat.count_deadline_investment)} عدد جمعا به ارزش{" "}
                {enToFaDigit(commafy(stat.sum_deadline_investment))} تومان
              </span>
            </div>
          </div>
        </div>
        {/* Carousel */}
        {/* {matches ? (
          <Carousel
            className="mt-3 home-carousel"
            controls={false}
            indicators={false}
            interval={1000}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={advertise1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={advertise2}
                alt="Second slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={advertise3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={advertise4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        ) : (
          <div className="sec4 d-flex  mt-2">
            <div className="w-100 h-100">
              <img className="w-100 h-100" src={advertise1} alt="" />
            </div>
            <div className="mx-1"></div>
            <div className="w-100 h-100">
              <img className="w-100 h-100" src={advertise2} alt="" />
            </div>
            <div className="mx-1"></div>
            <div className="w-100 h-100">
              <img className="w-100 h-100" src={advertise3} alt="" />
            </div>
            <div className="mx-1"></div>
            <div className="w-100 h-100">
              <img className="w-100 h-100" src={advertise4} alt="" />
            </div>
          </div>
        )} */}
      </div>
    )
  );
};

export default Home;
