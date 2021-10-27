import React from 'react';
import {useRouter} from 'next/router'
import {Drawer} from 'antd';

export const ContactUs = () => {
    const router = useRouter()
    
    return (
        <>
            <Drawer
                title="Conact us"
                placement="right"
                closable={false}
                visible={router.query.contact_us === 'open'? true : false }
                getContainer={false}
                width={"100%"}
                style={{ position: 'absolute'}}
                >
                <p>Contact us</p>
            </Drawer>
            <style jsx>{`

            `}</style>
        </>
    )
}