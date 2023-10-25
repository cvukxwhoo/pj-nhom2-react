import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/RM1ETY/images/7247aeb400df1a1417481f97a8933b002dbd7a29bd0af79ce42477ca7f147921.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RM1ETY/images/4abf24eb31d495be01ffa5ddf1b955bb83c7c116ad5363b0919ce480643d5d01.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RM1ETY/images/fa63e7086997830722a15a2385ea0c1912cea113755852800f5eafe817af06f4.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RM1ETY/images/1f83c6980ab63cd2061e98cc7cdaf1cb206e53751720385a5179698a5e7efa37.jpg",
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
