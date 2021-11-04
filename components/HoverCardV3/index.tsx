import { Button } from 'antd'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { base } from '../../features/config'
import { IUniqueProduct } from '../../features/unique-products'

export const HoverCardV3 = ({data}: {data: IUniqueProduct}) => {
    return <div className='hover-card-v3'>
        <img src={`${base.domain}${data?.image?.url}`} className='card-image' />
        <div className='hover'>
            <div className="headers">
                <ReactMarkdown>{data.children[0].header}</ReactMarkdown>
            </div>
            <div className='descriptions'>
                <ul>
                    {
                        data.children[0].lists.map(item => {
                            return <li key={item.id}>{item.text}</li>
                        })
                    }
                </ul>
                <Button type='link' href={data.children[0].path} size='large' style={{backgroundColor: "red"}}>Узнать цену</Button>
            </div>
        </div>
        <style jsx>{`
            .card-image {width: 100%;
            }
            .descriptions {
                display: none;
            }
            .descriptions ul {
                list-style: none;
            }
            .descriptions ul li {
                font-size: 1.2em;
            }
            .hover {
                width: 100%;
                min-height: 20%;
                box-sizing: border-box;
                padding: 20px;
                position: absolute;
                bottom: 0;
                transition: height 0.3s linear;
            }
            .headers {
                min-height: 20%;
                font-size: 1.2em;
                box-sizing: border-box;
                padding-right: 30%;
            }
            .hover-card-v3:hover .hover {
                width: 100vw;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
            }
            .hover-card-v3:hover .descriptions {
                display: block;
            }
            .descriptions ul {
                padding-left: 10px;
            }
            .descriptions ul li {
                font-size: 1em;
            }
            @media screen and (min-width: 768px) {
                
            }
        `}</style>
    </div>
}