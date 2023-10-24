import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";

const cx = classNames.bind(styles);
const SlideShow = () => {
  const images = [
    "https://d2izacsg13mtms.cloudfront.net/RQKBYY/images/829e49c4fd7755b8fea6ea8931aeb9f4ed3879b42d45d9c345bd4981c8fb645f.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQKBYY/images/e963f9c41756c2a2a61d472958fdc110a630d540f26fab2bba81b1ac245f1af4.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQKBYY/images/b35e08802632cab043a461f4a851ece9e6fb714751eda13cad68613d348cbb69.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQKBYY/images/4a780325fc762448a2998afc62ed872556a82dffbf4c4016c3d6eb0593c82ad7.jpg",
    "https://d2izacsg13mtms.cloudfront.net/RQKBYY/images/12e953880292847ce0856ad1ad9da2b659342b68fbb8121f58517691d1f14a90.jpg",
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
