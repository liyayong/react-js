import React, { Component,Fragment } from 'react';
import './login.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
class Regast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    change=()=>{
        this.props.switch('regast')
    }
    // 登录
    submit=()=>{
        this.props.submit()
    }
    render() { 
        return ( 
            <Fragment>
                <div className='content'>
                    <div className='login'>
                        <div className='header'>
                            <span>登录</span> 
                            <span onClick={this.change}>注册</span> 
                        </div>
                        <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submit}>
                                    登录
                                </Button>
                            </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Regast;