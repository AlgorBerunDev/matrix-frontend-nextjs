import React from "react";
import { Radio, Input, Space } from "antd";
import { IFilterGroup, IFilter } from "../../features/catalog/index";

const CatalogFilter = ({ data }: { data: IFilter | null }) => {
  return (
    <div className="catalog-filter">
      <br />
      <br />
      <div className="lg-filter">
        <h2 className="text-color">Фильтр</h2>
        {data?.filter_groups.map((item) => {
          return (
            <div key={item.id}>
              <h3 className="text-color">{item.header}</h3>
              <Radio.Group onChange={() => {}} value={1}>
                <Space direction="vertical">
                  {item.filter_types.map((filter_items) => {
                    return (
                      <Radio value={filter_items.id} key={filter_items.id}>
                        <span className="text-color">{filter_items.title}</span>
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
              <br />
              <br />
            </div>
          );
        })}
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
};

export default CatalogFilter;
