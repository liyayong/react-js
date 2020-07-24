import React, { Component,Fragment } from 'react';
import './login.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../api/index'
class Regast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    onFinish = (values) => {
        //调用父组件方法，进行登录
        login(values).then(res=>{
            console.log(res,'res')
        })
    };
    change=()=>{
        //  去注册页面
        this.props.switch('regast')
    }
    componentDidMount(){

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
                            <Form.Item name='email' rules={[{ required: true, message: '用户名不能为空!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item name='passWord' rules={[{ required: true, message: '密码不能为空!' }]}>
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item name='code' rules={[{ required: true, message: '验证码不能为空!' }]}>
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="验证码"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" >
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