import { ChevronLeftOutlined } from "@mui/icons-material";
import { memo } from "react";
import { Button } from "react-bootstrap";

const Step2 = ({ handleStep, user }) => {
  return (
    <div className="step2 py-3 px-4">
      <div className="d-flex py-3 justify-content-between align-items-center">
        <div className="closeIcon" onClick={() => handleStep(0)}>
          <ChevronLeftOutlined fontSize="large" />
        </div>
        <div className="title">ویرایش آدرس و تلفن ثابت</div>
      </div>

      <div className="text-end address">آدرس جدید را وارد کنید</div>
      <div className=" d-flex justify-content-between mt-1">
        <div className=" w-100">
          <input
            className="p-2 w-100"
            type="text"
            placeholder="منطقه"
            value={user.profile.province}
          />
        </div>
        <div className="mx-1" />
        <div className=" w-100">
          <input
            className="p-2 w-100"
            type="text"
            placeholder="شهر"
            value={user.profile.citytitle}
          />
        </div>
      </div>

      <textarea
        rows={4}
        className="p-2  w-100 h-100 mt-2"
        value={user.profile.address}
        placeholder="شرح آدرس"
      />

      <div className="phone mt-3 text-end">
        شماره ثابت جدید خود را وارد کنید
      </div>
      <div className=" mt-1">
        <input
          type="text"
          className="p-2 w-100"
          placeholder="تلفن"
          value={user.profile.tell}
        />
      </div>

      <Button className="px-4 py-2  mt-3">ذخیره اطلاعات</Button>
    </div>
  );
};

export default memo(Step2);
