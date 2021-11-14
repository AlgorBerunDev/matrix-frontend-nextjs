import React from "react";
import Link from "next/link";
import { Card, Image, Divider } from "antd";
import { ICatalogProduct } from "../../features/catalog/index";
import { base } from "../../features/config";

const { Meta } = Card;
const CatalogProductCard = ({ data }: { data: ICatalogProduct }) => {
  return (
    <div className="catalog-product-card">
      <Card
        style={{
          width: 300,
          color: "black",
          background: "#ffffff",
          borderRadius: 5,
        }}
        type="inner"
        cover={
          <div
            style={{
              width: "100%",
              height: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box"
            }}
          >
            <Image
              preview={false}
              alt="example"
              src={`${base.domain}${
                data.image.formats?.medium?.url || data.image.url
              }`}
            />
          </div>
        }
      >
        <Link href={`/product/${data.product.id}`}>
          <a className="card-header">{data.title}</a>
        </Link>
        <br />
        {data.consoles.map((item) => {
          return (
            <div className="catalog-product-console-image" key={item.id}>
              <Link href={`/product/${item.product.id}`}>
                <a>
                  <Image
                    preview={false}
                    src={`${base.domain}${item.console.image.url}`}
                    key={item.id}
                    width={50}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </Card>
      <style jsx>{`
        .catalog-product-card {
          width: 100%;
          background-color: transparent;
          display: flex;
          justify-content: center;
        }
        .product-card-image {
          width: 100%;
          min-width: 200px;
          height: 300px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .card-header {
          color: #eaa83c;
          color: #444444;
          font-family: BaseBold;
          font-size: 1.2em;
          text-decoration: underline;
        }
        .console-link-item {
          width: 30px;
          box-sizing: content-box;
          margin: 3px;
          padding: 4px;
        }
        .console-link-item:hover {
          outline: 0.2px #eaa83c solid;
          cursor: pointer;
        }
        .product-image-background {
          background-color: white;
          width: 100%;
          height: 300px;
        }
        .catalog-product-console-image {
          width: 50px;
          display: inline-block;
        }
        .catalog-product-console-image:hover {
          width: 50px;
          background-color: #cccccc;
          border-radius: 3px;
          cursor: pointer;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default CatalogProductCard;
