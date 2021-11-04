import React from "react";
import Link from "next/link";
import { Card, Image } from "antd";
import { ICatalogProduct } from "../../features/catalog/index";
import { base } from "../../features/config";

const { Meta } = Card;
const CatalogProductCard = ({ data }: { data: ICatalogProduct }) => {
  return (
    <div className="catalog-product-card">
      <Card
        style={{ width: 300, color: "yellow", background: "#444" }}
        type="inner"
        cover={
          <img
            alt="example"
            src={`${base.domain}${
              data.image.formats?.medium?.url || data.image.url
            }`}
            className="product-image-background"
          />
        }
      >
        <Link href={`/product/${data.id}`}>
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
          /* color: white; */
          font-family: BaseBold;
          font-size: 1.2em;
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
          background: rgb(93, 93, 93);
          background: -moz-linear-gradient(
            124deg,
            rgba(93, 93, 93, 1) 13%,
            rgba(69, 69, 69, 1) 74%,
            rgba(87, 86, 86, 1) 100%
          );
          background: -webkit-linear-gradient(
            124deg,
            rgba(93, 93, 93, 1) 13%,
            rgba(69, 69, 69, 1) 74%,
            rgba(87, 86, 86, 1) 100%
          );
          background: linear-gradient(
            124deg,
            rgba(93, 93, 93, 1) 13%,
            rgba(69, 69, 69, 1) 74%,
            rgba(87, 86, 86, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5d5d5d",endColorstr="#575656",GradientType=1);
        }
        .catalog-product-console-image {
            width: 50px;
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
