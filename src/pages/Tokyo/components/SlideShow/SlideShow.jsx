import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/369b4660-387d-424c-a57d-3b42bda71037.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cb9543fa-6cf1-4867-aac6-ef552799fd6d.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/5c82a43f-9997-477e-b232-b609f0163aba.jpg?height=1000&format=webp",
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
