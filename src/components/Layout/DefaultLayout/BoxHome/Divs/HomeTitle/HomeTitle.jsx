import React from "react";
import classNames from "classnames/bind";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextRun from "../components/TextRun/TextRun";
import styles from "./HomeTitle.module.scss";

const cx = classNames.bind(styles);

const HomeTitle = () => {
  return (
    <div className={cx("home-title")}>
      <FontAwesomeIcon className={cx("hiking-icon")} icon={faPersonHiking} />
      <h1>
        Find
        <TextRun />
      </h1>
    </div>
  );
};

export default HomeTitle;
