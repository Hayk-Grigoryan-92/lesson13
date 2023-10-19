import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { UserRegistration } from "./components/userRegistration";
import { UserLogin } from "./components/userLogin";
import { Header } from "./components/header";
import { UserDetails } from "./components/userDetails";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";

function App() {
  const verify = useSelector((state) => state.isVerify);

  useEffect(() => {
    console.log(verify);
  }, [verify]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<UserRegistration />} />
        <Route path={"/user_login"} element={<UserLogin />} />
        {verify ? (
          <Route path={"/user_details"} element={<UserDetails />} />
        ) : (
          ""
        )}
        <Route path={"/*"} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
