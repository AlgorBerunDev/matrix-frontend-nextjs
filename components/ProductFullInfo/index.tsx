import React from "react";
import { Col, Row, Tabs } from "antd";

const { TabPane } = Tabs;

export const ProductFullInfo = () => (
  <div>
    <Tabs defaultActiveKey="1" size="large">
      <TabPane tab="ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ" key="1">
        <Row gutter={[5, 5]}>
          <Col sm={4}>
            <div className="info-header">Назначение:</div>
          </Col>
          <Col sm={12}>
            <div className="info-description">профессиональные</div>
          </Col>
        </Row>
        <Row gutter={[5, 5]}>
          <Col sm={4}>
            <div className="info-header">Показания консоли:</div>
          </Col>
          <Col sm={12}>
            <div className="info-description">время суток, истекшее время, оставшееся время, общая продолжительность программы, расстояние (км. или мили), калории, кал/ч., скорость, темп, средний темп, преодоленный подъем, угол наклона, ЧСС, макс. ЧСС, метабол. ед-цы, динамич. профиль</div>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="ОПИСАНИЯ" key="2">
        Content of Tab Pane 2
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
