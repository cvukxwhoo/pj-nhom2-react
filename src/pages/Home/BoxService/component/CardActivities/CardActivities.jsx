import classNames from "classnames/bind";
import styles from "./CardActivities.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHippo,
  faFishFins,
  faCalendarDays,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const CardActivities = () => {
  return (
    <div className={cx("wrap-activities")}>
      <div className={cx("card-activiti")}>
        <FontAwesomeIcon className={cx("image")} icon={faHippo} />
        <span data-val="803" className={cx("num")}>
          803
        </span>
        <h1>WILDLIFE SPECIES</h1>
      </div>
      <div className={cx("card-activiti")}>
        <FontAwesomeIcon className={cx("image")} icon={faFishFins} />
        <span data-val="312" className={cx("num")}>
          312
        </span>
        <h1>NARCTIC EXPERIENCES</h1>
      </div>
      <div className={cx("card-activiti")}>
        <FontAwesomeIcon className={cx("image")} icon={faTree} />
        <span data-val="320" className={cx("num")}>
          320
        </span>
        <h1>NATIONAL PARKS</h1>
      </div>
      <div className={cx("card-activiti")}>
        <FontAwesomeIcon className={cx("image")} icon={faCalendarDays} />
        <span data-val="985" className={cx("num")}>
          985
        </span>
        <h1>DAYS IN THE WILD</h1>
      </div>
    </div>
  );
};

export default CardActivities;
