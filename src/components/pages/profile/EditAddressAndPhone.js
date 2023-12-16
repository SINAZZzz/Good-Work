import { ChevronLeftOutlined, Done, Map } from "@mui/icons-material";

const EditAddressAndPhone = ({ handleStep, user }) => {
  return (
    user && (
      <div className="editAddressAndPhone p-4 h-100 d-flex flex-column justify-content-between align-items-end">
        <div className="editAddressAndPhone__top w-100 ">
          <div className="d-flex justify-content-between ">
            <div className=" d-flex">
              <div className="icon p-1">
                <Map />
              </div>
              <div className="title align-self-center">
                ویرایش آدرس و تلفن ثابت
              </div>
            </div>
            <div className="" onClick={() => handleStep(0)}>
              <ChevronLeftOutlined fontSize="large" />
            </div>
          </div>

          <div className="inputs mt-5">
            <span>آدرس جدید را وارد کنید</span>
            <div className="d-flex">
              <input
                value={user.profile.citytitle}
                type="text"
                className="p-2 w-100"
                placeholder="شهر"
              />
              <div className="mx-1" />
              <input
                value={user.profile.province}
                type="text"
                className="p-2 w-100"
                placeholder="منطقه"
              />
            </div>

            <div className="address mt-2">
              <textarea
                className="address__textarea w-100 p-2"
                placeholder="شرح آدرس..."
                value={user.profile.address}
              />
              <div className="info">
                اگر قصد تغییر آدرس را ندارید روی آیکون تیک کلیک کنید
              </div>
            </div>

            <div className="changeNumber mt-4">
              <label>شماره ثابت جدید خود را وارد کنید</label>
              <div className="w-100 mt-2">
                <input
                  type="text"
                  className="p-2 w-100"
                  placeholder="تلفن ثابت"
                  value={user.profile.tell}
                />
              </div>
              <div className="info mt-2">
                اگر قصد تغییر شماره را ندارید روی آیکون برگشت کلیک کنید
              </div>
            </div>
          </div>
        </div>

        <div className="save p-4">
          <Done fontSize="large" />
        </div>
      </div>
    )
  );
};

export default EditAddressAndPhone;
