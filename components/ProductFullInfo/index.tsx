import React from "react";
import { Col, Row, Tabs } from "antd";
import { IProduct } from "../../features/product/index";
import ReactMarkdown from 'react-markdown';

const { TabPane } = Tabs;

export const ProductFullInfo = ({
  data,
  isLoading,
}: {
  data: IProduct | null;
  isLoading: boolean;
}) => (
  <div>
    <Tabs defaultActiveKey="1" size="large">
      <TabPane tab="ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ" key="1">
        {!isLoading &&
          data?.product_properties.map((item) => {
            return (
              <Row gutter={[5, 5]} key={item.id}>
                <Col sm={4}>
                  <div className="info-header">{item.title}</div>
                </Col>
                <Col sm={12}>
                  <div className="info-description">
                    <ReactMarkdown>
                      {
                        item.description
                      }
                    </ReactMarkdown>
                  </div>
                </Col>
              </Row>
            );
          })}
      </TabPane>
      <TabPane tab="ОПИСАНИЯ" key="2">
        <ReactMarkdown>
          {
            !isLoading && data?.full_info || ""
          }
        </ReactMarkdown>
      </TabPane>
    </Tabs>
    <style jsx>{`
      .info-header {
        text-align: right;
        font-size: 1.2em;
        color: #eaa83c;
      }
      .info-description {
        text-align: left;
        font-size: 1.2em;
        font-family: BaseLight;
        color: #cccccc;
      }
    `}</style>
  </div>
);
