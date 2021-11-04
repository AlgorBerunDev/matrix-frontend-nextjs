import { Col, Row } from "antd";
import React from "react";
import CatalogProductCard from "../CatalogProductCard";
import { ICatalogProduct } from "../../features/catalog/index";

const CatalogGrid = ({
  data,
  isLoading,
  isError,
  isSuccess,
}: {
  data: ICatalogProduct[] | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}) => {
  return (
    <>
      <br />
      <br />
      <br />
      <Row gutter={[10, 35]}>
        {!isLoading &&
          data?.map((item) => (
            <Col xs={24} sm={24} md={8} lg={7} key={item.id}>
              <CatalogProductCard data={item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default CatalogGrid;
