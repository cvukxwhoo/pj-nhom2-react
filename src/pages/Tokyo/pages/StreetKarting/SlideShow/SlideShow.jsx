import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/8993677e-12e2-41e4-a0f1-b40e6ffb3c24.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/8993677e-12e2-41e4-a0f1-b40e6ffb3c24.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/8993677e-12e2-41e4-a0f1-b40e6ffb3c24.jpg?height=1000&format=webp",
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
    </Slide>
  );
};

export default SlideShow;
