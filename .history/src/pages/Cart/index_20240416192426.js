import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { interactData } from "~/functions/interactData";
import { rootURL } from "~/api";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const cartURL = `${rootURL}/api/Cart.php`; //

  useEffect(() => {
    interactData(cartURL, "GET", null, (data) => {
      setCartItems(data);
    });
  }, [cartURL]);
  const totalAmount = cartItems.reduce((acc, item) => {
    // Parse result to float to fixed 2 decimal places
    return (acc += parseFloat(item.Price) * item.Quantity);
  }, 0);

  return (
    <div className={cx("cart")}>
      <h1 className={cx("header")}>MY BAG</h1>
      <Container className={cx("body")}>
        <Row>
          <Col lg={8} className={cx("product-container")}>
            {cartItems.map((item) => (
              <div key={item.ID} className={cx("product")}>
                <div className={cx("product-image")}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className={cx("image")}
                  />
                </div>
                <div className={cx("product-details")}>
                  <span className={cx("product-brand")}>{item.Brand}</span>
                  <h3 className={cx("product-name")}>{item.Name}</h3>
                  <span className={cx("product-size")}>Size: {item.Size}</span>
                  <span className={cx("product-quantity")}>
                    Quantity: {item.Quantity}
                  </span>
                  <span className={cx("product-price")}>${item.Price}</span>
                </div>
                <FontAwesomeIcon icon={faTimes} className={cx("remove-icon")} />
              </div>
            ))}
          </Col>
          <Col lg={4} className={cx("price-detail")}>
            <h3 className={cx("price-title")}>PRICE DETAILS</h3>
            <div className={cx("shipping-fee")}>
              <span className={cx("shipping-label")}>Shipping Fee</span>
              <span className={cx("shipping-value")}>Free</span>
            </div>
            <div className={cx("total-amount")}>
              <span className={cx("total-label")}>Total Price</span>
              <span className={cx("total-value")}>${totalAmount}</span>
            </div>
            <button className={cx("place-order-btn")}>PLACE ORDER</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
