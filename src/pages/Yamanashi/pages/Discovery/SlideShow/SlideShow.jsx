import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/65fa5bc7-2689-41d3-896f-b5e5bada1dd7.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/a50edf8b-ec55-49fd-ba6b-55f67bc114d6.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/0757782a-6b59-4e3a-9333-c99c234ea745.jpeg?height=1000&format=webp",
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
