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
              <div key={item.ID} className={cx("product")}>
                <div className={cx("product-image")}>
                  <img src={item.Image} alt={item.Name} />
                </div>
                <div className={cx("product-details")}>
                  <span className={cx("product-brand")}>{item.Brand}</span>
                  <h3 className={cx("product-name")}>{item.Name}</h3>
                  <span className={cx("product-price")}>${item.Price}</span>
                  <span className={cx("product-quantity")}>
                    Quantity: {item.Quantity}
                  </span>
                </div>
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
