import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/4a8d6612-8489-40b6-9116-7e0ac181289b.jpeg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cc377942-e020-4165-a5d4-54da8b467f16.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cc7bfba2-97cf-45e3-912f-8c9c70ac7789.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/be6d280f-eaad-43de-8f8f-3f711934a34f.jpeg?height=1000&format=webp",
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
