import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom"; // React router

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { rootURL } from "~/api";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const { id } = useParams();

  const productDetailURL = `${rootURL}/api/ProductDetail.php`;
  const addToCartURL = `${rootURL}/actions/addToCart.php`;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeSelect = (size) => {
    setSize(size);
  };

  const handleAddToCart = () => {
    const data = {
      userID: 1,
      productID: id,
      size: size,
    };
    interactData(addToCartURL, "POST", data, (data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    interactData(`${productDetailURL}?productID=${id}`, "GET", null, (data) => {
      setProduct(data);
    });
  }, [id, productDetailURL]);

  return (
    <Container className={cx("product-detail")}>
      <Row className={cx("product-detail__container")}>
        <Col lg={6} className={cx("product-image__container")}>
          <img
            src={product.Image}
            alt={product.Name}
            className={cx("product-image")}
          />
        </Col>
        <Col lg={6} className={cx("product-info")}>
          <span className={cx("product-brand")}>{product.Brand}</span>
          <h1 className={cx("product-name")}>{product.Name}</h1>
          <div className={cx("product-rating")}>
            <div className={cx("rating-value")}>
              {product.RatingValue}
              <FontAwesomeIcon icon={faStar} className={cx("rating-icon")} />
            </div>
            <div className={cx("rating-number")}>
              {product.RatingNumber} ratings
            </div>
          </div>
          <div className={cx("price-container")}>
            <span className={cx("product-price")}>${product.Price}</span>
          </div>
          <span className={cx("select-size_title")}>SELECT SIZE</span>
          <div className={cx("select-size")}>
            {sizes.map((size) => (
              <span
                key={size}
                className={cx("size")}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </span>
            ))}
          </div>
          <div className={cx("product-actions")}>
            <button className={cx("add-to-cart")} onClick={handleAddToCart}>
              <FontAwesomeIcon
                icon={faBagShopping}
                className={cx("cart-icon")}
              />
              ADD TO BAG
            </button>
            <button className={cx("wishlist")}>
              <FontAwesomeIcon icon={faHeart} className={cx("wishlist-icon")} />
              WISHLIST
            </button>
          </div>
          <span className={cx("product-description_title")}>DESCRIPTION</span>
          <p className={cx("product-description")}>{product.Description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
