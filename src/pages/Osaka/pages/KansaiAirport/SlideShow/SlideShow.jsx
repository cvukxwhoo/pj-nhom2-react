import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/3c31756a-739e-4e52-9f4a-e552fa72f704.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/8a1a78b7-0da9-4cee-9a2e-1f9ec85d3656.png?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/491d3ae7-6db1-4925-b54f-478c946d79d5.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/5b09c8f9-6b13-4f86-b38e-60cbde61efce.jpeg?height=1000&format=webp",
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
