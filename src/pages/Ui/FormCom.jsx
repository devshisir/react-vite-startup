import React from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
  UploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {
  Input,
  Space,
  Tooltip,
  Checkbox,
  Radio,
  Select,
  Switch,
  Row,
  Col,
  Card,
  Upload,
  DatePicker,
  TimePicker,
} from "antd";
const { Dragger } = Upload;
// import button component
import Button from "antd-button-color";
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

function FormCom() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <div className="p-4">
        <Row justify="center">
          <Col span={22}>
            <Card
              className="w-full text-dark-100 bg-white"
              title="Form elements component"
              bordered={false}
            >
              <Input placeholder="Placeholder" />
              <div className="mt-3">
                <TextArea
                  placeholder="Placeholder"
                  autoSize={{
                    minRows: 4,
                    maxRows: 6,
                  }}
                />
              </div>
              <div className="mt-3">
                <Input
                  placeholder="Enter your username"
                  prefix={
                    <UserOutlined
                      style={{
                        color: "rgba(0,0,0,.25)",
                      }}
                    />
                  }
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{
                          color: "rgba(0,0,0,.45)",
                        }}
                      />
                    </Tooltip>
                  }
                />
              </div>
              <div className="mt-3">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Input
                      className="inputWithPrefix"
                      prefix="Bank ID"
                      placeholder="Bank ID"
                    />
                  </Col>
                  <Col span={24}>
                    <Input
                      className="inputWithPrefix"
                      prefix="Bank Name"
                      placeholder="Bank Name"
                    />
                  </Col>
                  <Col span={24}>
                    <Input
                      className="inputWithPrefix"
                      prefix="Bank Telephone No."
                      placeholder="Bank Telephone No."
                    />
                  </Col>
                  <Col span={24}>
                    <div className="w-full">
                      <Space.Compact className="w-full">
                        <Input
                          defaultValue="Single select"
                          readOnly
                          className="min-w-[30%] max-w-[30%] border-r-0"
                        />
                        <Select
                          placeholder="Select your options"
                          onChange={(e) => console.log(e)}
                          className="!border-l-0 inlineSelect"
                          options={[
                            {
                              value: "jack",
                              label: "Jack",
                            },
                            {
                              value: "lucy",
                              label: "Lucy",
                            },
                            {
                              value: "Yiminghe",
                              label: "yiminghe",
                            },
                            {
                              value: "disabled",
                              label: "Disabled",
                              disabled: true,
                            },
                          ]}
                        />
                      </Space.Compact>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="w-full">
                      <Space.Compact className="w-full">
                        <Input
                          defaultValue="Multiple select"
                          readOnly
                          className="min-w-[30%] max-w-[30%] border-r-0"
                        />
                        <Select
                          mode="tags"
                          placeholder="Select your options"
                          onChange={(e) => console.log(e)}
                          className="!border-l-0 inlineSelect"
                          options={[
                            {
                              value: "jack",
                              label: "Jack",
                            },
                            {
                              value: "lucy",
                              label: "Lucy",
                            },
                            {
                              value: "Yiminghe",
                              label: "yiminghe",
                            },
                            {
                              value: "disabled",
                              label: "Disabled",
                              disabled: true,
                            },
                          ]}
                        />
                      </Space.Compact>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="w-full">
                      <Space.Compact className="w-full">
                        <Input
                          defaultValue="Select date"
                          readOnly
                          className="min-w-[30%] max-w-[30%] border-r-0"
                        />
                        <DatePicker
                          placeholder="Select your date"
                          className="w-full border-l-transparent hover:border-l-transparent"
                        />
                      </Space.Compact>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="w-full">
                      <Space.Compact className="w-full">
                        <Input
                          defaultValue="Select date range"
                          readOnly
                          className="min-w-[30%] max-w-[30%] border-r-0"
                        />
                        <RangePicker
                          placeholder="Select your date"
                          className="w-full border-l-transparent hover:border-l-transparent"
                        />
                      </Space.Compact>
                    </div>
                  </Col>

                  <Col span={12}>
                    <Select
                      placeholder="Select your options"
                      onChange={(e) => console.log(e)}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Col>
                  <Col span={12}>
                    <Select
                      mode="tags"
                      maxTagCount="responsive"
                      placeholder="Select your options"
                      onChange={(e) => console.log(e)}
                      options={options}
                    />
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      placeholder="Select your date"
                      className="w-full"
                    />
                  </Col>
                  <Col span={12}>
                    <RangePicker
                      placeholder={["Select start date", "Select end date"]}
                      className="w-full"
                    />
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      picker="week"
                      placeholder="Select week"
                      className="w-full"
                    />
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      picker="month"
                      placeholder="Select month"
                      className="w-full"
                    />
                  </Col>
                  <Col span={12}>
                    <TimePicker placeholder="Select time" className="w-full" />
                  </Col>
                </Row>
              </div>
              <div className="mt-3">
                <div>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
                <div className="mt-4">
                  <Dragger>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited
                      from uploading company data or other banned files.
                    </p>
                  </Dragger>
                </div>
              </div>

              <div className="mt-10">
                <Checkbox>Checkbox label</Checkbox>
              </div>
              <div className="mt-3">
                <Radio.Group>
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              </div>
              <div className="mt-3">
                <Space wrap>
                  <Switch defaultChecked />
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                  <Switch
                    checkedChildren="Yes"
                    unCheckedChildren="No"
                    defaultChecked
                  />
                </Space>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FormCom;
