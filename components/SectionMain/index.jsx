import { Col, Row } from 'antd'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect';


export const SectionMain = (props) => {
    const size = "10px"
    const color = "black"
    return <div className="section-main" id="id">
        <Row>
            <Col xs={24} sm={24} md={18} lg={10}>
                <h1 className='header'>ОДИН БРЕНД ВСЕ ГРАНИ ФИТНЕСА</h1>
                    <ReactTypingEffect
                        speed={40}
                        eraseSpeed={10}
                        typingDelay={1500}
                        text={[
                            "Самая низкая стоимость владения оборудованием в индустрии",
                            "Лучшие условия приобретения от одного из лидеров рынка",
                            "Выбор крупнейших операторов фитнеса по всему миру"
                        ]}
                        cursor={""}
                        displayTextRenderer={(text, i) => {
                            return (
                              <p className='header-content'>
                                {text.split('').map((char, i) => {
                                  const key = `${i}`;
                                  return (
                                    <span
                                      key={key}
                                      style={{color: "#cccccc"}}
                                    >{char}</span>
                                  );
                                })}
                              </p>
                            );
                          }}
                    />
            </Col>
        </Row>


        <style jsx>{`
            .section-main {
                width: 100%;
                height: 100vh;
                background-color: ${color};
                background-image: url("/images/maxresdefault.jpeg");
                background-size: 100%;
                background-position: center;
                background-repeat: no-repeat;
                color: white;
                padding: ${size};
            }
            .header {
                margin-top: 200px;
                font-size: 5em;
                color: #eaa83c;
                text-shadow: 0px 0px 2px orange;
            }
            .header-content {
                font-size: 2em;
                color: #444;
            }
            .header, .header-content {
                padding-left: 50px;
            }
            @media screen and (max-width: 1024px) {
                .section-main {
                    background-image: url("/images/maxresdefault.jpeg");
                    background-position: bottom;
                }
                .header {
                    margin-top: 500px;
                }
            }
            @media screen and (max-width: 720px) {
                .section-main {
                    background-image: url("/images/maxresdefault.jpeg");
                    background-position: bottom;
                }
            }
            @media screen and (max-width: 572px) {
                .section-main {
                    height: 93vh;
                    background-image: url("/images/maxresdefault.jpeg");
                    background-position: bottom;
                }
                .header {
                    margin-top: 250px;
                    font-size: 2.3em;
                }
                .header-content {
                    font-size: 1.1em;
                }
                .header, .header-content {
                    padding-left: 25px;
                }
            }
        `}</style>
    </div>
}

export default SectionMain;