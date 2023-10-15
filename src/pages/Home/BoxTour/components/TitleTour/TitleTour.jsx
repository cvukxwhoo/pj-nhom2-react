import classNames from "classnames/bind";
import styles from "./TitleTour.module.scss";

const cx = classNames.bind(styles);
const TitleTour = () => {
  return (
    <div className={cx("title-tour")}>
      <h1>Popular Tours</h1>
      <p>We have a unique way of meeting your adventurous expectations!</p>
    </div>
  );
};

export default TitleTour;
