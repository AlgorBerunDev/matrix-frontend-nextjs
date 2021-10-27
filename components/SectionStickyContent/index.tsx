import { Col, Row } from 'antd';
import {useState, useEffect} from 'react'
import { useGetWhyQuery } from '../../features/why-are-we';
import { IWhy } from '../../features/why-are-we/index';

export const SectionStickyContent = () => {
    const [lineFixed, setLineFixed] = useState<{top?: number, bottom?: number}>();
    const [backgroundPosition, setBackgroundPosition] = useState("top")
    const why = useGetWhyQuery<{data: IWhy, isLoading: boolean}>(0);
    useEffect(() => {
        const onScroll: EventListener = (event: Event) => { // <-- DOM-EventListener
            const el = document.getElementById("section-sticky-content")?.getBoundingClientRect();
            const top = el!.y;
            const bottom = el!.bottom - event.target?.getBoundingClientRect()!.height;
            
            let lineFixedTop = (lineFixed)? lineFixed.top : top > 0? 1 : top < 0? -1 : 0;
            let lineFixedBottom = (lineFixed)? lineFixed.bottom : bottom > 0? 1 : bottom < 0? -1 : 0;

            if(lineFixed) {
                
                if(top < 0 && lineFixedTop! >= 0) {
                    setLineFixed(state => ({...state, top: -1}))
                } else if(top > 0 && lineFixedTop! <= 0) {
                    setLineFixed(state => ({...state, top: 1}))
                } else if(top === 0 && lineFixedTop !== 0) {
                    setLineFixed(state => ({...state, top: 0}))
                }
    
                if(bottom < 0 && lineFixedBottom! >= 0) {
                    setLineFixed(state => ({...state, bottom: -1}))
                } else if(bottom > 0 && lineFixedBottom! < 0) {
                    setLineFixed(state => ({...state, bottom: 1}))
                } else if(bottom === 0 && lineFixedBottom !== 0) {
                    setLineFixed(state => ({...state, bottom: 0}))
                }
            } else {
                setLineFixed({
                    top: lineFixedTop,
                    bottom: lineFixedBottom,
                })
            }
            
        };
    
        const win: HTMLElement = document.getElementById("scroll-content")!
        win.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        if((lineFixed?.top!) === 1) {
            setBackgroundPosition("top")
        } else if((lineFixed?.bottom!) <= 0) {
            
            setBackgroundPosition("bottom")
        } else {
            
            setBackgroundPosition("fixed")
        }
    }, [lineFixed]);
    return (<>
        <div className={`section-sticky-content status-${backgroundPosition}`} id="section-sticky-content">
            <div className='content'>
                <div className='headers'>
                    <div className='header-1'>ПОЧЕМУ MATRIX?</div>
                    <div className='header-2'>ТОЛЬКО ФАКТЫ</div>
                </div>
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
                padding-top: 400px;
                padding-bottom: 400px;
                background-color: rgba(0,0,0,0.7);
                text-align: center;
            }
            .header-1 {
                font-family: BaseBold;
                font-size: 6em;
                padding: 0;
                margin: 0;
                color: #eaa83c;
                /* border: 2px solid #eaa83c; */
                max-width: 800px;
                margin: 0 auto;
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
                background-image: url("/images/johnson-health-tech-france-treadmill-2-1.jpeg");
                background-size: auto 100vh;
                background-repeat: no-repeat;
            }
            .status-top {
                background-attachment: scroll;
                background-position: calc((100vw/24) * (-1)) top;
            }
            .status-fixed {
                background-attachment: fixed;
                background-position: left top;
            }
            .status-bottom {
                background-attachment: scroll;
                background-position: calc((100vw/24) * (-1)) bottom;
            }
            @media screen and (max-width: 600px) {
                .status-top {
                    background-attachment: scroll;
                    background-position: left top;
                }
                .status-bottom {
                    background-attachment: scroll;
                    background-position: left bottom;
                }
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
            }
        `}</style>
    </>
    )
}
