import { Col, Row } from 'antd';
import { useGetWhyQuery } from '../../features/why-are-we';
import { IWhy } from '../../features/why-are-we/index';

export const SectionStickyContent = () => {

    const why = useGetWhyQuery<{data: IWhy, isLoading: boolean}>(0);
    
    return (<>
        <div className={`section-sticky-content`} id="section-sticky-content">
            <div className='my-sticky'>
                <div className="my-sticky-filter"></div>
            </div>
            <div className='content'>
                
                        
                <Row gutter={[{sm: 40, md: 40}, {sm: 40, md: 40}]}>
                    <Col span={24}>
                        <div className='header-1'>ПОЧЕМУ MATRIX?</div>
                        <div className='header-2'>ТОЛЬКО ФАКТЫ</div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row gutter={[{sm: 40, md: 40}, {sm: 40, md: 40}]}>
                    {
                        !why.isLoading && why.data.children.map(item => (
                                <Col sm={1} md={6} style={{width: "100%"}} key={item.id}>
                                    <div className='sticky-card'>
                                        <div className='sticky-title'>{item.title}</div>
                                        <div className='sticky-text'>{item.text}</div>
                                    </div>
                                </Col>
                            )
                        )
                    }
                </Row>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
        <style jsx>{`
            .content {
                padding-top: 40px;
                padding-bottom: 300px;
                margin-top: -300px;
                text-align: center;
            }
            .headers {
                border: 4px red solid;
            }
            .header-1 {
                font-family: BaseBold;
                font-size: 6em;
                padding: 0;
                margin: 0;
                color: #eaa83c;
            }
            .header-2 {
                font-family: BaseLight;
                font-size: 4em;
                color: white;
                padding: 0;
                margin: 0;
            }
            .sticky-title {
                width: 100%;
                font-family: BaseBold;
                font-size: 2.2em;
                text-align: center;
                color: #eaa83c;
            }
            .sticky-text {
                font-size: 1.8em;
                text-align: center;
            }
            .section-sticky-content {
                width: 100%;
                background-color: black;                
            }
            .my-sticky {
                width: 100%;
                height: 100vh;
                background-image: url("/images/johnson-health-tech-france-treadmill-2-1.jpeg");
                background-size: auto 100vh;
                background-repeat: no-repeat;
                position: sticky;
                top: 0;
            }
            .my-sticky-filter {
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.55);
            }
            @media screen and (max-width: 600px) {
                .header-1 {
                    border: none;
                    font-size: 3em;
                }
                .header-2 {
                    font-size: 2.5em;
                }
                .sticky-title {
                    width: 100%;
                    font-family: BaseBold;
                    font-size: 1.8em;
                    text-align: center;
                }
                .sticky-text {
                    font-size: 1.2em;
                    text-align: center;
                }
                .sticky-card {
                    min-height: 120px;
                }
                .my-sticky {
                    background-position: -250px;
                }
            }
        `}</style>
    </>
    )
}
