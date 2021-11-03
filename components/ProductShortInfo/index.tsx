import React from 'react';
import { Button, Image, Tooltip } from 'antd';
import Link from 'next/link'

const tooltipText = ({header, text}: {header: string, text: string}) => {
    return <div>
        <span style={{color: "#eaa83c", fontSize: "1.5em"}}>Touch</span>
        <br />
        <span style={{color: "white"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iusto ipsa voluptatum fuga laborum et at deserunt harum culpa est? </span>
    </div>
}
export const ProductShortInfo = () => {
    return <div className='product-short-info'>

        <h1 className='text-color'>Performance Elliptical</h1>
        <h2 className='text-color'>WITH LED CONSOLE</h2>
        <h6 className='text-color'>EP-PS-LED</h6>
        <p className='text-color'>
            The premium design of our durable Performance Elliptical offers a dynamic exercise experience. Patented suspension design minimizes noise and friction to extend product life, while constant rate of acceleration and refined ergonomics make workouts ultra-smooth and comfortable. A removable disk streamlines service and maintenance, minimizing downtime.
        </p>
        <div className='available-consoles'>ДОСТУПНЫЕ КОНСОЛИ</div>
        <br />
        <Link href={"/"}>
            <a>
                <Tooltip placement='bottom' title={() => tooltipText({header: "Touch", text: ""})}>
                    <Image preview={false} src={"http://localhost:1337/uploads/optimized_console_thmb_gt_led_60_9ac8dcd41e.png"}/>
                </Tooltip>
            </a>
        </Link>
        <Link href={"/"}>
            <a>
                <Tooltip placement='bottom' title={() => tooltipText({header: "Touch", text: ""})}>
                    <Image preview={false} src={"http://localhost:1337/uploads/optimized_console_thmb_gt_led_60_9ac8dcd41e.png"}/>
                </Tooltip>
            </a>
        </Link>
        <Link href={"/"}>
            <a>
                <Tooltip placement='bottom' title={() => tooltipText({header: "Touch", text: ""})}>
                    <Image preview={false} src={"http://localhost:1337/uploads/optimized_console_thmb_gt_led_60_9ac8dcd41e.png"}/>
                </Tooltip>
            </a>
        </Link>
        <Link href={"/"}>
            <a>
                <Tooltip placement='bottom' title={() => tooltipText({header: "Touch", text: ""})}>
                    <Image preview={false} src={"http://localhost:1337/uploads/optimized_console_thmb_gt_led_60_9ac8dcd41e.png"}/>
                </Tooltip>
            </a>
        </Link>
        
        <br />
        <br />
        <Button type='link' href='/contact_us' style={{backgroundColor: "#eaa83c"}} size='large'><span style={{color: "black", fontFamily: "BaseLight"}}>Contact us</span></Button>
        
        <style jsx>{`
            .product-short-info {
                padding: 20px;
                padding-top: 40px;
            }
            h1.text-color {
                color: #eaa83c;
                font-family: BaseBold;
                font-size: 3em;
                margin: 0;
                padding: 0;
            }
            h2.text-color {
                color: #cccccc;
                font-size: 2em;
                font-family: BaseLight;
                margin: 0;
                padding: 0;
            }
            h6.text-color {
                color: #ffffff;
                font-size: 1.3em;
                font-family: BaseLight;
                text-align: right;
            }
            p.text-color {
                color: #bbbbbb;
                font-size: 1.2em;
                font-family: BaseRegular;
                text-align: left;
            }
            .available-consoles {
                border-bottom: 2px solid #eaa83c;
                font-size: 2em;
                color: #eaa83c;
            }
        `}</style>
    </div>
}