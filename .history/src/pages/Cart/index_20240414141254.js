import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx("cart")}>
      <h1 className={cx("cart-header")}>My Cart</h1>
    </div>
  );
}

export default Cart;
