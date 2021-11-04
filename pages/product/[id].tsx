import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { ProductFullInfo } from "../../components/ProductFullInfo";
import { PorductImage } from "../../components/ProductImages";
import { ProductShortInfo } from "../../components/ProductShortInfo";
import { useGetProductQuery } from "../../features/product";
import { IProduct } from '../../features/product/index';
import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const {data = null, isLoading } = useGetProductQuery(Number(router.query.id));
  
  if(isLoading) return <h1>Loading...</h1>
  if(!data) return <h1>Not Found</h1>
  return (
    <>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={24} sm={24} md={10}>
          <PorductImage  data={data?.images} isLoading={isLoading}/>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <ProductShortInfo data={data} isLoading={isLoading} />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <div style={{ padding: 20 }}>
        <ProductFullInfo data={data} isLoading={isLoading}/>
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
