import { Card, TimePicker } from "antd";
import React from "react";
import { Typography, Divider } from "antd";
import ButtonCom from "./ButtonCom";
import FormCom from "./FormCom";
import DatepickerCom from "./DatepickerCom";
import TimepickerCom from "./TimepickerCom";
import UploadCom from "./UploadCom";
import TableCom from "./TableCom";
import TabCom from "./TabCom";
import MasterTable from "../../components/Table/MasterTable";
const { Title } = Typography;
function Index() {
  return (
    <>
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <Card className="drop-shadow-sm border-0 w-full">
            <div>
              <Title className="!text-brand-100" level={5}>
                Button component
              </Title>
              <Divider>
                <Title className="!text-gray-500 !text-sm" level={5}>
                  Button style
                </Title>
              </Divider>
              <ButtonCom />
            </div>
            <div className="mt-5">
              <Title className="!text-brand-100" level={5}>
                Form component
              </Title>
              <Divider>
                <Title className="!text-gray-500 !text-sm" level={5}>
                  Input style
                </Title>
              </Divider>
              <FormCom />
            </div>
            <div className="mt-5">
              <Title className="!text-brand-100" level={5}>
                Date picker component
              </Title>
              <Divider>
                <Title className="!text-gray-500 !text-sm" level={5}>
                  Date picker
                </Title>
              </Divider>
              <DatepickerCom />
            </div>
            <div className="mt-5">
              <Title className="!text-brand-100" level={5}>
                Time picker component
              </Title>
              <Divider>
                <Title className="!text-gray-500 !text-sm" level={5}>
                  Time picker
                </Title>
              </Divider>
              <TimepickerCom />
            </div>
            <div className="mt-5">
              <Title className="!text-brand-100" level={5}>
                Upload component
              </Title>
              <Divider>
                <Title className="!text-gray-500 !text-sm" level={5}>
                  Upload component
                </Title>
              </Divider>
              <UploadCom />
            </div>
            <div className="mt-3">
              <Title className="!text-brand-100" level={5}>
                Table component
              </Title>
              <TableCom />
            </div>
            <div className="mt-3">
              <Title className="!text-brand-100" level={5}>
                Tab component
              </Title>
              <TabCom />
            </div>
            <div className="mt-4 min-h-screen">
              <Title className="!text-brand-100" level={5}>
                Master table
              </Title>
              {/* <MasterTable globalSearch={false} sorting={false} /> */}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Index;
