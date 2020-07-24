import React, { Component,Fragment } from 'react';
import './login.css'
import { Form, Input, Button,Row,Col } from 'antd';
import { UserOutlined, LockOutlined,AliwangwangOutlined } from '@ant-design/icons';
import { getSms } from '../../api/index'
class Regast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            code_disable:true
        }
    }
    onFinish = (values) => {
        //调用父组件的方法，进行注册 
        // this.props.subZC(values)

    };
    // 获取验证码
    getCode=()=>{
        const requestData={
            userName:this.state.userName,
            model:'register'
        }
        getSms(requestData).then(res=>{
            console.log(res)
        })
    }
    inputChange=(e)=>{
        let value = e.target.value
        this.setState({
            userName:value
        })
    }
    render() { 
        const {  userName,code_disable } = this.state
        return ( 
            <Fragment>
                <div className='content'>
                    <div className='login'>
                        <div className='header'>
                            <span>用户注册</span> 
                        </div>
                        <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item name="userName" rules={
                                [
                                    { required: true, message: '用户名不能为空!' },
                                    ({getFieldValue})=>({
                                        validator(rule,value){
                                            if(!value || getFieldValue('userName')===value){
                                                return Promise.resolve(this.setState({code_disable:false}))
                                            }else{
                                                return Promise.reject('用户名必填')
                                            }
                                        }
                                    })
                                ]
                                
                            }>
                                <Input value={userName} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item name="passWord" rules={[{ required: true, message: '密码不能为空!' }]}>
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                                />
                            </Form.Item>
                            <Form.Item name="register" rules={[{ required: true, message: '验证码!' }]}>
                                <Row gutter={13}>
                                    <Col span={15}>
                                    <Input  prefix={<AliwangwangOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                    </Col>
                                    <Col span={8}>
                                    <Button onClick={this.getCode} disabled={code_disable}>获取验证码</Button>
                                    </Col>
                                </Row>
                               
                               
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
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