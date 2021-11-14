import { Button, Col, Row } from 'antd'
import React from 'react'

export const SectionV1 = () => {
    return <div>
        <div className='headers'>
            <h3 className='header'>Кардио, которое изумляет</h3>
            <div className='text'>Абсолютно новые серии тренажеров 2021</div>
        </div>
        <Row>
            <Col sm={24} md={18}>
                <div className='console-bg'>
                    <img src='/images/pict.png' alt="." style={{width: "100%"}} />
                </div>
            </Col>
            <Col sm={24} md={6}>
                <div className='descriptions'>
                    <ul>
                        <li>Использование без обслуживания <b>до 160000 км *</b></li>
                        <li><b>5 консолей. 3 серии.</b> Комбинируйте по желанию</li>
                        <li>Сенсорные консоли <b>до 22 дюймов</b></li>
                        <li><b>Беспроводная зарядка</b> мобильных устройств</li>
                        <li><b>60 HD-видео</b> виртуальных пейзажей</li>
                        <li>Уникальный цветной <b>Premium LED</b> дисплей</li>
                    </ul>
                    <p className='paragraph'>
                        *Инновационная технология привода с реечным полотном на беговой дорожке Performance Plus, позволяющая использовать его до 160000 км без обслуживания.
                    </p>
                    <Button type='link' size='large' href="/contact_us" style={{backgroundColor: "red"}}>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</Button>
                </div>
            </Col>
        </Row>
        <style jsx>{`
            .headers {
                text-align: center;
                padding: 50px;
            }
            .header {
                font-size: 4em;
                font-family: BaseBold;
                color: #eaa83c;
            }
            .text {
                font-size: 2em;
            }
            .descriptions ul li {
                font-size: 1.5em;
                color: black;
                font-family: BaseLight;
            }
            .descriptions ul li b {
                font-family: BaseBold;
                color: black;
            }
            .descriptions {
                height: 100%;
                background-image: url("/images/amazemen-desc-bg.webp");
                background-size: cover;
                box-sizing: border-box;
                padding: 30px;
            }
            .paragraph {
                font-size: 1em;
                color: black;
            }
            .console-bg {
                background-image: url("/images/engineer-slider-bg.webp");
                background-size: cover;
                background-repeat: no-repeat;
            }
            @media screen and (max-width: 600px) {
                .header {
                    font-size: 2em;
                }
                .text {
                    font-size: 1.1em;
                }
            }
        `}</style>
    </div>
}