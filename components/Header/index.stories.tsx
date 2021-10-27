import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {LogoutOutlined} from '@ant-design/icons'

import { Header } from '.';

export default {
  title: 'AntDesign/Layout',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({})
