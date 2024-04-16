import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Container } from "react-bootstrap";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <Container className={cx("header-container")}></Container>
    </header>
  );
}

export default Header;
