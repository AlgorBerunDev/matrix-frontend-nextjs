import React from "react";
import { Button, Image, Tooltip } from "antd";
import Link from "next/link";
import { IProduct } from "../../features/product/index";
import ReactMarkdown from "react-markdown";
import { base } from "../../features/config";

const tooltipText = ({ header, text }: { header: string; text: string }) => {
  return (
    <div>
      <span style={{ color: "#eaa83c", fontSize: "1.5em" }}>{header}</span>
      <br />
      <span style={{ color: "white" }}>
        {" "}
        {text}
        {" "}
      </span>
    </div>
  );
};
export const ProductShortInfo = ({
  data,
  isLoading,
}: {
  data?: IProduct | null;
  isLoading: boolean;
}) => {
  return (
    <div className="product-short-info">
      <h1 className="text-color">{isLoading ? "" : data?.name}</h1>
      <h2 className="text-color">{isLoading ? "" : data?.console_name}</h2>
      <h6 className="text-color">{isLoading ? "" : data?.model_name}</h6>
      <p className="text-color">
        <ReactMarkdown>{isLoading ? "" : data!.short_info}</ReactMarkdown>
      </p>
      <div className="available-consoles">ДОСТУПНЫЕ КОНСОЛИ</div>
      <br />
      {!isLoading &&
        data?.consoles?.map((item) => {
          return (
            <Link href={`/product/${item.product.id}`} key={item.id}>
              <a>
                <Tooltip
                  placement="bottom"
                  title={() => tooltipText({ header: item.console.name, text: item.console.title })}
                >
                  <Image
                    preview={false}
                    src={
                      `${base.domain}${item.console.image.url}`
                    }
                  />
                </Tooltip>
              </a>
            </Link>
          );
        })}

      <br />
      <br />
      <Button
        type="link"
        href="/contact_us"
        style={{ backgroundColor: "#eaa83c" }}
        size="large"
      >
        <span style={{ color: "black", fontFamily: "BaseLight" }}>
            Обратная связь
        </span>
      </Button>

      <style jsx>{`
        .product-short-info {
          padding: 20px;
          padding-top: 40px;
        }
        h1.text-color {
          color: #eaa83c;
          font-family: BaseBold;
          font-size: 3em;
          margin: 0;
          padding: 0;
        }
        h2.text-color {
          color: #cccccc;
          font-size: 2em;
          font-family: BaseLight;
          margin: 0;
          padding: 0;
        }
        h6.text-color {
          color: #ffffff;
          font-size: 1.3em;
          font-family: BaseLight;
          text-align: right;
        }
        p.text-color {
          color: #bbbbbb;
          font-size: 1.2em;
          font-family: BaseRegular;
          text-align: left;
        }
        .available-consoles {
          border-bottom: 2px solid #eaa83c;
          font-size: 2em;
          color: #eaa83c;
        }
      `}</style>
    </div>
  );
};
