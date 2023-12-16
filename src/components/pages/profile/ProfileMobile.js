import { Fade } from "@mui/material";

import { memo, useContext, useState } from "react";

//contexts
import appContext from "contexts/appContext";

//components
import EditAddressAndPhone from "./EditAddressAndPhone";
import MainSection from "./MainSection";
import Social from "./Social";

const ProfileMobile = () => {
  const [animation, setAnimation] = useState(true);
  const { user } = useContext(appContext);
  const [step, setStep] = useState(0);
  const animationTime = 300;

  const steps = [MainSection, EditAddressAndPhone, Social];
  const ComponentTag = steps[step];

  const handleStep = (goTo) => {
    setAnimation((prev) => !prev);
    setTimeout(() => {
      setStep(goTo);
      setAnimation((prev) => !prev);
    }, animationTime);
  };

  const childProps = {
    handleStep,
    user,
  };

  return (
    <div className="profile__mobile d-md-none d-block h-100 ">
      <Fade in={animation} timeout={animationTime}>
        <div className="h-100">
          <ComponentTag {...childProps} />
        </div>
      </Fade>
    </div>
  );
};

export default memo(ProfileMobile);
