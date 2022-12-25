import { BrowserRouter } from "react-router-dom";
// import { HomeRouter } from "./routers/routers";
import { getApp } from "./utils/helpers";
import { UserProvider } from "./context/user.context";

const App = () => {
  const CurrentApp = getApp();
  console.log({ CurrentApp });
  return (
    <BrowserRouter>
      <UserProvider>
        <CurrentApp />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
