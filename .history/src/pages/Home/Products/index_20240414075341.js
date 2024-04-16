import { useEffect, useState } from "react";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Products() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(20);
  const productsURL = "http://localhost/homeware/api/Products.php";

  useEffect(() => {
    interactData(productsURL, "GET", null, setProducts);
  }, []);

  const loadMoreProducts = () => {
    setDisplayedProducts(displayedProducts + 20);
  };
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
                <span className={cx("category-title")}>CATEGORIES</span>
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
          <Col lg={10} className={cx("product")}>
            <div className={cx("product-header")}>
              <div className={cx("sort-by")}>
                <span className={cx("sort-by__title")}>Sort by:</span>
                <span className={cx("sort-by__value")}>Popularity</span>
              </div>
            </div>
            <div className={cx("product-body")}>
              <ul className={cx("product-list")}>
                {products.slice(0, displayedProducts).map((product) => (
                  <li className={cx("product-item")} key={product.ID}>
                    <Link to="/product/1" className={cx("item-link")}>
                      <img
                        src={product.Image}
                        alt={product.Name}
                        className={cx("product-img")}
                        loading="lazy" // lazy load images
                      />
                      <div className={cx("product-info")}>
                        <p className={cx("product-brand")}>{product.Brand}</p>
                        <p className={cx("product-name")}>{product.Name}</p>
                        <p className={cx("product-price")}>${product.Price}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
