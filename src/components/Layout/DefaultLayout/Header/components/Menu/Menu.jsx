import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Menu = () => {
  return (
    <ul className={cx("menu")}>
      {/* Home */}
      <li className={cx("drop-child")}>
        <Link className={cx("nav-child")} to="/">
          Home
        </Link>
      </li>
      {/* Destination */}
      <li className={cx("drop-child")}>
        <div>
          <Link className={cx("nav-child")}>Destination</Link>
          <ul className={cx("dropdown")}>
            <div className={cx("dropdown-left")}>
              <li className={cx("hover")}>
                <Link>Tokyo</Link>
              </li>
              <li>
                <Link>Kyoto</Link>
              </li>
              <li>
                <Link>Osaka</Link>
              </li>
              <li>
                <Link>Kobe</Link>
              </li>
            </div>
          </ul>
        </div>
      </li>
    </ul>
  );
};
export default Menu;
