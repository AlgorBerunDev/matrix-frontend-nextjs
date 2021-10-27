import { Col, Row } from 'antd'
import React from 'react'
import Link from 'next/link'
import { useGetFooterQuery } from '../../features/footer'

export const Footer = () => {
    const {data, isLoading} = useGetFooterQuery(0);

    return <div className='footer'>
        <Row>
            <Col xs={24} sm={24} md={6}>
                <div className='info1'>
                    <img src="/icons/header_matrix_logo_horizontal.png" style={{height: "20px"}} />
                    <br />
                    <br />
                    <p>
                        {!isLoading && data?.header}
                    </p>
                </div>
            </Col>
            <Col xs={24} sm={24} md={14}>
                <div className='info'>
                    <div>{!isLoading && data?.text_1}</div>
                    <div>{!isLoading && data?.text_2}</div>
                    <div>{!isLoading && data?.text_3}</div>
                    <div>{!isLoading && data?.text_4}</div>
                </div>
            </Col>
            <Col xs={24} sm={24} md={4}>
                <div className='info'>
                    <div>{!isLoading && data?.text_5}</div>
                    <div>{!isLoading && data?.text_6}</div>
                    <div>{!isLoading && data?.text_7}</div>
                    <div>{!isLoading && data?.text_8}</div>
                    <Link href="https://www.matrixfitness.com">www.matrixfitness.com</Link>
                </div>
            </Col>
        </Row>
        <style jsx>{`
            .footer {
                width: 100%;
                padding: 20px;
                font-size: 1.2em;
            }
            .info {
                text-align: right;
            }
            @media screen and (max-width: 600px) {
                .info, .info1 {
                    text-align: center;
                    width: 100%;
                }
            }
        `}</style>
    </div>
}