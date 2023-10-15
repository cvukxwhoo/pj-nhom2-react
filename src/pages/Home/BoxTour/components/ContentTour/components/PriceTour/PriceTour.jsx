import styles from "./PriceTour.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PriceTour = () => {
  return (
    <div className={cx("price-tour")}>
      <div className={cx("price")}>
        <h3>
          from
          <br />
          <span>$1.599</span>
        </h3>
      </div>
      <a className={cx("explore")}>Explore</a>
    </div>
  );
};

export default PriceTour;
