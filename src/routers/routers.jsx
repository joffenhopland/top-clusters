import { Routes, Route } from "react-router-dom";
import Home from "../routes/home/home.component";
import Navigation from "../routes/navigation/navigation.component";
import SignIn from "../routes/sign-in/sign-in.component";
const HomeRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    );
  };

  const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<SignIn />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="sign-in" element={<SignIn />} /> */}
        </Route>
      </Routes>
    );
  };
  
  export {HomeRouter, AppRouter};