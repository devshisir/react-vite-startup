import React from "react";
import { Row, Col, Card, Carousel } from "antd";

function CarouselCom() {
  return (
    <>
      <div className="p-4">
        <Row justify="center">
          <Col span={22}>
            <Card
              className="w-full text-dark-100 bg-white"
              title="Carousel & slider component"
              bordered={false}
            >
              <div>
                <Carousel autoplay={true}>
                  <div className="h-60 w-full bg-[#364d79] leading-[240px] text-center text-white text-4xl">
                    1
                  </div>
                  <div className="h-60 w-full bg-[#364d79] leading-[240px] text-center text-white text-4xl">
                    2
                  </div>
                  <div className="h-60 w-full bg-[#364d79] leading-[240px] text-center text-white text-4xl">
                    3
                  </div>
                  <div className="h-60 w-full bg-[#364d79] leading-[240px] text-center text-white text-4xl">
                    4
                  </div>
                  <div className="h-60 w-full bg-[#364d79] leading-[240px] text-center text-white text-4xl">
                    5
                  </div>
                </Carousel>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CarouselCom;
