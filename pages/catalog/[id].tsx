import React, {useState, useEffect} from "react";
import CatalogHeader from "../../components/CatalogHeader/index";
import CatalogFilter from "../../components/CatalogFilter/index";
import CatalogGrid from "../../components/CatalogGrid/index";
import { Col, Row } from "antd";
import { Footer } from "../../components/Footer";
import {
  useGetCatalogQuery,
  useGetCatalogProductQuery,
} from "../../features/catalog";
import { useRouter } from "next/router";
const CatalogIndex = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const catalog = useGetCatalogQuery(Number(router.query.id));
  const catalogProducts = useGetCatalogProductQuery(Number(router.query.id));
  if (catalog.isError || catalog.isLoading) return <h1>Loading....</h1>;
  useEffect(() => {
    let filters: any = router.query!.filter;
    let resultFilter: any = filters.split(",").map((item: any) => {
      return "filter_types[]="+item;
    }).join("&");
    console.log(resultFilter);
  }, [router]);
  return (
    <>
      <Row gutter={[0, 0]}>
        <Col span={24}>
          <CatalogHeader data={catalog?.data || null} />
        </Col>
        <Col xs={24} sm={24} md={6}>
          <CatalogFilter data={catalog?.data?.filter || null} />
        </Col>
        <Col xs={24} sm={24} md={18}>
          <CatalogGrid
            data={catalogProducts.data || null}
            isLoading={catalogProducts.isLoading}
            isError={catalogProducts.isError}
            isSuccess={catalogProducts.isSuccess}
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
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

export default CatalogIndex;
