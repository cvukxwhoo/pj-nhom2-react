import styles from "./BookTour.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck, faShare } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const BookTour = () => {
  return (
    <div className={cx("book-tour")}>
      <FontAwesomeIcon className={cx("book")} icon={faHeartCircleCheck} />
      <FontAwesomeIcon className={cx("book")} icon={faShare} />
    </div>
  );
};

export default BookTour;
