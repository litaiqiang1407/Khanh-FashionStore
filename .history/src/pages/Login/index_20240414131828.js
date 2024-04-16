import { Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("form-container")}>
      <h2 className={cx("form-title")}>LOGIN</h2>
      <Form className={cx("form")}>
        <Form.Group controlId="formPhone">
          <Form.Label className={cx("form-label")}>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label className={cx("form-label")}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
