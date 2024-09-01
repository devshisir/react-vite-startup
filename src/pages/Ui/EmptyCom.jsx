import React from "react";
import { Row, Col, Card, Empty } from "antd";

function EmptyCom() {
  return (
    <>
      <div className="p-4">
        <Row justify="center">
          <Col span={22}>
            <Card
              className="w-full text-dark-100 bg-white"
              title="Empty state component"
              bordered={false}
            >
              <div>
                <Empty />
              </div>
              <div className="mt-10">
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 100,
                    margin: "0 auto",
                  }}
                  className="text-center"
                  description={
                    <>
                      <p className="text-dark-50 font-semibold text-sm">
                        Custom text content
                      </p>
                    </>
                  }
                ></Empty>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EmptyCom;
