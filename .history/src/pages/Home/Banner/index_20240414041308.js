import { Container, Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner")}>
      <Image
        className={cx("banner-img")}
        src="https://hnie-assets.s3.eu-west-1.amazonaws.com/category_images/Homewares_Desktop_Banner_New_Collection.jpg"
      />
    </div>
  );
}

export default Banner;
