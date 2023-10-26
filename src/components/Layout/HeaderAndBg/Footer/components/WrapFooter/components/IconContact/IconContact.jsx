import classNames from "classnames/bind";
import styles from "./IconContact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

const IconContact = () => {
  return (
    <div className={cx("infor-contact")}>
      {/* Fb */}
      <a href="">
        <FontAwesomeIcon className={cx("internet")} icon={faFacebook} />
      </a>
      {/* X */}
      <a href="">
        <FontAwesomeIcon className={cx("internet")} icon={faTwitter} />
      </a>
      {/* Instagram */}
      <a href="">
        <FontAwesomeIcon className={cx("internet")} icon={faInstagram} />
      </a>
      {/* Google */}
      <a href="">
        <FontAwesomeIcon className={cx("internet")} icon={faGooglePlusG} />
      </a>
      {/* Youtobe */}
      <a href="">
        <FontAwesomeIcon className={cx("internet")} icon={faYoutube} />
      </a>
    </div>
  );
};

export default IconContact;
