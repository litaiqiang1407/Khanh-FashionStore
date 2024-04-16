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
                  Men
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Women
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Home & Living
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Beauty
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3 className={cx("footer-title")}>CUSTOMER POLICIES</h3>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>
                <a href="/contact" className={cx("footer-link")}>
                  Contact Us
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  FAQ
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Shipping
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3 className={cx("footer-title")}>USEFUL LINKS</h3>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Blog
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Careers
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Sitemap
                </a>
              </li>
              <li className={cx("footer-item")}>
                <a href="/" className={cx("footer-link")}>
                  Whitehat
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
