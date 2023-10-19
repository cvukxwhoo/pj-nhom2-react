import classNames from "classnames/bind";
import styles from "./SelectActivity.module.scss";

const cx = classNames.bind(styles);
const SelectActivity = () => {
  return (
    <div>
      <select className={cx("select")}>
        <option className={cx("op")} value="1">
          All Activity
        </option>
        <option className={cx("op")} value="2">
          Bungee Jump
        </option>
        <option className={cx("op")} value="3">
          City Tour
        </option>
        <option className={cx("op")} value="4">
          Hiking Trips
        </option>
        <option className={cx("op")} value="5">
          Mountain Biking
        </option>
      </select>
    </div>
  );
};

export default SelectActivity;
