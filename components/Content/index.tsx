import React, {Component} from 'react'
import {Navigation} from '../Navigation'
import {ContactUs} from '../ContactUs'
import { useRouter } from 'next/router';

export const Content = (props: any) => {
    const router = useRouter()
    console.log("pathname", router.pathname)
    return <div id="scroll-content" className="scroll-content">
        {props.children}
        <ContactUs />
        <Navigation />
        <style jsx>{`
            .scroll-content {
                width: 100%;
                height: 100vh;
                background-color: #111111;
                overflow: hidden;
                overflow-y: scroll;
                color: white;
                box-sizing: border-box;
            }
            @media screen and (max-width: 572px) {
                .scroll-content {
                    padding-top: 7vh;
                    top: 7vh;
                    height: 93vh;
                }
            }
        `}</style>
    </div>
}

export default Content;