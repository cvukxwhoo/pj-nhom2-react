import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./MichelinStar.module.scss";
import SlideShow from "../../components/SlideShow/SlideShow";
import { Divider } from "antd";

const cx = classNames.bind(styles);

const MichelinStar = () => {
  return (
    <div className={cx("container")}>
      <h1>title</h1>
      <div className={cx("content-wrapper")}>
        {/* Image */}
        <div className={cx("image-main")}>
          <SlideShow />
        </div>
        {/* Content */}
        <div className={cx("content-main")}>
          <div className={cx("content-left")}>
            {/* Overview */}
            <div className={cx("overview")}>
              <h2>Overview</h2>
              <p className={cx("break-word")}>
                Prepared with exacting dedication, sushi at Sukiyabashi Jiro is
                world-famous for its exceptional quality. Secure a Sukiyabashi
                Jiro Roppongi reservation to taste some of Tokyo&apos;s finest
                sushi at the restaurant&apos;s 2-Michelin-star Roppongi branch
              </p>
            </div>
            {/* Highlight */}
            <div className={cx("highlight")}>
              <h2>Highlight</h2>
              <p className={cx("break-word")}>
                <ul>
                  <li>
                    English-speaking chef: enjoy an explanation of your meal in
                    English!{" "}
                  </li>
                  <li>
                    Enjoy a variety of sushi made with different types of
                    seafood{" "}
                  </li>
                  <li>
                    Taste a fine selection of exquisite sushi carefully prepared
                    by one of Japan&apos; very best sushi masters, Takashi Ono{" "}
                  </li>
                </ul>
              </p>
            </div>
            <Divider style={{ color: "#000" }} />
            {/* Important Info */}
            <div className={cx("important-info")}>
              <h2>Important Information</h2>
              <p className={cx("break-word")}>
                <ul>
                  <li>
                    This reservation is not guaranteed to be confirmed and is on
                    a request basis
                  </li>
                  <li>
                    Customers must be at the restaurant at least 5 minutes
                    before the reserved time; in case of late arrival,
                    reservations may be canceled without refund
                  </li>
                  <li>Additional food and drinks are not included</li>
                  <li>Dress code is smart casual</li>
                  <li>
                    Wearing fragrances is strictly not permitted as it
                    interferes with the appreciation of the meal
                  </li>
                  <li>
                    Please be aware that Jiro Roppongi has just 8 seats, and
                    availability may change without notice (calendar is not
                    updated in real time)
                  </li>
                  <li>
                    There are no seats for small children, so please let us know
                    the ages of all children when you book
                  </li>
                  <li>
                    Note that Jiro serves a set course and raw fish cannot be
                    omitted; dietary preferences may not be accommodated, but
                    please inform us of all allergies at the time of booking
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MichelinStar;
