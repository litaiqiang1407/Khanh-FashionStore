import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <Container className={cx("footer-container")}>
        <Row>
          <Col lg={4}>
            <h3 className={cx("footer-title")}>ONLINE SHOPPING</h3>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Customer Service
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Warranty
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Access Guide
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3 className={cx("footer-title")}>About us</h3>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>
                <a href="/contact" className={cx("footer-link")}>
                  Contact Us
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Events
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3 className={cx("footer-title")}>Services</h3>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Trade Services
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Recycling
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Interest Free Credit
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <div className={cx("footer-bottom")}>
          &copy; 2024 FashionStore's to help. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
