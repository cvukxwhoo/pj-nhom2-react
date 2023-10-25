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
          <Link to="/" className={cx("nav-child")}>
            Home
          </Link>
        </li>
        {/* Destination */}
        <li className={cx("drop-child")}>
          <Link className={cx("nav-child")}>Destination </Link>
          <ul className={cx("dropdown")}>
            <div className={cx("dropdown-left")}>
              <li className={cx("hover")}>
                <Link to="/tokyo" className={cx("place")}>
                  Tokyo
                </Link>
              </li>
              <li className={cx("hover")}>
                <Link to="/kyoto" className={cx("place")}>
                  Kyoto
                </Link>
              </li>
              <li className={cx("hover")}>
                <Link to="/osaka" className={cx("place")}>
                  Osaka
                </Link>
              </li>
              <li className={cx("hover")}>
                <Link to="/okinawa" className={cx("place")}>
                  Onikawa
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className={cx("drop-child")}>
          <Link className={cx("nav-child")} to="/">
            Blog
          </Link>
        </li>
        <li className={cx("drop-child")}>
          <Link className={cx("nav-child")} to="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
