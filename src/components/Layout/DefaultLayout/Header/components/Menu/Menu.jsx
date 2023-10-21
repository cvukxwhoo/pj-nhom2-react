import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Menu = () => {
  return (
    <div className={cx("wrap-menu")}>
      <ul className={cx("menu")}>
        {/* Home */}
        <li className={cx("drop-child")}>
          <Link className={cx("nav-child")} to="/">
            Home
          </Link>
        </li>
        {/* Destination */}
        <li className={cx("drop-child")}>
          <Link className={cx("nav-child")}>Destination </Link>
          <ul className={cx("dropdown")}>
            <div className={cx("dropdown-left")}>
              <li className={cx("hover")}>
                <Link className={cx("place")}>Tokyo</Link>
              </li>
              <li className={cx("hover")}>
                <Link className={cx("place")}>Kyoto</Link>
              </li>
              <li className={cx("hover")}>
                <Link className={cx("place")}>Osaka</Link>
              </li>
              <li className={cx("hover")}>
                <Link className={cx("place")}>Kobe</Link>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
