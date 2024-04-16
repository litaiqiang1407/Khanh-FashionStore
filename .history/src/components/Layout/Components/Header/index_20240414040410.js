import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Col, Container, Navbar, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <Container className={cx("header-container")}>
        <Row className={cx("header-row")}>
          <Col lg={6} className={cx("header-col")}>
            <Navbar style={{ padding: 0 }}>
              <Navbar.Brand href="/" className={cx("header-logo")}>
                <img
                  src="https://cdn.dribbble.com/userupload/7899795/file/original-7c498c1b6e9bb43ac93fe5918fafdf99.jpg?resize=1200x1200"
                  alt="Logo"
                  className={cx("logo")}
                />
              </Navbar.Brand>
              <Navbar expand="lg" className={cx("navbar-header")}>
                <Nav className="mx-auto" style={{ height: "80px" }}>
                  <Link className={cx("nav-link")} to="/furniture">
                    MEN
                  </Link>
                  <Link className={cx("nav-link")} to="/lighting">
                    WOMEN
                  </Link>
                  <Link className={cx("nav-link")} to="/home-decor">
                    KIDS
                  </Link>
                  <Link className={cx("nav-link")} to="/outdoor-items">
                    HOME & LIVING
                  </Link>
                  <Link className={cx("nav-link")} to="/bathroom-items">
                    BEAUTY
                  </Link>
                </Nav>
              </Navbar>
            </Navbar>
          </Col>
          <Col lg={6} className={cx("header-col")}>
            <Row className={cx("header-options")}>
              <Col lg={8}>
                <div className={cx("header-search")}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={cx("search-icon")}
                  />
                  <input
                    type="text"
                    placeholder="Search for products, brands, and more..."
                    className={cx("search-input")}
                  />
                </div>
              </Col>
              <Col lg={4}>
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/login">
                  <FontAwesomeIcon icon={faBagShopping} />
                </Link>
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
