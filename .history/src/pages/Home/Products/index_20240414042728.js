import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return <div className={cx("products")}></div>;
}

export default Products;
