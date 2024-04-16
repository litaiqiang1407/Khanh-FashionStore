import { Carousel, Container, Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    // <div className={cx("banner")}>
    //   <Image
    //     className={cx("banner-img")}
    //     src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
    //   />
    // </div>
    <Carousel className={cx("banner")}>
      <Carousel.Item>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
