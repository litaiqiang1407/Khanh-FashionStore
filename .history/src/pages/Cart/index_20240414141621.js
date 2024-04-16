import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { Container, Row } from "react-bootstrap";
const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx("cart")}>
      <h1 className={cx("header")}>MY BAG</h1>
      <Container className={cx("body")}>
        <Row>
          <Col lg={8} className={cx("product-container")}></Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
