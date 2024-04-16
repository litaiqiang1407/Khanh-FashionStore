import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom"; // React router

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { interactData } from "~/functions/interactData";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const productDetailURL = `http://localhost/fashion-store/api/ProductDetail.php`;
  const addToCartURL = `http://localhost/fashion-store/actions/addToCart.php`;

  const handleAddToCart = () => {
    const data = {
      userID: 1,
      productID: id,
      quantity: quantity,
    };
    interactData(addToCartURL, "POST", data, (data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    interactData(`${productDetailURL}?productID=${id}`, "GET", null, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.table(product);
  return (
    <Container className={cx("product-detail")}>
      <Row>
        <Col lg={6}>
          <img
            src={product.Image}
            alt={product.Name}
            className={cx("product-image")}
          />
        </Col>
        <Col lg={6}>
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
          <span className={cx("product-price")}>${product.Price}</span>
          <span>SELECT SIZE</span>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
