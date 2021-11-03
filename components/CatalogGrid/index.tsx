import { Col, Row } from 'antd';
import React from 'react'
import CatalogProductCard from '../CatalogProductCard';

const CatalogGrid = () => {
    const data = [20,3,43,4,3,4,34,3,4,3,5,3,5,3,53,5,3,5,35];
  return (
      <>
      <br />
      <br />
      <br />
        <Row gutter={[10,35]}>
            {
                data.map((item, i) => (
                    <Col xs={24} sm={24} md={8} lg={7} key={i} >
                        <CatalogProductCard />
                    </Col>
                ))
            }
        </Row>
    </>
  );
}

export default CatalogGrid;