export const isCorrectPhoneNumber = (number) => {
  if (number === undefined || number === null) return;
  return /^^(\+98|0)?9\d{9}$$/.test(number);
};
export const enToFaDigit = (input) => {
  if (input === undefined || input === null) return "۰";
  var returnModel = "",
    symbolMap = {
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
      0: "۰",
    };
  input = input.toString();
  for (var i = 0; i < input.length; i++)
    if (symbolMap[input[i]]) returnModel += symbolMap[input[i]];
    else returnModel += input[i];
  return returnModel;
};
export const commafy = (num) => {
  if (num === undefined || num === null) return;

  var str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
};
export const dateToIR = (val) => {
  if (val === undefined || val === null) return;

  let date = new Date(val * 1000).toLocaleDateString("fa-IR");
  let symbolMap = {
    "۱": "فروردین",
    "۲": "اردیبهشت",
    "۳": "خرداد",
    "۴": "تیر",
    "۵": "مرداد",
    "۶": "شهریور",
    "۷": "مهر",
    "۸": "آبان",
    "۹": "آذر",
    "۱۰": "دی",
    "۱۱": "بهمن",
    "۱۲": "اسفند",
  };
  let newDate = date.split("/");
  return (
    <>
      {newDate[2]} <bdi>{" " + symbolMap[newDate[1]] + " "}</bdi> {newDate[0]}
    </>
  );
};
export const checkIsNumber = (val) => {
  if (val === undefined || val === null) return;

  if (/[0-9]/.test(val)) {
    return val;
  }
};
