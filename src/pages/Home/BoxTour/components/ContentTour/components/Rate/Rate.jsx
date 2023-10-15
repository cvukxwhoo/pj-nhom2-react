import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Rate.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Rate = () => {
  return (
    <div className={cx("star-tour")}>
      <FontAwesomeIcon
        className={cx("star")}
        style={{ color: "#ffa500" }}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={cx("star")}
        style={{ color: "#ffa500" }}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={cx("star")}
        style={{ color: "#ffa500" }}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={cx("star")}
        style={{ color: "#ffa500" }}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={cx("star")}
        style={{ color: "#ffa500" }}
        icon={faStar}
      />
    </div>
  );
};

export default Rate;
