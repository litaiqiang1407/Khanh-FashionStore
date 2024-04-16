import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { Col, Form, Row } from "react-bootstrap";
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
              <span className={cx("filter-header__title")}>FILTERS</span>
              <span className={cx("filter-header__clear")}>CLEAR ALL</span>
            </div>
            <div className={cx("filter-body")}>
              <div className={cx("filter-gender")}>
                <ul className={cx("gender-list")}>
                  <li className={cx("gender-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="gender-item"
                        type="radio"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Men</span>
                    </label>
                  </li>
                  <li className={cx("gender-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="gender-item"
                        type="radio"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Women</span>
                    </label>
                  </li>
                  <li className={cx("gender-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="gender-item"
                        type="radio"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Boys</span>
                    </label>
                  </li>
                  <li className={cx("gender-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="gender-item"
                        type="radio"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Girls</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className={cx("filter-category")}>
                <span className={cx("category-title")}>Category</span>
                <ul className={cx("category-list")}>
                  <li className={cx("category-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="category-item"
                        type="checkbox"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Men</span>
                    </label>
                  </li>
                  <li className={cx("category-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="category-item"
                        type="checkbox"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Women</span>
                    </label>
                  </li>
                  <li className={cx("category-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="category-item"
                        type="checkbox"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Boys</span>
                    </label>
                  </li>
                  <li className={cx("category-item")}>
                    <label className={cx("item-label")}>
                      <input
                        name="category-item"
                        type="checkbox"
                        className={cx("item-input")}
                      />
                      <span className={cx("item-value")}>Girls</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
