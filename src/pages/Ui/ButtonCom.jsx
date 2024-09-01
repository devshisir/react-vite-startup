import React, { useState } from "react";
import { Row, Col, Card, Divider, Space } from "antd";
import Button from "antd-button-color";
import CodeBlockView from "../../components/CodeBlock/Index";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { TbMessage } from "react-icons/tb";
function ButtonCom() {
  const [loading, setLoading] = useState(false);

  const onClickLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="p-4">
        <Row justify="center">
          <Col span={22}>
            <Card
              className="w-full text-dark-100 bg-white"
              title="Button component"
              bordered={false}
            >
              <div className="px-4">
                <Divider orientation="center">Fill bg button</Divider>
                <Space wrap>
                  <Button type="primary">Primary button</Button>
                  <Button type="secondary">Secondary button</Button>
                  <Button href="https://meet.google.com/" target="_blank">
                    Default button
                  </Button>
                  <Button type="success">Success button</Button>
                  <Button type="info">Info button</Button>
                  <Button type="primary" danger>
                    Danger button
                  </Button>
                  <Button type="warning">Warning button</Button>
                  <Button type="dark">Dark button</Button>
                </Space>
                <div className="mt-4">
                  <CodeBlockView
                    language="jsx"
                    code={`
  // import button component
  import Button from "antd-button-color";

  <Button type="primary">Primary button</Button>
  <Button type="secondary">Secondary button</Button>
  <Button href="https://meet.google.com/" target="_blank">Default button</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info button</Button>
  <Button type="primary" danger>Danger button</Button>
  <Button type="warning">Warning button</Button>
  <Button type="dark">Dark button</Button>
  
`}
                    showLineNumbers={false}
                  />
                </div>
              </div>
              <div className="px-4">
                <Divider orientation="center">Icon button</Divider>
                <Space className="mt-3" wrap>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<TbMessage size={17} />}
                  />
                  <Button
                    type="secondary"
                    size="large"
                    icon={<TbMessage size={25} />}
                  />
                  <Button size="large" icon={<TbMessage size={25} />} />
                  <Button
                    type="success"
                    size="large"
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="info"
                    size="large"
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="warning"
                    size="large"
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="primary"
                    size="large"
                    danger
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="dark"
                    size="large"
                    danger
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="lightdark"
                    size="large"
                    danger
                    icon={<TbMessage size={25} />}
                  />
                  <Button
                    type="transparent"
                    shape="circle"
                    size="large"
                    icon={<TbMessage size={25} />}
                  />
                </Space>
                <div className="mt-4">
                  <CodeBlockView
                    language="jsx"
                    code={`
  // import button component
  import Button from "antd-button-color";

  <Button type="primary" size="large" icon={<TbMessage size={25} />} />
  <Button type="secondary" size="large" icon={<TbMessage size={25} />} />
  <Button size="large" icon={<TbMessage size={25} />} />
  <Button type="success" size="large" icon={<TbMessage size={25} />} />
  <Button type="info" size="large" icon={<TbMessage size={25} />} />
  <Button type="warning" size="large" icon={<TbMessage size={25} />} />
  <Button type="primary" size="large" danger icon={<TbMessage size={25} />} />
  <Button type="dark" size="large" icon={<TbMessage size={25} />} />
  <Button type="lightdark" size="large" icon={<TbMessage size={25} />} />
  <Button type="transparent" shape="default" size="large" icon={<TbMessage size={25} />} />
  
`}
                    showLineNumbers={false}
                  />
                </div>
              </div>
              <div className="px-4">
                <Divider orientation="center">Text with icon</Divider>
                <Space wrap>
                  <Button type="primary" icon={<SearchOutlined />}>
                    Button with icon
                  </Button>
                  <Button
                    type="primary"
                    iconPosition="end"
                    icon={<SearchOutlined />}
                  >
                    Button with icon
                  </Button>
                </Space>
                <div className="mt-4">
                  <CodeBlockView
                    language="jsx"
                    code={`
  // import button component
  import Button from "antd-button-color";

  <Button type="primary" icon={<SearchOutlined />}>Button with icon</Button>
  <Button type="primary" iconPosition="end" icon={<SearchOutlined />}>Button with icon</Button>
  
`}
                    showLineNumbers={false}
                  />
                </div>
              </div>
              <div className="px-4">
                <Divider orientation="center">Button sizing</Divider>
                <Space wrap>
                  <Button size="small" type="primary">
                    Small size button
                  </Button>
                  <Button type="primary">Default size button</Button>
                  <Button size="large" type="primary">
                    Large size button
                  </Button>
                </Space>
                <div className="mt-4">
                  <CodeBlockView
                    language="jsx"
                    code={`
  // import button component
  import Button from "antd-button-color";

  <Button size="small" type="primary">Small size button</Button>
  <Button type="primary">Default size button</Button>
  <Button size="large" type="primary">Large size button</Button>
  
`}
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ButtonCom;
