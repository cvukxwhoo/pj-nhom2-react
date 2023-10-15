import classNames from "classnames/bind";
import styles from "./ScrollToTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const ScrollToTop = () => {
  return (
    <div className={cx("scroll-to-top")}>
      <FontAwesomeIcon className={cx("icon-up")} icon={faAngleUp} />
    </div>
  );
};

export default ScrollToTop;
