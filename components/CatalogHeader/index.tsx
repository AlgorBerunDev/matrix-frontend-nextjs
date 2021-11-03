import React from 'react'
import { Breadcrumb, Col, Row } from 'antd';
import { HomeFilled, AppstoreFilled } from '@ant-design/icons';

const CatalogHeader = ({data}: any) => {

  return (
      <>
        <div className="catalog-header">
            <div className='catalog-header-content'>
                <div className='header-main'>
                    <div className='header'>Lorem, ipsum dolor.</div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <HomeFilled />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <AppstoreFilled />
                            <span>Cardio</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <img src="/images/Climbmill_C50_XUR_Hero_1440x.png" className='catalog-header-image' alt="." />
            </div>
            
        </div>
        <style jsx>{`
            .catalog-header {
                width: 100%;
                height: 300px;
                background-color: #444;
                display: flex;
                justify-content: center;
                /* background-image: url('/images/27122.jpg'); */
                background: rgb(73,73,73);
                background: -moz-linear-gradient(124deg, rgba(73,73,73,1) 0%, rgba(39,39,39,1) 49%, rgba(234,168,60,1) 49%, rgba(234,168,60,1) 100%);
                background: -webkit-linear-gradient(124deg, rgba(73,73,73,1) 0%, rgba(39,39,39,1) 49%, rgba(234,168,60,1) 49%, rgba(234,168,60,1) 100%);
                background: linear-gradient(124deg, rgba(73,73,73,1) 0%, rgba(39,39,39,1) 49%, rgba(234,168,60,1) 49%, rgba(234,168,60,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#494949",endColorstr="#eaa83c",GradientType=1);
                background-size: cover;
                background-position: right bottom;
                border-bottom: 1px solid #999999;
            }
            .catalog-header-content {
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column-reverse;
                justify-content: flex-start;
                align-items: center;
            }
            .header-main {
                text-align: center;
                padding-bottom: 10px;
            }
            .header {
                color: #eaa83c;
                font-family: BaseRegular;
                font-size: 1.3em;
            }
            @media screen and (max-width: 600px) {
                .header {
                    color: white;
                }
            }
            .catalog-header-image {
                width: 70%;
            }
            @media screen and (min-width: 600px) {
                .catalog-header-content {
                    width: 70%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                .header-main {
                    text-align: left;
                    padding-bottom: 0;
                }
                .catalog-header {
                    justify-content: center;
                }
                .header-main {
                    padding-right: 20px;
                    padding-bottom: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }
                .header {
                    color: #eaa83c;
                    font-family: BaseRegular;
                    font-size: 3em;
                }
                .catalog-header-image {
                    width: auto;
                    height: 100%;
                }
            }
        `}</style>
    </>
  );
}

export default CatalogHeader;