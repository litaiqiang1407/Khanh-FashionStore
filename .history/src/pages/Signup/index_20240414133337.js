import { Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Signup() {
  return (
    <div className={cx("form-container")}>
      <h2 className={cx("form-title")}>SIGNUP</h2>
      <Form className={cx("form")}>
        <Form.Group className={cx("form-group")} controlId="formPhone">
          <Form.Label className={cx("form-label")}>Phone</Form.Label>
          <Form.Control
            className={cx("form-input")}
            type="phone"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={cx("form-group")} controlId="formPassword">
          <Form.Label className={cx("form-label")}>Password</Form.Label>
          <Form.Control
            className={cx("form-input")}
            type="password"
          ></Form.Control>
        </Form.Group>
        <div className={cx("form-actions")}>
          <Link className={cx("login-btn")} to="/login">
            LOGIN
          </Link>
          <button type="submit" className={cx("signup-btn")}>
            SIGNUP
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
