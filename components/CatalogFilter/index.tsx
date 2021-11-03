import React from 'react'
import { Radio, Input, Space } from 'antd';

const CatalogFilter = () => {

  return (
      <div className='catalog-filter'>
          <br />
          <br />
        <div className='lg-filter'>
        <h2 className='text-color'>Filter</h2>
        <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            <br />
            <br />
            <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            <br />
            <br />
            <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            <br />
            <br />
            <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            <br />
            <br />
            <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            <br />
            <br />
            <h3 className='text-color'>Consolas technology</h3>
            <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                    <Radio value={1}><span className='text-color'>Option A</span></Radio>
                    <Radio value={2}><span className='text-color'>Option A</span></Radio>
                    <Radio value={3}><span className='text-color'>Option A</span></Radio>
                    <Radio value={4}><span className='text-color'>Option A</span></Radio>
                </Space>
            </Radio.Group>
            
        </div>
        


        <style jsx>{`
            .catalog-filter {
                
            }
            h2.text-color {
                color: #eaa83c;
                font-family: BaseBold;
            }
            h3.text-color {
                color: #eaa83c;
                font-family: BaseLight;
            }
            .text-color {
                color: white;
            }
            .lg-filter {
                width: 70%;
                margin: 0 auto;
                background-color: #000000;
                -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
                -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
                box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
                padding: 20px;
            }
        `}</style>
    </div>
  );
}

export default CatalogFilter;