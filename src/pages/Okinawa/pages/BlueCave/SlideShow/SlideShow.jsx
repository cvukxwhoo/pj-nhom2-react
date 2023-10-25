import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/643584b9-2ece-4700-8333-636f6bd413dd.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/56896d47-87c3-46de-b6a4-e0611496a7ec.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cdf8b6d8-628b-4fde-a201-42cbe66c42de.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/5bfbfd7a-6340-41d5-8ae6-6bb47f4ae817.JPG?height=1000&format=webp",
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
