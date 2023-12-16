import { Fade } from "@mui/material";
//contexts
import appContext from "contexts/appContext";
import { memo, useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import "style/components/pages/profile/profileModal.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const ProfileModal = () => {
  const { showProfileModal, setShowProfileModal, user, setUser } =
    useContext(appContext);
  const [step, setStep] = useState(0);

  const [animation, setAnimation] = useState(true);
  const animationTime = 300;
  const steps = [Step1, Step2, Step3];
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
    <Modal
      className="profileModal"
      show={showProfileModal}
      onHide={() => setShowProfileModal(false)}
      centered
    >
      <Fade in={animation} timeout={animationTime}>
        <div>
          <ComponentTag {...childProps} />
        </div>
      </Fade>
    </Modal>
  );
};

export default memo(ProfileModal);
