import React from "react";
import { DatePicker, Space } from "antd";

import classNames from "classnames/bind";
import styles from "./PickDate.scss";
import { TimeClock } from "@mui/x-date-pickers";

const cx = classNames.bind(styles);

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const PickDate = () => (
  <Space direction="vertical">
    <DatePicker
      className={cx("date-picker")}
      size="large"
      disabledTime={TimeClock}
      onChange={onChange}
    />
  </Space>
);
export default PickDate;
