import React from "react";
import { Col, Row, Button } from "antd";
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import { base } from "../../features/config";
import IImage from "../../features/Interfaces/IImage";
import { IProjecting } from "../../features/projecting";
export type ProjectingType = IProjecting | undefined;

export const SectionProjecting: React.FC<{ data?: ProjectingType }> = ({
  data,
  ...props
}) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Row gutter={[0, 0]}>
        <Col sm={24} md={24} lg={24} xl={18}>
          <div className="small-header">
            <div className="header">{data?.header}</div>
            <div className="title">{data?.title}</div>
          </div>
          <div
            style={{ width: "100%", margin: "0 auto", backgroundColor: "gray" }}
          >
            <Slider {...settings}>
              {data?.images?.map((item: IImage) => (
                <div key={item.id}>
                  <img
                    src={`${base.domain}${item.formats?.large?.url || item.url}`}
                    style={{ width: "100%" }}
                    alt="."
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
        <Col sm={24} md={24} lg={24} xl={6}>
          <div className="content">
            <div className="large-header">
              <div className="header">{data?.header}</div>
              <div className="title">{data?.title}</div>
            </div>
            <div className="description">
                <ReactMarkdown>
                {data ? data?.description : ""}
                </ReactMarkdown>
            </div>
            <Button
              type="link"
              href={`${data?.path}`}
              size="large"
              style={{ backgroundColor: "#eaa83c" }}
            >
              <span style={{ color: "black" }}>{data?.button_text}</span>
            </Button>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .content {
          padding: 20px;
        }
        .header {
          font-family: BaseBold;
          font-size: 2em;
          text-transform: uppercase;
          padding-top: 20px;
          margin: 0;
        }
        .title {
          font-family: BaseLight;
          font-size: 1.2em;
          text-transform: uppercase;
          margin: 0;
        }
        .small-header {
          display: block;
          text-align: center;
          margin-bottom: 20px;
        }
        .large-header {
          display: none;
        }
        @media only screen and (min-width: 768px) {
        }
        @media only screen and (min-width: 992px) {
        }
        @media only screen and (min-width: 1200px) {
          .small-header {
            display: none;
          }
          .large-header {
            display: block;
          }
          .content {
              padding-top: 0;
          }
          .large-header .header {
              font-size: 2.5em;
              padding-top: 0;
          }
          .large-header .title {
              font-size: 1.6em;
          }
          .description {
            font-size: 0.9em;
          }
        }
        @media only screen and (min-width: 1600px) {
            .large-header .header {
                font-size: 3em;
            }
            .large-header .title {
                font-size: 2em;
            }
            .description {
                font-size: 1.2em;
            }
        }
      `}</style>
    </>
  );
};

export default SectionProjecting;
