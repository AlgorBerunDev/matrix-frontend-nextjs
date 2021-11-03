import React from 'react'
import Link from 'next/link';
import { Card } from 'antd';

const { Meta } = Card;
const CatalogProductCard = ({data}: any) => {

  return (
      <div className='catalog-product-card'>
          <Card
                
                style={{ width: 300, color: "yellow", background: "#444" }}
                type='inner'
                cover={<img 
                    alt="example"
                    src="/images/Climbmill_C50_XUR_Hero_1440x.png"
                    className='product-image-background'/>
                }
            >
                <Link href="/"><a className='card-header'>Lorem ipsum dolor</a></Link>
                <br />
                <img src="https://www.gymstogo.com/wp-content/uploads/2020/12/XIR_6-5-600x600.png" style={{width: 30}} />
                <img src="https://images.jhtassets.com/44f4486ff6d12dcb1107354929e3fc14809155be/" style={{width: 30}} />
                <img src="http://localhost:1337/uploads/optimized_console_thmb_touch_60_eff3c54607.png" className='console-link-item' />
                <img src="http://localhost:1337/uploads/optimized_console_thmb_gt_led_60_9ac8dcd41e.png" style={{width: 30}} />
            </Card>
        <style jsx>{`
            .catalog-product-card {
                width: 100%;
                background-color: transparent;
                display: flex;
                justify-content: center;
            }
            .product-card-image {
                width: 100%;
                min-width: 200px;
                height: 300px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .card-header {
                color: #eaa83c;
                /* color: white; */
                font-family: BaseBold;
                font-size: 1.2em;
            }
            .console-link-item {
                width: 30px;
                box-sizing: content-box;
                margin: 3px;
                padding: 4px;
            }
            .console-link-item:hover {
                outline: 0.2px #eaa83c solid;
                cursor: pointer;
            }
            .product-image-background {
                background: rgb(93,93,93);
                background: -moz-linear-gradient(124deg, rgba(93,93,93,1) 13%, rgba(69,69,69,1) 74%, rgba(87,86,86,1) 100%);
                background: -webkit-linear-gradient(124deg, rgba(93,93,93,1) 13%, rgba(69,69,69,1) 74%, rgba(87,86,86,1) 100%);
                background: linear-gradient(124deg, rgba(93,93,93,1) 13%, rgba(69,69,69,1) 74%, rgba(87,86,86,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5d5d5d",endColorstr="#575656",GradientType=1);
            }
        `}</style>
    </div>
  );
}

export default CatalogProductCard;