import classNames from "classnames/bind";
import styles from "./InforMore.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const InforMore = () => {
  return (
    <div className={cx("infor-more")}>
      <div className={cx("infor")}>
        {/* --------- */}
        {/* About */}
        <h1>About</h1>
        <ul>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Our Values</a>
          </li>
          <li>
            <a href="">Responsibility</a>
          </li>
          <li>
            <a href="">Our Mission</a>
          </li>
          <li>
            <a href="">Opportunity</a>
          </li>
          <li>
            <a href="">Safety Concerns</a>
          </li>
        </ul>
      </div>
      {/* --------- */}
      {/* Destination */}
      <div className={cx("infor")}>
        <h1>Destination</h1>
        <ul>
          <li>
            <a href="">Tokyo</a>
          </li>
          <li>
            <a href="">Kyoto</a>
          </li>
          <li>
            <a href="">Osaka</a>
          </li>
          <li>
            <a href="">Yokohama</a>
          </li>
          <li>
            <a href="">Nagoya</a>
          </li>
          <li>
            <a href="">Hirosima</a>
          </li>
        </ul>
      </div>
      {/* --------- */}
      {/* Themes */}
      <div className={cx("infor")}>
        <h1>About</h1>
        <ul>
          <li>
            <a href="">Rural</a>
          </li>
          <li>
            <a href="">Snow & Ice</a>
          </li>
          <li>
            <a href="">Wildlife Safari</a>
          </li>
          <li>
            <a href="">Hunting Trip</a>
          </li>
          <li>
            <a href="">Mountain</a>
          </li>
        </ul>
      </div>
      {/* --------- */}
      {/* Reservation */}
      <div className={cx("infor")}>
        <h1>Reservation</h1>
        <ul>
          <li>
            <a href="">Booking Conditions</a>
          </li>
          <li>
            <a href="">My Bookinws</a>
          </li>
          <li>
            <a href="">Refund Policy</a>
          </li>
          <li>
            <a href="">Includes & Excludes</a>
          </li>
          <li>
            <a href="">Your Responsibilities</a>
          </li>
          <li>
            <a href="">Order a BroChure</a>
          </li>
        </ul>
      </div>
      {/* --------- */}
      {/* Ask  */}
      <div className={cx("infor")}>
        <h1>Entrada </h1>
        <ul>
          <li>
            <a href="">Why Entrada</a>
          </li>
          <li>
            <a href="">Ask an Expert</a>
          </li>
          <li>
            <a href="">Personalised Service</a>
          </li>
          <li>
            <a href="">Safety Concerns</a>
          </li>
        </ul>
      </div>

      {/* --------- */}
      {/* Contact */}
      <div className={cx("infor")}>
        <h1>Contact</h1>
        <ul>
          <li>
            <a href="tel:024224202777">
              <FontAwesomeIcon className={cx("icon")} icon={faPhone} />
              024224202777
            </a>
          </li>
          <li>
            <a href="mailto:%20info@webtravel.vn">
              <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} />
              info@webtravel.vn
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon className={cx("icon")} icon={faHouse} />
              147 Mai Dich, Cau Giay, Ha Noi.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InforMore;
