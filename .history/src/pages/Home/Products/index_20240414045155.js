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
          <Col lg={2} className={cx("filter")}>
            <div className={cx("filter-header")}>
              <h3 className={cx("filter-header__title")}>FILTERS</h3>
              <span className={cx("filter-header__clear")}>CLEAR ALL</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
