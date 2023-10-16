import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSnowboarding,
  faCity,
  faPersonHiking,
  faCrosshairs,
  faPersonBiking,
  faSailboat,
  faPersonSwimming,
  faHippo,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./LiFeature.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LiFeature = () => {
  return (
    <ul className={cx("wrap-home-feature")}>
      {/* SnowBoarding */}
      <li>
        <a>
          <FontAwesomeIcon
            className={cx("acting")}
            icon={faPersonSnowboarding}
          />
          <p>Bungee Jump</p>
        </a>
      </li>
      {/* City */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faCity} />
          <p>City</p>
        </a>
      </li>
      {/* Hiking */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faPersonHiking} />
          <p>Hiking</p>
        </a>
      </li>
      {/* Hunting */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faCrosshairs} />
          <p>Hunting</p>
        </a>
      </li>

      {/* Biking */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faPersonBiking} />
          <p>Biking</p>
        </a>
      </li>

      {/* Sailing Trip */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faSailboat} />
          <p>Sailing Trip</p>
        </a>
      </li>

      {/* Swimming */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faPersonSwimming} />
          <p>Swimming</p>
        </a>
      </li>

      {/* WildLife */}
      <li>
        <a>
          <FontAwesomeIcon className={cx("acting")} icon={faHippo} />
          <p>WildLife Safari </p>
        </a>
      </li>
    </ul>
  );
};

export default LiFeature;
