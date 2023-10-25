import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://prod-rte-static.rakutentravelxchange.com/ab694720-488b-4d0e-ac36-72845ff5e9a2.jpg?height=1000&format=webp",
    "https://d2izacsg13mtms.cloudfront.net/RBG6I9/images/6c2a73ca72a40d9ab7b081e9e95aa3e9829f22c8836693ac08618fb32c67b15c.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RBG6I9/images/6b2bf4878782a19c9d9bdfe4b75c2a45f02f317b12235dba36903fcc235088a7.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RBG6I9/images/77de631afeea7b7b149fd586b2eb58cd165d8f3413e514c637f7be515f3b254b.jpg",
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
