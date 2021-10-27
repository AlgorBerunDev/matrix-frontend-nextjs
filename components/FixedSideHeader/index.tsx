import React from 'react'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import Icon, {
    InstagramFilled,
    PhoneFilled,
    MenuOutlined,
    MailOutlined,
    FacebookFilled,
    CloseOutlined,
    InfoCircleFilled,
    HomeOutlined
} from '@ant-design/icons'
import Router, { useRouter } from 'next/router';
import {
    useAppDispatch,
    useAppSelector,
  } from '../../app/hooks';
import { openMenu, closeMenu, toggleMenu, isOpenMenu } from '../../features/menu';


export const FixedSideHeader = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(isOpenMenu);
    const toggleNavigation = () => {
        dispatch(toggleMenu())
    }
    return <div className='fixed-side-header'>
        <div className='side-header-top'>
            <Row gutter={{sm: 0, md: 5}}>
                <Col span={24}>
                    <div className='content-center'>
                        <Button type='primary'  size='large' className='social' onClick={toggleNavigation} icon={isOpen? <CloseOutlined/> : <MenuOutlined/>} />
                    </div>
                </Col>
                <Col sm={0} md={24} lg={24} xl={24} xxl={24}><div className='content-center dn-sm'><Link href={"/"}><Button type='primary' className='social' icon={<HomeOutlined/>} /></Link></div></Col>
                <Col sm={0} md={24} lg={24} xl={24} xxl={24}><div className='content-center dn-sm'><Link href={"/contact_us"}><Button type='primary' className='social' icon={<MailOutlined/>} /></Link></div></Col>
                <Col sm={0} md={24} lg={24} xl={24} xxl={24}><div className='content-center dn-sm'><Link href={"/contact_us"}><Button shape='circle' className='social' icon={<InfoCircleFilled style={{fontSize: '1.5em'}} />} /></Link></div></Col>
            </Row>
        </div>
        <Link href={"/"}>
            <div className='side-header-center'></div>
        </Link>
        <div className='side-header-bottom'>
            <Row gutter={[5,5]}>
                <Col sm={8} md={24} lg={24} xl={24} xxl={24}><div className='content-center'><Button shape='circle' className='social' icon={<PhoneFilled/>} /></div></Col>
                <Col sm={8} md={24} lg={24} xl={24} xxl={24}><div className='content-center'><Button shape='circle' className='social' icon={<FacebookFilled/>} /></div></Col>
                <Col sm={8} md={24} lg={24} xl={24} xxl={24}><div className='content-center'><Button shape='circle' className='social' icon={<InstagramFilled/>} /></div></Col>
                <Col sm={8} md={24} lg={24} xl={24} xxl={24}><div className='content-center'><Button shape='circle' className='social' icon={<Icon component={() => (<img src="/icons/free-icon-telegram-226253.png"/>)} />} /></div></Col>
            </Row>
        </div>
        <style jsx>{`
            .fixed-side-header {
                width: 100%;
                height: 100vh;
                background-color: #000;
                box-sizing: border-box;
                border-right: 1px solid #999;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .side-header-top, .side-header-center, .side-header-bottom {
                width: 100%;
                height: 33vh;
                box-sizing: border-box:
                padding: 5px;
                display: flex;
                justify-content: center;
            }
            .side-header-top {
                display: flex;
                align-items: flex-start;
                padding-top: 10px;
            }
            .side-header-bottom {
                display: flex;
                align-items: flex-end;
                padding-bottom: 10px;
            }
            .side-header-center {
                background-image: url("/icons/header_matrix_logo.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;
            }
            .content-center {
                display: flex;
                justify-content: center;
            }
            .social, .ant-btn.ant-btn-circle.ant-btn-icon-only.social {
                border-color: red;
                outline-color: green;
            }
            @media screen and (max-width: 576px) {
                .fixed-side-header {
                    width: 100vw;
                    height: 7vh;
                    padding: 5px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                }
                .side-header-top, .side-header-center, .side-header-bottom  {
                    height: 100%;
                }
                .side-header-top {
                    width: 30%;
                    padding: 0;
                    align-items: center;
                }
                .side-header-center {
                    background-image: url("/icons/header_matrix_logo_horizontal.png");
                    background-size: 70%;
                    background-position: center;
                }
                .side-header-bottom, .dn-sm {
                    display: none;
                }
            }
        `}</style>
    </div>
}