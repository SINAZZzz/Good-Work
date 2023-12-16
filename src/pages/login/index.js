//design component
import { Backdrop, CircularProgress, Drawer, TextField } from "@mui/material";
import { Button, Form, FormControl } from "react-bootstrap";
import { createRef, useEffect, useRef, useState } from "react";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useMediaQuery from "@mui/material/useMediaQuery";

//style
import "style/pages/login.scss";

//utils
import { checkIsNumber, isCorrectPhoneNumber } from "utility/utils";

//api
import ApiClass from "api/newApi";
const useStyles = makeStyles({
  paper: {
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
  },
});

const BackLogo = process.env.REACT_APP_BACK_LOGO;
const Logo = process.env.REACT_APP_LOGO;

const Login = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const classes = useStyles();
  const navigate = useNavigate();
  //backdrop
  const [open, setOpen] = useState(false);

  //for resend code
  const [time, setTime] = useState(-1);
  const [resend, setResend] = useState(false);
  const [valid, setValid] = useState({
    phone: false,
    codeVerify: false,
  });
  const [phone, setPhone] = useState("9137427291");
  const [activeInput, setActiveInput] = useState(0);
  const [groupInputs, setGroupInputs] = useState({
    in1: "",
    in2: "",
    in3: "",
    in4: "",
  });
  const [animation, setAnimation] = useState(true);
  const animationTime = 300;
  //for handle steps
  const [step, setStep] = useState(1);
  //for handle inputs
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const allInputs = [input1, input2, input3, input4];
  const codeValues = [
    groupInputs.in1,
    groupInputs.in2,
    groupInputs.in3,
    groupInputs.in4,
  ];

  useEffect(() => {
    if (step == 2) {
      input1.current.focus();
    }
  }, [step]);
  useEffect(() => {
    if (Cookies.get("imsToken")) {
      navigate("/home");
    }
  }, []);

  // for resend code
  useEffect(() => {
    let interval = null;
    if (time === 0) setResend(true);

    if (time !== 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (
      groupInputs.in1 !== "" &&
      groupInputs.in2 !== "" &&
      groupInputs.in3 !== "" &&
      groupInputs.in4 !== ""
    ) {
      verify();
    }
  }, [groupInputs]);

  //api
  const verify = () => {
    setOpen(true);
    let codeSet = "";
    codeValues.forEach((item) => {
      codeSet += item;
    });
    var data = JSON.stringify({
      mobile: phone,
      code: codeSet,
    });
    ApiClass.Post("user/auth/verify", data)
      .then((res) => {
        if (res.status === 200) {
          Cookies.set("imsToken", JSON.stringify(res.data.Data.token), {
            expires: 30,
          });

          setTimeout(() => {
            navigate("/home");
          }, 600);
        }
      })
      .catch((err) => {
        toast.error("کد وارد شده اشتباه است!");
      })
      .finally(() => {
        setTimeout(() => {
          setOpen(false);
        }, 500);
      });
  };

  const login = () => {
    if (!isCorrectPhoneNumber(phone)) {
      setValid((prev) => ({ ...prev, phone: true }));
      return;
    }
    setValid((prev) => ({ ...prev, phone: false }));

    var data = JSON.stringify({
      mobile: phone,
    });
    ApiClass.Post("user/auth/login", data)
      .then((res) => {
        setTime(60);
        // handleStep(2);
        setStep(2);
      })
      .catch((err) => {
        toast.error("شماره تلفن همراه اشتباه است!");
      });
  };

  //components
  const step1 = () => {
    return (
      <div className="step1">
        <div className="title ">
          برای ورود شماره تلفن همراه خود را وارد کنید
        </div>
        <div className="code-input  d-flex flex-column pt-4 pb-md-4 pb-0  ">
          <TextField
            className="hide-arrow"
            id="step1"
            autoFocus
            variant="standard"
            label=" شماره تلفن همراه "
            value={phone}
            type="number"
            onChange={(e) => {
              if (checkIsNumber(e.target.value) || e.target.value === "") {
                setPhone(e.target.value);
              }
            }}
            error={valid.phone}
          />
          <span className="info mt-2">
            کد فعالسازی به این شماره ارسال می‌شود
          </span>
        </div>
        <hr className=" pb-3 mt-3 d-block d-md-none  " />
        <Button
          onClick={() => login()}
          className="login__button mb-md-0 mb-3 mx-md-0 mx-3 py-2 text-nowrap"
        >
          دریافت کد فعالسازی
        </Button>
      </div>
    );
  };
  const step2 = () => {
    return (
      <div className="step2">
        <div className="title">کد چهار رقمی ارسال شده را وارد کنید</div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="inputs hide-arrow d-flex justify-content-md-between justify-content-evenly mt-4 ">
            {allInputs.map((input, i) => {
              return (
                <FormControl
                  key={i}
                  ref={input}
                  type="number"
                  value={groupInputs[`in${i + 1}`]}
                  name={`in${i + 1}`}
                  onChange={(e) => {
                    if (checkIsNumber(e.target.value) || e.target.value === "")
                      handleChange(e.target);
                  }}
                  onKeyDown={(e) => handleKeydown(e)}
                  className={`${
                    groupInputs["in" + (i + 1)].length === 1 ? "isFilled" : " "
                  } mx-1`}
                />
              );
            })}
          </div>
          <div className="d-flex flex-md-column flex-row mb-3 mx-3 border-top pt-4">
            <Button onClick={() => verify()} className="login__button   py-2">
              ثبت
            </Button>

            <div className="d-flex justify-content-evenly mt-md-2 mt-0  w-100">
              <div
                className="change__number d-flex align-items-center "
                onClick={() => handleStep(1)}
              >
                اصلاح شماره موبایل
              </div>
              <div className="hoz__hr" />
              <div
                className={`${
                  resend ? "resend" : ""
                } timer d-flex align-items-center`}
                onClick={() => {
                  setTime(60);
                  setResend(false);
                }}
              >
                ({time}) ارسال مجدد کد
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return step1();
      case 2:
        return step2();

      default:
        return step1();
    }
  };

  //handling
  const handleChange = (e) => {
    if (e.value.length === 1) {
      setGroupInputs((prev) => {
        return { ...prev, [e.name]: e.value };
      });

      let chose = activeInput < 3 ? activeInput + 1 : 3;
      allInputs[chose].current.focus();
      setActiveInput(activeInput + 1);
    } else if (e.value.length === 0) {
      setGroupInputs((prev) => {
        return { ...prev, [e.name]: e.value };
      });
    }
  };
  const handleKeydown = (e) => {
    if (e.key === "Backspace") {
      if (activeInput > 0) {
        allInputs[activeInput - 1].current.focus();
        setActiveInput(activeInput - 1);
      }
    }
  };
  const handleStep = (goTo) => {
    setAnimation((prev) => !prev);
    setTimeout(() => {
      setStep(goTo);
      setAnimation((prev) => !prev);
    }, animationTime);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="login d-flex bg-black">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/*   */}
      <div className="login__right-image flex justify-center items-center">
        <img
          src={Logo}
          className="z-10 absolute xl:w-[20%] lg:w-[25%] sm:w-[80%]"
          alt=""
        />
        <img
          src={BackLogo}
          className="h-[100vh] z-0 w-full object-cover"
          alt=""
        />
      </div>

      <div className="login__form  d-md-flex d-none align-items-md-center justify-content-md-center justify-content-end  flex-column ">
        <Fade in={animation} timeout={animationTime}>
          <div className="">{renderStep()}</div>
        </Fade>
      </div>
      <Drawer
        className="login__drawer   "
        anchor={"bottom"}
        open={matches}
        onClose={null}
        classes={{
          root: classes.root,
          paper: classes.paper,
        }}
        hideBackdrop
      >
        <Fade in={animation} timeout={animationTime}>
          <div className="">{renderStep()}</div>
        </Fade>
      </Drawer>
    </div>
  );
};

export default Login;
