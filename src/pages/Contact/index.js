import { Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact")}>
      <h1 className={cx("contact-header")}>Contact Us</h1>
      <div className={cx("form-container")}>
        <Form className={cx("contact-form")}>
          <Form.Group className={cx("form-field")} controlId="formName">
            <Form.Label className={cx("form-label")}>Name</Form.Label>
            <Form.Control
              name="name"
              className={cx("form-input")}
              type="text"
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group className={cx("form-field")} controlId="formEmail">
            <Form.Label className={cx("form-label")}>Email</Form.Label>
            <Form.Control
              name="email"
              className={cx("form-input")}
              type={"text"}
            />
          </Form.Group>

          {/* Message Field */}
          <Form.Group className={cx("form-field")} controlId="formMessage">
            <Form.Label className={cx("form-label")}>Message</Form.Label>
            <Form.Control
              name="message"
              className={cx("form-input")}
              as={"textarea"}
            />
          </Form.Group>
          <button className={cx("send-btn")}>Send Message</button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
