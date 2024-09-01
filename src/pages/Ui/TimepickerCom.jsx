import React from "react";
import { TimePicker, Space } from "antd";
function TimepickerCom() {
  return (
    <>
      <Space wrap>
        <TimePicker size="large" placeholder="Select time" />
      </Space>
    </>
  );
}

export default TimepickerCom;
