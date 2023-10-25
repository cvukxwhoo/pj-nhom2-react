import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/ab694720-488b-4d0e-ac36-72845ff5e9a2.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/d5c4c3c8-6299-4fe1-990a-37f025196287.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/f2ae9a1c-b6e2-484a-b1ed-2a1496848abd.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/de16e912-9032-40d4-95c1-67a68d915466.jpg?height=1000&format=webp",
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
