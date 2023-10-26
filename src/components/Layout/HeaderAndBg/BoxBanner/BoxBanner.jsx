import classNames from "classnames/bind";
import styles from "./BoxBanner.module.scss";

const cx = classNames.bind(styles);
const BoxBanner = () => {
  return (
    <section className={cx("box-banner")}>
      <img src="https://entrada.webtravel.vn/image/bg-home2.jpg" alt="" />
      <div className={cx("filter-bg")}></div>
      <div className={cx("wrap-title-banner")}>
        <h1>Popular Destination</h1>
      </div>
    </section>
  );
};

export default BoxBanner;
