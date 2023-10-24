import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/26bce27b883e74aedb0b67eda67da732cbf05992b8a0d48a526cc4fb823a18be.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/d621c3b86f41e6624c2821b94c7da8016620367503d741fa800b815c851a07a0.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/41fca5afc5338e0489f53344b9487a247f612e1f14ca64c930c2e1d64e148f2a.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/284498e20832ca598b45f5c01a2b31211cc8f55e7bb930042d2979c7cd287159.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/03b974c79650451cdc19529cd1cd9ae85da859638fab5f3ea4ac3113c14a60a9.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQEFCS/images/1cdc04263368004fee3e3935dc779a9f3256d7601740e0d35086f372061e0812.jpg",
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
    </Slide>
  );
};

export default SlideShow;
