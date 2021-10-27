import React from 'react'
import Slider from "react-slick";
import { Row, Col } from 'antd'
import { HoverCardV3 } from '../HoverCardV3'
import { useGetUniqueQuery } from '../../features/unique-products';
import { ICard } from '../../features/unique-products/index';

export const Gallery = () => {

    const {data = [], isLoading} = useGetUniqueQuery(0);

    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
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
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return <div>
        <div className='gallery-header'>
            УНИКАЛЬНЫЕ ПРОДУКТЫ
            <br />
            <img src="/icons/header_matrix_logo_horizontal.png" style={{height: 20}} />
        </div>
        <div className="gallery">
            <Row gutter={[10,10]}>
                {
                    !isLoading && data.map(item => {
                        return <Col span={8} key={item.id}><HoverCardV3 data={item}/></Col>
                    })
                }
            </Row>
        </div>
        <div className='gallerySlick'>
            <Slider {...settings}>
                {
                    !isLoading && data.map(item => {
                        return <div key={item.id}><HoverCardV3 data={item}/></div>
                    })
                }
            </Slider>
        </div>
        <style jsx>{`
            .gallerySlick {
                display: none;
            }
            .gallery-header {
                padding: 60px;
                font-size: 3em;
                text-align: center;
            }
            @media screen and (max-width: 600px) {
                .gallery {
                    display: none;
                }
                .gallerySlick {
                    display: block;
                }
                .gallery-header {
                    font-size: 1.7em;
                    font-family: BaseBold;
                    color: #eaa83c;
                }
            }
        `}</style>
    </div>
}