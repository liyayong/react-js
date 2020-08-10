import React, { Component,Fragment } from 'react';
import './login.css'
import { Form, Input, Button,Row,Col,message } from 'antd';
import { UserOutlined, LockOutlined,AliwangwangOutlined } from '@ant-design/icons';
import { login,getSms } from '../../api/index'
//增加一个登录白名单  通过这个高阶组件包装后会返回出来一个 history ,通过props可以获取，进行页面跳转
import { withRouter } from 'react-router-dom'
class Regast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_disable:true,
            username:'',
            code:"",
            passWord:''
        }
    }
    onFinish = (values) => {
        login(values).then(res=>{
            console.log(res,'res')
            message.success('登录成功')
            //路由跳转
            this.props.history.push('/dashBoard')
            //存个假的个人信息和token
            localStorage.setItem('info',{username:'小栗',token:'11223'})
        })
    };
    change=()=>{
        //  去注册页面
        this.props.switch('regast')
    }
    getCode=()=>{
        // 获取验证码
        const requestData={
            username:this.state.username,
            model:'login'
        }
        getSms(requestData).then(res=>{
            let code = res.data.message.split('：')[1]
            message.success(`${code}`,5)
        })
    }
    inputChange=(e)=>{
        let value = e.target.value
        this.setState({
            username:value
        })
    }
    codeChange=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    render() { 
        const {  username,code_disable,code,passWord } = this.state
        const _this = this
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
                            <Form.Item name='username' rules={
                                [
                                    { required: true, message: '用户名不能为空!' },
                                    ({getFieldValue})=>({
                                        validator(rule,value){
                                            if(!value || getFieldValue('username')===value){
                                                    _this.setState({
                                                        code_disable:false
                                                    })
                                                return Promise.resolve()
                                            }else{
                                                return Promise.reject('用户名必填')
                                            }
                                        }
                                    })
                                ]
                                
                            }>
                                <Input value={username}  onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item name='passWord' rules={[{ required: true, message: '密码不能为空!' }]}>
                                <Input
                                value={passWord}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item name='code' rules={[{ required: true, message: '验证码不能为空!' }]}>
                                 <Row gutter={13}>
                                    <Col span={15}>
                                    <Input value={code} onChange={this.codeChange} prefix={<AliwangwangOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                    </Col>
                                    <Col span={8}>
                                    <Button onClick={this.getCode} disabled={code_disable}>获取验证码</Button>
                                    </Col>
                                </Row>
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
 
export default withRouter(Regast);