import classNames from "classnames/bind";
import styles from "./Cta.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Cta = () => {
  return (
    <div className={cx("box-cta")}>
      <Link className={cx("cta")} to="/user">
        <FontAwesomeIcon
          className={cx("icon")}
          style={{ color: "#fff" }}
          icon={faUser}
        />
      </Link>
      <Link className={cx("cta")} to="/shopping">
        <FontAwesomeIcon
          className={cx("icon")}
          style={{ color: "#fff" }}
          icon={faCartShopping}
        />
      </Link>
      <Link to="/search" className={cx("cta")}>
        <FontAwesomeIcon
          className={cx("icon")}
          style={{ color: "#fff" }}
          icon={faMagnifyingGlass}
        />
      </Link>
    </div>
  );
};

export default Cta;
