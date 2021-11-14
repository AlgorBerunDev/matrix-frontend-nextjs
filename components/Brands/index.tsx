import React from 'react'
import Slider from "react-slick";
import { useGetBrandsQuery } from '../../features/brands';
import { base } from '../../features/config';
import Image from 'next/image';

export const Brands = () => {
    const {data = [], isLoading} = useGetBrandsQuery(0);

    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
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
        slidesToShow: 4,
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
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return <div className='brands'>
        <div className='headers'>
            <div className='header'>НАГРАДЫ И ПРИЗНАНИЕ</div>
            <div className='description'>
                Конструкторские решения тренажеров Matrix не раз признавались лучшими в мире за свои динамические характеристики, исключительный комфорт, безупречную эстетику и непревзойденную долговечность.
            </div>
        </div>
        <Slider {...settings}>
            {
                !isLoading && data.map(item => {
                    return <div key={item.id}>
                        <div className='item'>
                                <Image src={`${base.domain}${item.image.url}`} width={200} height={200} alt="Image load error" />
                        </div>
                    </div>
                })
            }
        </Slider>
        <style jsx>{`
            .brands {
                background-color: white;
                padding-top: 30px;
                padding-bottom: 50px;
            }
            .item {
                width: 100%;
                display: flex;
                justify-content: center;
                box-sizing: border-box;
                padding: 20px;
            }
            .headers {
                text-align: center;
                padding: 20px;
                font-family: BaseBold;
            }
            .header {
                font-size: 3em;
                color: black;
            }
            .description {
                font-size: 1.7em;
                color: black;
                font-family: BaseLight;
                width: 70%;
                margin: 0 auto;
            }
            @media screen and (max-width: 600px) {
                .header {
                    font-size: 1.8em;
                }
                .description {
                    font-size: 1.2em;
                    width: 100%;
                }
            }
        `}</style>
    </div>
}