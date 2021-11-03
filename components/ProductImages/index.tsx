import { Image } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";
import { base } from "../../features/config";

const settings = {
  customPaging: function (i: any) {
    return (
      <div>
        <img
          src={`/images/Climbmill_C50_XUR_Hero_1440x.png`}
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

export const PorductImage = () => {
  return (
    <div style={{ padding: 30 }}>
      <Slider {...settings}>
        <div>
          <Image
            preview={false}
            src={`/images/Climbmill_C50_XUR_Hero_1440x.png`}
            style={{ backgroundColor: "#999999" }}
          />
        </div>
        <div>
          <Image src={`/images/Climbmill_C50_XUR_Hero_1440x.png`} />
        </div>
        <div>
          <Image src={`/images/Climbmill_C50_XUR_Hero_1440x.png`} />
        </div>
        <div>
          <Image src={`/images/Climbmill_C50_XUR_Hero_1440x.png`} />
        </div>
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
