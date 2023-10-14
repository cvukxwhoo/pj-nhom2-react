import * as React from "react";
import classNames from "classnames/bind";
import styles from "./HomeForm.module.scss";
import SelectPlace from "../components/SelectPlace/SelectPlace";
import SelectActivity from "../components/SelectActivity/SelectActivity";
import PickDate from "../components/PickDate/PickDate";

const cx = classNames.bind(styles);

const HomeForm = () => {
  return (
    <div className={cx("home-form")}>
      <div className={cx("form")}>
        <p>Destination</p>
        <SelectPlace />
      </div>

      <div className={cx("form")}>
        <p>Activity</p>
        <SelectActivity />
      </div>

      <div className={cx("form")}>
        <p>Pick Date</p>
        <PickDate />
      </div>

      <div className={cx("form")}>
        <button className={cx("form-button")}>Search</button>
      </div>
    </div>
  );
};

export default HomeForm;
