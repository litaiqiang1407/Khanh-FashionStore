import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <Container className={cx("header-container")}>
        <Row className={cx("header-row")}>
          <Col lg={6} className={x("header-col")}>
            Header
          </Col>
          <Col lg={6} className={x("header-col")}></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
