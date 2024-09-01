import React, { useState } from "react";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
const { Dragger } = Upload;
function UploadCom() {
  const [imageUrl, setImageUrl] = useState();
  return (
    <>
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
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>
    </>
  );
}

export default UploadCom;
