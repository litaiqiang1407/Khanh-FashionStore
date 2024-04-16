import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return (
    <div className={cx("products")}>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Fashion Store</h1>
        <span className={cx("header-count")}>{` - items`}</span>
      </div>
    </div>
  );
}

export default Products;
