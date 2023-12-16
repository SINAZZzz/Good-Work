import {
  AccessTime,
  AccountBalanceWalletOutlined,
  ChevronLeft,
  DateRange,
  DescriptionOutlined,
  LocalPrintshopOutlined,
} from "@mui/icons-material";
import { memo, useContext, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";

//components
import ContractsItemDetails from "./ContractsItemDetails";

//utils
import { commafy, dateToIR, enToFaDigit } from "utility/utils";

//api
import Api from "api/newApi";
import appContext from "contexts/appContext";

const ContractsItem = ({ item }) => {
  const { setDrawerOption } = useContext(appContext);

  const [details, setDetails] = useState(null);
  const [payOrBenefits, setPayOrBenefits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");

  //for mobile ratio
  const showReceivedProfit = (item) => {
    handleStep(<ContractsItemDetails item={item} />);
  };

  //handling for mobile ratio
  const handleStep = (goTo) => {
    setDrawerOption((prev) => ({
      ...prev,
      animation: !prev.animation,
      show: true,
    }));
    setTimeout(() => {
      setDrawerOption((prev) => ({
        ...prev,
        animation: !prev.animation,
        content: goTo,
      }));
    }, 300);
  };

  const PayCard = ({ item }) => {
    return (
      <div
        className="pays bg-white p-3 d-flex justify-content-between align-items-center mb-3 "
        onClick={() => showReceivedProfit(item)}
      >
        <div className="">
          <ChevronLeft fontSize="large" />
        </div>
        <div className="date">{dateToIR(item.date)}</div>
      </div>
    );
  };

  //handling
  const handleClick = (val) => {
    if (details === null) {
      getDetail(val);
    } else {
      //show payments if val is pay, else show benefits
      let which = val === "pay" ? details?.payments : details?.benefits;
      setPayOrBenefits(Array.isArray(which) ? which : []);

      //for mobile ratio
      let c = Array.isArray(which) ? (
        which.map((item) => {
          return <PayCard key={item.id} item={item} />;
        })
      ) : (
        <h3 className="text-center">!رکوردی یافت نشد</h3>
      );
      setTimeout(() => {
        if (matches) {
          handleStep(c);
        } else setShowModal(true);
      }, 350);
    }
  };

  //api
  const getDetail = (val) => {
    Api.Get(`user/investment/detail/${item.code}`)
      .then((res) => {
        setDetails(res.data.Data);
        let which =
          val === "pay" ? res.data.Data?.payments : res.data.Data?.benefits;
        setPayOrBenefits(Array.isArray(which) ? which : []);

        let c = Array.isArray(which) ? (
          which.map((item) => {
            return <PayCard key={item.id} item={item} />;
          })
        ) : (
          <h3 className="text-center">!رکوردی یافت نشد</h3>
        );

        setTimeout(() => {
          if (matches) {
            handleStep(c);
          } else setShowModal(true);
        }, 350);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contractsItem mt-3">
      <div className="contractsItem__item bg-white d-md-flex d-grid flex-wrap justify-content-md-between px-2 py-4">
        <Col
          lg="4"
          md="6"
          sm="12"
          className="align-self-center pr-2  text-md-center  "
        >
          <div className="money__amount px-4">
            <span>{enToFaDigit(commafy(item.amount))}</span>
            <span className="mx-1">تومان</span>
          </div>
          <div className="money__profit mt-2 px-4">
            {item.type === "monthly"
              ? "با سود تقریبی: هر ماه "
              : "با ثمن تقریبی در سررسید:   "}
            {enToFaDigit(commafy(item.benefit))} تومان
          </div>
        </Col>
        <Col
          lg="3"
          md="6"
          sm="12"
          className="align-self-center d-flex   justify-content-md-center  "
        >
          <div className="dates d-md-block d-flex">
            <div className="dates__calender">
              <DateRange />
              <span>{dateToIR(item.date)}</span>
            </div>
            <div className="dates__calender mt-2">
              <DateRange />
              <span>{dateToIR(item.enddate)}</span>
            </div>
            <div className="dates__duration mt-2">
              <AccessTime />
              <span className="mx-1">
                {" "}
                {enToFaDigit(item.period_amount)} ماهه{" "}
              </span>
            </div>
          </div>
        </Col>
        <Col
          lg="3"
          md="6"
          sm="12"
          className="align-self-center  text-md-center  "
        >
          <div className="code">
            <div className="code__number">
              <DescriptionOutlined />
              <span className="mx-1">کد : {enToFaDigit(item.code)}</span>
            </div>
            <div className="bgState ">
              <span> وضعیت: </span>
              <span
                className={`bgState__${
                  item.status === "open" ? "green" : "red"
                } py-1 px-2  mx-2`}
              >
                {" "}
                ماهانه{" "}
              </span>
            </div>
          </div>
        </Col>
        <Col
          lg="2"
          md="6"
          sm="12"
          className="align-self-center d-flex justify-content-md-center  "
        >
          <div className="profits">
            <div
              className="received__profit py-2"
              onClick={() => handleClick("pay")}
            >
              <AccountBalanceWalletOutlined />
              <span className="mx-1"> پرداختی ها</span>
            </div>
            <div
              className="received__profit py-2"
              onClick={() => handleClick("benefit")}
            >
              <AccountBalanceWalletOutlined />
              <span className="mx-1">سود های واریزی</span>
            </div>
          </div>
        </Col>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        className="contractsItem__modal"
      >
        <Modal.Body>
          {payOrBenefits.length !== 0 ? (
            payOrBenefits.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex flex-lg-row flex-column justify-content-between mb-5"
                >
                  <Col lg="6" md="12" className="d-flex justify-content-around">
                    <div>
                      <div className="title">تاریخ</div>
                      <div style={{ direction: "rtl" }}>
                        {dateToIR(item.date)}
                      </div>
                    </div>
                    <div>
                      <div className="title">مقدار</div>
                      <div style={{ direction: "rtl" }}>
                        {enToFaDigit(commafy(item.amount))} تومان
                      </div>
                    </div>
                    <div>
                      <div className="title">شماره حساب مقصد</div>
                      <div>{enToFaDigit(item.dnumber)}</div>
                    </div>
                    <div>
                      <div className="title">شماره حساب مبدا</div>
                      <div>{enToFaDigit(item.snumber)}</div>
                    </div>
                  </Col>
                  <Col lg="6" md="12" className="d-flex justify-content-around">
                    <div>
                      <div className="title">نوع پرداخت</div>
                      <div>دسته‌ای </div>
                    </div>
                    <div>
                      <div className="title">سریال</div>
                      <div>{enToFaDigit(item.serial)}</div>
                    </div>
                  </Col>
                </div>
              );
            })
          ) : (
            <h3 className="text-center">!رکوردی یافت نشد</h3>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default memo(ContractsItem);
