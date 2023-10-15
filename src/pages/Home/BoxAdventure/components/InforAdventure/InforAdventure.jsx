import classNames from "classnames/bind";
import styles from "./InforAdventure.module.scss";

const cx = classNames.bind(styles);

const InforAdventure = () => {
  return (
    <div className={cx("infor-adventure")}>
      <h1>
        Get special discount on select treks, this week.
        <span>Call +1 5775 7525</span>
      </h1>
    </div>
  );
};

export default InforAdventure;
