import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { interactData } from "~/functions/interactData";

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

  return (
    <div className={cx("cart")}>
      <h1 className={cx("header")}>MY BAG</h1>
      <Container className={cx("body")}>
        <Row>
          <Col lg={8} className={cx("product-container")}>
            {cartItems.map((item) => (
              <div key={item.id} className={cx("product")}>
                <Row>
                  <Col lg={4}>
                    <img
                      className={cx("product-image")}
                      src={item.image}
                      alt={item.name}
                    />
                  </Col>
                  <Col lg={8}>
                    <h2 className={cx("product-name")}>{item.name}</h2>
                    <p className={cx("product-price")}>{item.price}</p>
                    <p className={cx("product-quantity")}>
                      Quantity: {item.quantity}
                    </p>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
