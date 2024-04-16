import { useEffect, useState } from "react";
import { interactData } from "~/functions/interactData";

import { rootURL } from "~/api";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Products() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(20);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const productsURL = `${rootURL}/api/Products.php`;
  const categoriesURL = `${rootURL}/api/Categories.php`;

  useEffect(() => {
    interactData(productsURL, "GET", null, setProducts);
    interactData(categoriesURL, "GET", null, setCategories);
  }, [productsURL, categoriesURL]);

  const handleCategoryChange = (categoryID) => {
    // Toggle selection of category
    setSelectedCategories(categoryID);
  };

  useEffect(() => {
    // Fetch products based on selected categories
    const filteredProductsURL = `${rootURL}/actions/filterByCategories.php?categories=${selectedCategories}`;
    interactData(filteredProductsURL, "GET", null, (data) => {
      setCategoryProducts(data);
    });
  }, [selectedCategories]);

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
                  {categories.map((category) => (
                    <li className={cx("category-item")} key={category.ID}>
                      <label className={cx("item-label")}>
                        <input
                          name="category-item"
                          type="checkbox"
                          className={cx("item-input")}
                          onChange={() => handleCategoryChange(category.ID)}
                          //checked={selectedCategories(category.ID)}
                        />
                        <span className={cx("item-value")}>
                          {category.Name}
                        </span>
                      </label>
                    </li>
                  ))}
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
                {categoryProducts.length > 0 ? (
                  categoryProducts
                    .slice(0, displayedProducts)
                    .map((product) => (
                      <li className={cx("product-item")} key={product.ID}>
                        <Link
                          to={`/product-detail/${product.ID}`}
                          className={cx("item-link")}
                        >
                          <img
                            src={product.Image}
                            alt={product.Name}
                            className={cx("product-img")}
                            loading="lazy" // lazy load images
                          />
                          <div className={cx("product-info")}>
                            <p className={cx("product-brand")}>
                              {product.Brand}
                            </p>
                            <p className={cx("product-name")}>{product.Name}</p>
                            <p className={cx("product-price")}>
                              ${product.Price}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))
                ) : products.length > 0 ? (
                  products.slice(0, displayedProducts).map((product) => (
                    <li className={cx("product-item")} key={product.ID}>
                      <Link
                        to={`/product-detail/${product.ID}`}
                        className={cx("item-link")}
                      >
                        <img
                          src={product.Image}
                          alt={product.Name}
                          className={cx("product-img")}
                          loading="lazy" // lazy load images
                        />
                        <div className={cx("product-info")}>
                          <p className={cx("product-brand")}>{product.Brand}</p>
                          <p className={cx("product-name")}>{product.Name}</p>
                          <p className={cx("product-price")}>
                            ${product.Price}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className={cx("product-item")}>
                    <span className={cx("no-products")}>No products found</span>
                  </li>
                )}
              </ul>
            </div>
            <div className={cx("product-footer")}>
              <button
                className={cx("load-more")}
                onClick={loadMoreProducts}
                disabled={displayedProducts >= products.length}
              >
                Load more
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
