import classNames from "classnames/bind";
import styles from "./AdventureTitle.module.scss";

const cx = classNames.bind(styles);

const AdventureTitle = () => {
  return (
    <div className={cx("adventure-title")}>
      <h1>The Adventure</h1>
      <p>
        Finding a great place to stay is easy. More choices, more destinations.
      </p>
    </div>
  );
};

export default AdventureTitle;
