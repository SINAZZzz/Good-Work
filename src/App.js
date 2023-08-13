import Login from "./Component/Login/Login";
import { useState } from "react";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  const [state, setState] = useState(true);
  return <div>{state == true ? <Dashboard /> : <Login />}</div>;
}

export default App;
