import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/7d63935e-29e9-48da-baba-ab90128ea5c8.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/9c416b4c-e0be-46f4-9850-142143076d30.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/fd546dfd-676a-4955-9917-c40f7d4c3e1d.jpeg?height=1000&format=webp",
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
