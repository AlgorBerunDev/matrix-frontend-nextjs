import { Col, Row } from "antd";
import React from "react";
import { Footer } from "../../components/Footer";
import { ProductFullInfo } from "../../components/ProductFullInfo";
import { PorductImage } from "../../components/ProductImages";
import { ProductShortInfo } from "../../components/ProductShortInfo";

const Product = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Row>
        <Col sm={24} md={10}>
          <PorductImage />
        </Col>
        <Col sm={24} md={10}>
          <ProductShortInfo />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <div style={{ padding: 20 }}>
        <ProductFullInfo />
      </div>

      <Footer />
      <style global jsx>{`
        .content,
        #scroll-content {
          background-color: #000000;
        }
      `}</style>
    </>
  );
};

export default Product;
