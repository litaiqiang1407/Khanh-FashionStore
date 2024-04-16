import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

import { interactData } from "~/functions/interactData";
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import { rootURL } from "~/api";
const cx = classNames.bind(styles);
function Signup() {
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const registerURL = `${rootURL}/actions/register.php`;

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const dataRegister = {
      phone: phoneValue,
      password: passwordValue,
    };

    interactData(registerURL, "POST", dataRegister, (data) => {
      if (data.message === "User was added successfully.") {
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "You have successfully signed up.",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };
  return (
    <div className={cx("form-container")}>
      <h2 className={cx("form-title")}>SIGNUP</h2>
      <Form className={cx("form")}>
        <Form.Group className={cx("form-group")} controlId="formPhone">
          <Form.Label className={cx("form-label")}>Phone</Form.Label>
          <Form.Control
            className={cx("form-input")}
            type="phone"
            value={phoneValue}
            onChange={handlePhoneChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className={cx("form-group")} controlId="formPassword">
          <Form.Label className={cx("form-label")}>Password</Form.Label>
          <Form.Control
            className={cx("form-input")}
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <div className={cx("form-actions")}>
          <Link className={cx("login-btn")} to="/login">
            LOGIN
          </Link>
          <button
            type="submit"
            className={cx("signup-btn")}
            onClick={handleRegister}
          >
            SIGNUP
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
