import { Drawer, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import appContext from "contexts/appContext";
import React, { useContext } from "react";

//style
import "style/components/bottomDrawer.scss";

const useStyles = makeStyles({
  paper: {
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    // top: "150px",
    minHeight: "400px",
    maxHeight: "500px",
  },
});
const BottomDrawer = () => {
  const { drawerOption, setDrawerOption } = useContext(appContext);
  const classes = useStyles();

  return (
    <Drawer
      anchor={"bottom"}
      open={drawerOption.show}
      onClose={() => setDrawerOption((prev) => ({ ...prev, show: false }))}
      className="bottomDrawer"
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
    >
      <div className="bg-white square pb-3 pt-3">
        <div className="square__inner"></div>
      </div>

      <Fade in={drawerOption.animation} timeout={300}>
        <div className="content p-3">{drawerOption.content}</div>
      </Fade>
    </Drawer>
  );
};

export default BottomDrawer;
