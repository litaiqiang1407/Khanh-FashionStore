import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <Container className={cx("header-container")}>
        <Row className={cx("header-row")}>
          <Col lg={6} className={cx("header-col")}>
            <Navbar.Brand href="/">
              <img
                src="https://cdn.dribbble.com/userupload/7899795/file/original-7c498c1b6e9bb43ac93fe5918fafdf99.jpg?resize=1200x1200"
                alt="Logo"
                className={cx("header-logo")}
              />
            </Navbar.Brand>
            <Navbar expand="lg" className={cx("navbar-header")}>
              <Nav className="mx-auto">
                <Link className={cx("nav-link")} to="/furniture">
                  Men
                </Link>
                <Link className={cx("nav-link")} to="/lighting">
                  Women
                </Link>
                <Link className={cx("nav-link")} to="/home-decor">
                  Home Decor
                </Link>
                <Link className={cx("nav-link")} to="/outdoor-items">
                  Outdoor Items
                </Link>
                <Link className={cx("nav-link")} to="/bathroom-items">
                  Bathroom Items
                </Link>
                <Link className={cx("nav-link")} to="/miscellaneous">
                  Miscellaneous
                </Link>
              </Nav>
            </Navbar>
          </Col>
          <Col lg={6} className={cx("header-col")}></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
