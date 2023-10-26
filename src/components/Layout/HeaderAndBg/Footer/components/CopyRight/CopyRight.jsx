import classNames from "classnames/bind";
import styles from "./CopyRight.module.scss";

const cx = classNames.bind(styles);
const CopyRight = () => {
  return (
    <div className={cx("copyright")}>
      <div className={cx("copy")}>
        <span>© Copyright 2016 - Entrada - An Adventure Theme</span>
      </div>
      <div className={cx("visa")}>
        <img src="https://entrada.webtravel.vn/image/img-visa.png" alt="" />
      </div>
    </div>
  );
};

export default CopyRight;
