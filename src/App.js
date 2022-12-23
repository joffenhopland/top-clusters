import { BrowserRouter } from "react-router-dom";
// import { HomeRouter } from "./routers/routers";
import { getApp } from "./utils/helpers";

const App = () => {
  const CurrentApp = getApp();
  console.log({ CurrentApp });
  return (
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  );
};

export default App;
