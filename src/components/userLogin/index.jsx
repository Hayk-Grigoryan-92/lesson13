import { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginImage from '../../assets/images/login.jpg'

export const UserLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const usersList = useSelector((state) => state.users);

  useEffect(() => {
    if (usersList.length) {
      console.log(usersList);
    }
  }, []);

  function emailValidate(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function verification() {
    let isVerification = true;

    const errors = {
      email: "",
      password: "",
    };

    if (!emailValidate(loginData.email)) {
      errors.email = "Incorect Email";
      isVerification = false;
    }
    if (!loginData.email.trim().length) {
      errors.email = "Empty email field";
      isVerification = false;
    }
    if (!loginData.password.trim().length) {
      errors.password = "Empty password field";
      isVerification = false;
    }

    setLoginErrors(errors);
    return isVerification;
  }

  function handleClick() {
    if (verification()) {
      setLoginData({
        email: "",
        password: "",
      });
      if (usersList.length) {
        usersList.forEach((item) => {
          if (
            item.email === loginData.email &&
            item.password === loginData.password
          ) {
            dispatch({type:'IS_VERIFY', payload:true})
            navigate("/user_details");
          }
        });
      }
    }
  }

  return (
    <div className="loginContainer" style={{backgroundImage:`url(${loginImage})`}}>
      <div className="loginForm">
        <label>
          <input
            type="text"
            placeholder="Email"
            value={loginData.email}
            name="email"
            onChange={handleChange}
            className={`${loginErrors.email ? "errorInput" : ""}`}
          />
          {loginErrors.email ? (
            <p className="errorText">{loginErrors.email}</p>
          ) : null}
        </label>
      </div>
      <div className="loginForm">
        <label>
          <input
            type="text"
            placeholder="Password"
            value={loginData.password}
            name="password"
            onChange={handleChange}
            className={`${loginErrors.password ? "errorInput" : ""}`}
          />
          {loginErrors.password ? (
            <p className="errorText">{loginErrors.password}</p>
          ) : null}
        </label>
      </div>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
};
