import {
  CancelOutlined,
  CheckCircleOutlineOutlined,
  DateRangeOutlined,
} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";

//components
import ContractsItem from "components/pages/contracts/ContractsItem";

//contexts
import appContext from "contexts/appContext";

//style
import "style/pages/contracts.scss";

//api
import Api from "api/newApi";

const Contracts = ({ title }) => {
  const { setLocationTitle } = useContext(appContext);
  const [categoryId, setCategoryId] = useState("");
  const [mounted, setMounted] = useState(true);
  const [category, setCategory] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    setLocationTitle(title);
  });

  useEffect(() => {
    if (mounted) {
      getInvestment();
    }

    return () => {
      setMounted(false);
    };
  }, []);

  //for filter investments
  useEffect(() => {
    if (investments.length !== 0) {
      filterCategory();
    }
  }, [categoryId]);

  //handling
  const handleClick = (id) => {
    setCategoryId(id);
  };

  const filterCategory = () => {
    if (categoryId === "block") {
      setCategory(
        investments?.filter((item) => {
          return item.status === "close";
        })
      );
    } else
      setCategory(
        investments?.filter((item) => {
          return item.type === categoryId && item.status !== "close";
        })
      );
  };

  //api
  const getInvestment = () => {
    Api.Get("user/investment")
      .then((res) => {
        setInvestments(res.data.Data);
      })
      .then(() => {
        setCategoryId("deadline");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contracts p-3">
      <div className="contracts__top d-md-flex d-none bg-white justify-content-between px-5 pt-3">
        <Col
          lg="4"
          className={`category text-center ${
            categoryId === "deadline" ? "category__selected" : ""
          }`}
          onClick={() => handleClick("deadline")}
        >
          <div className="">
            <CheckCircleOutlineOutlined />
          </div>
          <div className="">قراردادهای سررسید </div>
        </Col>
        <Col
          lg="4"
          className={`category text-center ${
            categoryId === "monthly" ? "category__selected" : ""
          }`}
          onClick={() => handleClick("monthly")}
        >
          <div className="">
            <DateRangeOutlined />
          </div>
          <div className="">قراردادهای ماهانه </div>
        </Col>
        <Col
          lg="4"
          className={`category text-center ${
            categoryId === "block" ? "category__selected" : ""
          }`}
          onClick={() => handleClick("block")}
        >
          <div className="">
            <CancelOutlined />
          </div>
          <div className="">قراردادهای مسدود</div>
        </Col>
      </div>
      <div className="contracts__items">
        {category.length !== 0 ? (
          category.map((item) => {
            return <ContractsItem key={item.code} item={item} />;
          })
        ) : (
          <h1 className="text-center mt-5"> لیست خالی است!</h1>
        )}
      </div>
      <div className="contracts__bottom bg-white d-md-none d-flex  p-2">
        <Col onClick={() => handleClick("deadline")}>
          <Button
            className={` ${
              categoryId === "deadline" ? "category__selected" : ""
            }`}
          >
            سررسید
          </Button>
        </Col>
        <Col className="mx-2" onClick={() => handleClick("monthly")}>
          <Button
            className={` ${
              categoryId === "monthly" ? "category__selected" : ""
            }`}
          >
            ماهانه
          </Button>
        </Col>
        <Col onClick={() => handleClick("block")}>
          <Button
            className={` ${categoryId === "block" ? "category__selected" : ""}`}
          >
            مسدود
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default Contracts;
