import React from 'react';
import {Layout} from 'antd';
const BaseHeader = Layout.Header;

export const Header = ({
  ...props
}) => {
  
  return (
    <BaseHeader
      {...props}
    />
  );
};
