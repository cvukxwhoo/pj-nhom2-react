import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/QPSKWF/images/1b283421c5e55090d0b5800e6fb3b516c4fea7469fa73666ff7549fbbb4e2d6a.jpg",
    "https://d2izacsg13mtms.cloudfront.net/QPSKWF/images/12b75d28d8f1c54ac488af8fbde0a8ed4974216ad8a38c1e1a2be717c50338ba.jpg",
    "https://d2izacsg13mtms.cloudfront.net/QPSKWF/images/4451c010714c25037c8fe71e1a6634a3288bc1f83f94ffd1043b5cf7ac3f32e0.jpg",
    "https://d2izacsg13mtms.cloudfront.net/QPSKWF/images/589cbb1a36eb826d8cda3163397123b5d134b6fcd24e0481a4b8c47712d64295.jpg",
    "https://d2izacsg13mtms.cloudfront.net/QPSKWF/images/3fc10ebfc881e1edce0a02eb053bbe4d9d09a877242a95940304e2354eb07dbc.jpg",
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
    </Slide>
  );
};

export default SlideShow;
