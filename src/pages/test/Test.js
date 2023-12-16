import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log(2);
  }, []);
  return <div>test</div>;
};

export default Test;
