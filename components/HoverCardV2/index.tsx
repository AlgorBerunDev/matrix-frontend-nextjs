import React from 'react'
import { base } from '../../features/config'
import IImage from '../../features/Interfaces/IImage'


export interface ICard {
    id: number,
    name: string,
    region: string,
    image: IImage
}
export const HoverCardV2 = ({data}: {data: ICard}) => {
    return <div className='card'>
        <img src={`${base.domain}${data?.image?.formats?.medium?.url || data?.image?.url}`} alt="." style={{width: "100%"}}/>
        <div className='hover-effect'>
            <div className='hover-content'>
                <div className='name'>{data.name}</div>
                <div className='region'>{data.region}</div>
            </div>
        </div>
        <style jsx>{`
            .card {
                width: 95%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                border: 1px solid #333333;
                margin-bottom: 50px;
                position: relative;
            }
            .hover-effect {
                width: 100%;
                height: 100px;
                background-color: rgba(0,0,0,0.4);
                transition: all 0.3s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
            }
            .card:hover .hover-effect {
                width: 100%;
                height: 100%;
            }
            .city, .region {
                font-family: BaseLight;
                font-size: 1.4em;
                text-transform: uppercase;
            }
            .name {
                font-family: BaseBold;
                font-size: 1.6em;
                text-transform: uppercase;
                color: #eaa83c;
            }
        `}</style>
    </div>
}