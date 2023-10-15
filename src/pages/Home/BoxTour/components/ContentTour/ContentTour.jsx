import classNames from "classnames/bind";
import styles from "./ContentTour.module.scss";
import InfoPhoto from "./components/InfoPhoto/InfoPhoto";
import Rate from "./components/Rate/Rate";
import BookTour from "./components/BookTour/BookTour";
import PriceTour from "./components/PriceTour/PriceTour";

const cx = classNames.bind(styles);

const ContentTour = () => {
  return (
    <div className={cx("content-tour")}>
      {InfoPhoto.map((photo, id) => {
        return (
          <div key={photo.id} className={cx("card-tour")}>
            <div className={cx("photo-tour")}>
              <img src={photo.img} alt="" />
              <div className={cx("time-tour")}>{photo.time}</div>
              <div className={cx("learn-tour")}>
                <Rate className={cx("star-tour")} />
                <BookTour className={cx("book-tour")} />
                <PriceTour className={cx("price-tour")} />
              </div>
            </div>
            <div className={cx("infor-tour")}>
              <h3>{photo.title}</h3>
              <p>{photo.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentTour;
