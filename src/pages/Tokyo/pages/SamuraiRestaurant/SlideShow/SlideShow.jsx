import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/481c0dc4-0c4c-4ac2-bbdc-ef14ab0db473.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/47bead59-623f-4f16-9b1b-ad4563d1e06f.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/09782a5f-5d04-4c7d-a4a0-6054d1bd622e.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/ab2e9011-40fd-4851-92a0-2fba9cf36eef.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/3f428403-fae6-4dce-8805-9d6b9be2a703.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/f5c30513-cc9f-4bd7-ab7a-10751e46c6fe.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/1d38e199-0980-446f-8649-f94daa2bad43.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/b5748734-e788-4d04-ae27-0929986587a6.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/5a5b0d5f-e97a-46bb-b7dc-ecd9c50cbad1.jpg?height=1000&format=webp",
    "https://prod-rte-static.rakutentravelxchange.com/cf28b30b-05fe-44a7-bf06-4ab3d5c7423e.jpg?height=1000&format=webp",
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
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[4]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[5]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[6]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[7]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[8]})` }}></div>
      </div>
      <div className={cx("each-slide-effect")}>
        <div style={{ backgroundImage: `url(${images[9]})` }}></div>
      </div>
    </Slide>
  );
};

export default SlideShow;
