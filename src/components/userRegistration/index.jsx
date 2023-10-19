import { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import bgImage from '../../assets/images/bg.jpg'

export const UserRegistration = () => {
  

  const [userForm, setUserForm] = useState({
    name: "",
    lastName: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  function emailValidate(email){
    return /\S+@\S+\.\S+/.test(email)
  }

  function validate() {
    let isValidate = true;

    const errors = {
      name: "",
      lastName: "",
      position: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if(!emailValidate(userForm.email)){
      errors.email = "Incorect Email"
      isValidate = false
    }

    if (!userForm.email.trim().length) {
      errors.email = "Empty email field";
      isValidate = false;
    }
    if (!userForm.name.trim().length) {
      errors.name = "Empty name field";
      isValidate = false;
    }
    if (!userForm.lastName.trim().length) {
      errors.lastName = "Empty last name field";
      isValidate = false;
    }
    if (!userForm.position.trim().length) {
      errors.position = "Empty position field";
      isValidate = false;
    }
    if (!userForm.password.trim().length) {
      errors.password = "Empty password field";
      isValidate = false;
    }
    if (!userForm.confirmPassword.trim().length) {
      errors.confirmPassword = "Empty confirm password field";
      isValidate = false;
    }
    if(userForm.password.trim().length !== userForm.confirmPassword.trim().length){
      errors.password = "Password mismatch"
      errors.confirmPassword = "Password mismatch"
      isValidate = false
    }


    setFormErrors(errors);
    return isValidate;
  }

  const handleClick = () => {
    if (validate()) {
      dispatch({ type: "ADD_USER", payload: userForm });
      setUserForm({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastName: "",
        position: "",
      });
    }
  };

  return (
    <div className="formContainer" style={{backgroundImage:`url(${bgImage})`}}>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Name"
            value={userForm.name}
            name="name"
            onChange={handleChange}
            className={`${formErrors.name ? "errorInput" : ""}`}
          />
          {formErrors.name ? <p className="errorText">{formErrors.name}</p> : null}
        </label>
      </div>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Last Name"
            value={userForm.lastName}
            name="lastName"
            onChange={handleChange}
            className={`${formErrors.lastName ? "errorInput" : ""}`}
          />
          {formErrors.lastName ? <p className="errorText">{formErrors.lastName}</p> : null}
        </label>
      </div>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Position"
            value={userForm.position}
            name="position"
            onChange={handleChange}
            className={`${formErrors.position ? "errorInput" : ""}`}
          />
          {formErrors.position ? <p className="errorText">{formErrors.position}</p> : null}
        </label>
      </div>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Email"
            value={userForm.email}
            name="email"
            onChange={handleChange}
            className={`${formErrors.email ? "errorInput" : ""}`}
          />
          {formErrors.email ? <p className="errorText">{formErrors.email}</p> : null}
        </label>
      </div>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Password"
            value={userForm.password}
            name="password"
            onChange={handleChange}
            className={`${formErrors.password ? "errorInput" : ""}`}
          />
          {formErrors.password ? <p className="errorText">{formErrors.password}</p> : null}
        </label>
      </div>
      <div className="userForm">
        <label>
          <input
            type="text"
            placeholder="Confirm Password"
            value={userForm.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            className={`${formErrors.confirmPassword ? "errorInput" : ""}`}
          />
          {formErrors.confirmPassword ? <p className="errorText">{formErrors.confirmPassword}</p> : null}
        </label>
      </div>
      <button onClick={handleClick}>ADD USER</button>
    </div>
  );
};
