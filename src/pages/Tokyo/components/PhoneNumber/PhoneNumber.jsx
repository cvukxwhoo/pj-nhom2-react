import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
const PhoneNumber = () => (
  <>
    <Input
      size="large"
      placeholder="Your Phone or Email"
      prefix={<UserOutlined />}
    />
  </>
);
export default PhoneNumber;
