import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://content.linktivity.io/supplier-link/osakacastle/VXU85_6abc7bec-5ab9-4864-a9a7-6761dccfc7ef.JPG",
    "https://content.linktivity.io/supplier-link/osakacastle/VXU85_8a4a8ab4-26a0-48b6-b629-e28597bd8a91.JPG",
    "https://content.linktivity.io/supplier-link/osakacastle/VXU85_c6bff17b-932d-4290-978a-72e5edc77e36.JPG",
    "https://content.linktivity.io/supplier-link/osakacastle/VXU85_c74e383e-8beb-445d-ab60-d7fbcd676767.JPG",
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
