import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/023085f1-4719-4748-adce-108a177b3052.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/5e589b1d-121d-430e-ac6f-dd6d33511e73.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/a47d7f05-8ee4-4838-a830-b83fd6823a59.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/023085f1-4719-4748-adce-108a177b3052.jpg?height=1000&format=webp",
  ];

  return (
    <Slide>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[3]})` }}></div>
      </div>
    </Slide>
  );
};

export default SlideShow;
