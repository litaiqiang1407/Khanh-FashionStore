import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const cartURL = "http://localhost/fashion-store/api/Cart.php";

  useEffect(() => {
    interactData(cartURL, "GET", null, (data) => {
      setCartItems(data);
    });
  }, []);

  console.table(cartItems);
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
