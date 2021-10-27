import React from 'react';
import {Button as BaseButton} from 'antd';
import type {ButtonProps} from 'antd';


export const Button = (props: ButtonProps) => {
  
  return (
    <BaseButton
      {...props}
    />
  );
};
