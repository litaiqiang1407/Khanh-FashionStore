import { Carousel, Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Carousel className={cx("banner")}>
      <Carousel.Item interval={1000}>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image
          className={cx("banner-img")}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
