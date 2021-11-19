import React from 'react'
import Slider from "react-slick";
import { HoverCardV2, ICard } from '../HoverCardV2/index';


export interface ISectionSlick1 {
    title: string,
    cards: ICard[]
}

export const SectionSlick1 = (props: ISectionSlick1) => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        appendDots: (dots: any) => <div
        style={{
            marginTop: 30,
            padding: "10px",
            paddingTop: 30
        }}
        >
        <ul style={{ marginTop: "30px" }}> {dots} </ul>
        </div>,
        customPaging: (i:any) => (
            <div className='block'></div>
        ),
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    };
    return <>
        <h2 className='header'>{props.title}</h2>

        <Slider {...settings}>
            {
                props.cards?.map((item, i) => <div key={item.id}>
                    <div className='slider-item'>
                        <HoverCardV2 data={item} />
                    </div>
                </div> )
            }
        </Slider>
        <style jsx>{`
            .header {
                font-family: BaseBold;
                font-size: 4em;
                text-transform: uppercase;
                text-align: center;
                padding: 12px 16px;
                padding-top: 20px;
            }
            .slider-item {
                display: flex;
                justify-content: center;
            }
            @media screen and (max-width: 600px) {
                .header {
                    font-size: 2em;
                }
            }
        `}</style>
    </>
}