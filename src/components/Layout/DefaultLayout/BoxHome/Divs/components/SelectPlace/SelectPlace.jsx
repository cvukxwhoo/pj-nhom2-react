import React from "react";
import classNames from "classnames/bind";
import styles from "./SelectPlace.module.scss";

const cx = classNames.bind(styles);
const SelectPlace = () => {
  return (
    <div>
      <select className={cx("select")}>
        <option className={cx("op")} value="1">
          All Destination
        </option>
        <option className={cx("op")} value="2">
          Tokyo
        </option>
        <option className={cx("op")} value="3">
          Osaka
        </option>
        <option className={cx("op")} value="4">
          Kyoto
        </option>
        <option className={cx("op")} value="5">
          Nagoya
        </option>
      </select>
    </div>
  );
};

export default SelectPlace;
