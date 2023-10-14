import React from "react";
import classNames from "classnames/bind";
import styles from "./Feature.module.scss";
import LiFeature from "./components/LiFeature/LiFeature";

const cx = classNames.bind(styles);
const Feature = () => {
  return (
    <div className={cx("home-feature")}>
      <LiFeature />
    </div>
  );
};

export default Feature;
