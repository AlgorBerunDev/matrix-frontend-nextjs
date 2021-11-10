import React from 'react'
import { Form, Input, Button, Select, Row, Col, message } from 'antd';
import router from 'next/router';
import { Footer } from '../components/Footer';
import { base } from '../features/config';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const hide = message.loading("Ваше сообщение отправляется");
    fetch(base.domain+"/messages",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      hide();
      
      message.success("Ваше сообщение успешно отправлено!");
      router.push("/");
    })
    .catch(e => {
      message.error(e.message)
    })
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
      <>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className='form'>
            <Form {...layout} form={form} layout='vertical' name="control-hooks" onFinish={onFinish}>
                  <Form.Item name="name" label="ФИО" rules={[{ required: true, message: "Имя обязательно" }]}>
                      <Input placeholder='Полное имя' />
                  </Form.Item>
                  <Form.Item name="phone" label="Номер телефона" rules={[{ required: true, message: "Номер телефона обязательно" }]}>
                      <Input placeholder='+998(91)_______' />
                  </Form.Item>
                  <Form.Item name="email" label="Эл. адрес" rules={[{ required: true, message: "Эл. адрес обязательно" }]}>
                      <Input placeholder='example@gmail.com' />
                  </Form.Item>
                  <Form.Item name="description" label="Сообщения" >
                      <Input.TextArea placeholder='Например: напишите, что хотите' />
                  </Form.Item>
                  <Form.Item>
                      <Button type="primary" className='primary' htmlType="submit" style={{backgroundColor: "#eaa83c"}}>
                        Отправить
                      </Button>
                  </Form.Item>
                </Form>
            </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <div className='contact_paragraph'>
            <h1 style={{fontFamily: "BaseBold", color: "#eaa83c"}}>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi placeat consequatur veritatis, ullam quod explicabo at laboriosam, eius, doloremque aliquid vitae facilis perferendis nostrum cum deserunt pariatur molestias fuga voluptate architecto distinctio. Delectus sit doloremque quae vel libero hic, quia incidunt minus eius veritatis blanditiis similique assumenda tempora sed sequi.  
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi placeat consequatur veritatis, ullam quod explicabo at laboriosam, eius, doloremque aliquid vitae facilis perferendis nostrum cum deserunt pariatur molestias fuga voluptate architecto distinctio. Delectus sit doloremque quae vel libero hic, quia incidunt minus eius veritatis blanditiis similique assumenda tempora sed sequi.  
            </p>
          </div>
        </Col>
      </Row>
        <style global jsx>{`
            .form {
              width: 100%;
              box-sizing: border-box;
              padding: 40px;
            }
            .contact_paragraph {
              padding: 40px;
              padding-top: 50px;
            }
            .footer-pos {
              position: absolute;
              bottom: 0;
            }
            @media screen and (max-width: 600px) {
              .contact_paragraph {
                padding: 40px;
                padding-top: 90px;
              }
              .footer-pos {
                position: initial;
              }
            }
            .ant-btn.ant-btn-primary.primary {
                background-color: #0084ff;
            }
            .ant-form-item-label .ant-form-item-required {
              color: #eaa83c;
            }
            .ant-input, .ant-input:focus {
              color: #ffffff;
              font-family: BaseRegular;
              outline: 1px solid #eaa83c;
            }
            .ant-input::placeholder {
              color: #aaaaaa;
              opacity: 1; /* Firefox */
            }
            
            .ant-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
             color: #aaaaaa;
            }
            
            .ant-input::-ms-input-placeholder { /* Microsoft Edge */
             color: #aaaaaa;
            }
            .ant-input::-moz-selection { /* Code for Firefox */
              color: white;
              background: white;
            }
            .ant-input::selection {
              color: black;
              background: white;
            }
        `}</style>
    </>
  );
}

export default ContactUs;