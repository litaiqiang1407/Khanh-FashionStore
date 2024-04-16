import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { Col, Row } from "react-bootstrap";
const cx = classNames.bind(styles);

function Products() {
  return (
    <div className={cx("products")}>
      <div className={cx("header")}>
        <h1 className={cx("header-title")}>Fashion Store</h1>
        <span className={cx("header-count")}>{` - items`}</span>
      </div>
      <div className={cx("body")}>
        <Row>
          <Col lg={2} className={cx("filter")}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
