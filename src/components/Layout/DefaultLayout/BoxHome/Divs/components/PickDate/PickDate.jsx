import React from "react";
import { DatePicker, Space } from "antd";
import classNames from "classnames/bind";
import styles from "./PickDate.module.scss";
import { TimeClock } from "@mui/x-date-pickers";

const cx = classNames.bind(styles);

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const PickDate = () => (
  <Space direction="vertical" size={16}>
    <DatePicker
      className={cx("date-picker")}
      size="medium"
      disabledTime={TimeClock}
      onChange={onChange}
    />
  </Space>
);
export default PickDate;
