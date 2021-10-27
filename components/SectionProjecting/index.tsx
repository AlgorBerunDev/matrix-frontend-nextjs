import React from 'react'
import { Col, Row, Button } from 'antd';
import Slider from "react-slick";
import ReactMarkdown from 'react-markdown'
import { base } from '../../features/config';
import IImage from '../../features/Interfaces/IImage';
import { IProjecting } from '../../features/projecting';
export type ProjectingType = IProjecting | undefined;

export const SectionProjecting: React.FC<{data?: ProjectingType}> = ({data, ...props}) => {
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
    
    return <>
        <Row gutter={[0,0]}>
            <Col sm={24} md={18}>
                <div className='small-header'>
                    <div className='header'>{data?.header}</div>
                    <div className="title">{data?.title}</div>
                </div>
                <div style={{width: "100%", margin: "0 auto", backgroundColor: "gray"}}>
                    <Slider {...settings}>
                        
                        {
                            data?.images?.map(
                                (item: IImage) => (
                                    <div key={item.id}>
                                        <img src={`${base.domain}${item.formats.large.url}`} style={{width: "100%"}}/>
                                    </div>
                                )
                            )
                        }
                    </Slider>
                </div>
            </Col>
            <Col sm={24} md={6}>
                <div className='content'>
                    <div className='large-header'>
                        <div className='header'>{data?.header}</div>
                        <div className="title">{data?.title}</div>
                    </div>
                    <ReactMarkdown className='description'>{data? data?.description : ""}</ReactMarkdown>
                    <Button type='link' href={`${data?.path}`} size='large' style={{backgroundColor: "red"}}>{data?.button_text}</Button>
                </div>
            </Col>
        </Row>
        <style jsx>{`
            .content {
                padding: 20px;
            }
            .header {
                font-family: BaseBold;
                font-size: 4em;
                text-transform: uppercase;
                padding-top: 20px;
                margin: 0;
            }
            .title {
                font-family: BaseLight;
                font-size: 2.5em;
                text-transform: uppercase;
                margin: 0;
            }
            .small-header {
                display: none;
            }
            @media screen and (max-width: 600px) {
                .header {
                    font-size: 2em;
                }
                .title {
                    font-size: 1.2em;
                }
                .small-header {
                    display: block;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .large-header {
                    display: none;
                }
            }
        `}</style>
    </>
}

export default SectionProjecting;