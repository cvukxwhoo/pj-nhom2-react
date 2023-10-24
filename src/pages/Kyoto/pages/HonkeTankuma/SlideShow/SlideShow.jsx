import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/9c37a24d-9c70-4998-b75f-db8500de3b76.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/8b0cc451-a69a-4ab1-b701-127f9e6ef6f0.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cd4c7001-0796-4937-9ad5-fb13e1c1a040.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/1ff18e96-b6ec-4a7a-bf05-f45e6cb43a6c.jpg?height=1000&format=webp",
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
