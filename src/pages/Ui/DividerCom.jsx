import React from "react";
import { Divider, Row, Col, Card } from "antd";

function DividerCom() {
  return (
    <>
      <div className="p-4">
        <Row justify="center">
          <Col span={22}>
            <Card
              className="w-full text-dark-100 bg-white"
              title="Divider component"
              bordered={false}
            >
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <Divider />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <Divider dashed />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
              </div>
              <div className="mt-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <Divider plain>Text</Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="left" plain>
                  Left Text
                </Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="right" plain>
                  Right Text
                </Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DividerCom;
