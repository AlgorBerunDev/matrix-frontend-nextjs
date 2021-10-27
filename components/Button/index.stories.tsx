import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {LogoutOutlined} from '@ant-design/icons'

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AntDesign/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    block: {
        defaultValue: false,
        control: {type: "boolean"},
        description: "Option to fit button width to its parent width",
        table: {
            type: {
                summary: "boolean"
            },
            defaultValue: {
                summary: false
            }
        }
    },
    danger: {
        defaultValue: false,
        control: {type: "boolean"},
        description: "Set the danger status of button",
        table: {
            type: {
                summary: "boolean"
            },
            defaultValue: {
                summary: false
            }
        }
    },
    disabled: {
        defaultValue: false,
        control: {type: "boolean"},
        description: "Disabled state of button",
        table: {
            type: {
                summary: "boolean"
            },
            defaultValue: {
                summary: false
            }
        }
    },
    ghost: {
        defaultValue: false,
        control: {type: "boolean"},
        description: "Make background transparent and invert text and border colors",
        table: {
            type: {
                summary: "boolean"
            },
            defaultValue: {
                summary: false
            }
        }
    },
    href: {
        control: {type: "text"},
        description: "Redirect url of link button",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: {
                summary: "-"
            }
        }
    },
    htmlType: {
        defaultValue: "button",
        description: 'Set the original html type of button.',
        table: {
            type: {
                summary: "string"
            },
            defaultValue: {
                summary: "button"
            }
        }
    },
    icon: {
        description: "Set the icon component of button",
        table: {
            type: {
                summary: "ReactNode",
            },
        }
    },
    loading: {
        defaultValue: false,
        control: {type: "boolean"},
        description: "Set the loading status of button",
        table: {
            type: {
                summary: "boolean | {delay: number}"
            },
            defaultValue: {
                summary: "boolean"
            }
        }  
    },
    shape: {
        defaultValue: "default",
        options: ['default', 'circle', 'round'],
        control: {type: "radio"},
        description: "Can be set button shape",
        table: {
            type: {
                summary: "string"
            },
            defaultValue: {
                summary: "default"
            }
        }
    },
    size: {
        defaultValue: "middle",
        description: "Set the size of button",
        options: ["small", 'middle', 'large'],
        control: {type: "radio"},
        table: {
            type: {
                summary: "string"
            },
            defaultValue: {
                summary: "middle"
            }
        }
    },
    target: {
        control: {type: "text"},
        description: "Same as target attribute of a, works when href is specified",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: {
                summary: "-"
            }
        }
    },
    type: {
        defaultValue: 'default',
        options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
        control: {type: 'radio'},
        description: "Markdown description",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: {
                summary: "default",
            }
        }
    },
    onClick: {
        control: {type: "object"}
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Button</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  type: 'primary'
};

export const Ghost = Template.bind({});
Ghost.args = {
    type: 'ghost'
};

export const Dashed = Template.bind({});
Dashed.args = {
    type: 'dashed',
};

export const Icon = Template.bind({});
Icon.args = {
    type: 'primary',
    icon: <LogoutOutlined />
};