import { Image } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";
import { base } from "../../features/config";
import IImage from '../../features/Interfaces/IImage';


export const PorductImage = ({data, isLoading}: {data?: IImage[], isLoading: boolean}) => {
  const settings = {
    customPaging: function (i: any) {
      return (
        <div style={{width: 50, height: 50}}>
          <Image
            preview={false}
            src={`${base.domain}${data? data[i].formats.medium.url : ""}`}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              backgroundColor: "#999999",
            }}
          />
        </div>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-indcators",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };  
  return (
    <div style={{ padding: 30 }}>
      <Slider {...settings}>
        {
          data && data?.map((item) => {
            return (
              <div key={item.id}>
                <Image
                  preview={false}
                  src={`${base.domain}${item.formats.medium.url}`}
                  style={{ backgroundColor: "#999999"}}
                />
              </div>
            )
          })
        }
      </Slider>
      <style global jsx>{`
        .slick-indcators {
            bottom: -65px;
        }
        .slick-indcators li {
          width: 50px;
          height: 50px;
          filter: grayscale(100%);
        }
        .slick-indcators li.slick-active {
            filter: grayscale(0%);
            outline: 1px solid #eaa83c;
        }
      `}</style>
    </div>
  );
};
