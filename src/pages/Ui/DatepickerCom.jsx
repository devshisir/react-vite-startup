import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
function DatepickerCom() {
  return (
    <>
      <Space wrap>
        <DatePicker size="large" />
        <DatePicker picker="week" size="large" />
        <DatePicker picker="month" size="large" />
        <DatePicker picker="quarter" size="large" />
        <DatePicker picker="year" size="large" />
      </Space>
      <Space wrap className="mt-3">
        <RangePicker size="large" />
      </Space>
    </>
  );
}

export default DatepickerCom;
