import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/REBILE/images/556732dbbedf0851c1847eb33d9f5f872b5716ea24b37d9ca49f7c693861e2da.jpg",
    "https://d2izacsg13mtms.cloudfront.net/REBILE/images/e0eb779fec2e3ed1cd8b83ab9abe04c3584b56874badfc54fa4e5c0962540204.jpg",
    "https://d2izacsg13mtms.cloudfront.net/REBILE/images/347602a91c6ca1d5a6ebe17472b499726d26d72508da06b57ff7c00bb8d9d592.jpg",
    "https://d2izacsg13mtms.cloudfront.net/REBILE/images/45e41f000a78bbeb959ffda463b8513776d3bfb8269cf15460c07d03ec41ed73.jpg",
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
