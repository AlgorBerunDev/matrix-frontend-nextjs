import React from 'react'
import CatalogHeader from '../../components/CatalogHeader/index';
import CatalogFilter from '../../components/CatalogFilter/index';
import CatalogGrid from '../../components/CatalogGrid/index';
import { Col, Row } from 'antd';
import { Footer } from '../../components/Footer';

const CatalogIndex = () => {

  return (
      <>
        <Row gutter={[0,0]}>
            <Col span={24}>
                <CatalogHeader />
            </Col>
            <Col xs={24} sm={24} md={6}>
                <CatalogFilter />
            </Col>
            <Col xs={24} sm={24} md={18} >
                <CatalogGrid />
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Footer />
        <style global jsx>{`
            .content, #scroll-content {
                background-color: #000000;
            }
        `}</style>
    </>
  );
}

export default CatalogIndex;