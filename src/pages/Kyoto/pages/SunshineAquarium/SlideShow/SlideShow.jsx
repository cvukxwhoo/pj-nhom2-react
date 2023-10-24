import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/RJVY9C/images/4979d7cca776a8b5f540eb2816ceb61a7a4f11952e5b2cd138d74a9a3f5f8e4b.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RJVY9C/images/cf518a8e78f9a99385879c3aa3d3550f1494f37b8733c2fbfae5a658b6cc3102.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RJVY9C/images/7692674563594eb7da79edf8305d306384fbeb32125bf0d94940ccd11442272e.jpg",
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
