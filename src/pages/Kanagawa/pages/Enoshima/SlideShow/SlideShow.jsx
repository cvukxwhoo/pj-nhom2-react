import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/c0c2694c-4040-4909-94b0-566a351cdd93.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/d70ab21b-45cc-400d-ae52-fb5539e9eced.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/31eb009c-d620-49bd-b1c4-5e8a52600c07.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/dfdc629c-5b3b-405e-8d9f-781334fe0e75.jpg?height=1000&format=webp",
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
