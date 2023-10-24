import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/RP4TES/images/183e08270d8f71d2e432e17e4404b336c8092ead53f12531de94b17cfa295360.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RP4TES/images/0008e6c2dc67e8c2a06605e19ae73b3701c8551ea99c118885eaa7b2bad93a47.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RP4TES/images/6cdaab8ef38dbd70841a70e2c78305b1031d09b165399a05b88226e4099696bc.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RP4TES/images/ca062b3b7ed30f558e16640c7ca91265dccfa69f61ce8dcd1d90c4f9789919b6.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RP4TES/images/6acdc725341f828b647b465a759c897cb13820541206647f04624994e43662aa.jpg",
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
