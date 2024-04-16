import { Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("form-container")}>
      <h2 className={cx("form-title")}>LOGIN</h2>
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
        <div className={cx("form-action")}>
          <button className={cx("form-button")} href="/register">
            Register
          </button>
          <button type="submit" className={cx("form-button")}>
            LOGIN
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;