import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { rootURL } from "~/api";
const cx = classNames.bind(styles);
function Login() {
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const loginURL = `${rootURL}/actions/login.php`;

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const dataLogin = {
      phone: phoneValue,
      password: passwordValue,
    };

    interactData(loginURL, "POST", dataLogin, (data) => {
      if (data.message === "Login successful") {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully logged in.",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
          localStorage.setItem("user", JSON.stringify(data.userData));
        });
      }
    });
  };

  return (
    <div className={cx("form-container")}>
      <h2 className={cx("form-title")}>LOGIN</h2>
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
          <Link className={cx("signup-btn")} to="/signup">
            SIGNUP
          </Link>
          <button
            type="submit"
            className={cx("login-btn")}
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
