import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Logo = () => {
  return (
    <div className={cx("box-logo")}>
      <Link to="/">
        <img
          src="https://entrada.webtravel.vn/image/logo-entrada.png"
          alt="entrada"
        />
      </Link>
    </div>
  );
};

export default Logo;
