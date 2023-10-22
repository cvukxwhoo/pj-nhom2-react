import React, { useState } from "react";
import { DatePicker, Space } from "antd";
const DatePickerValue = () => {
  const [size, setSize] = useState("large");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" size={16}>
      <DatePicker size={size} />
    </Space>
  );
};
export default DatePickerValue;
