import React, { Component,Fragment } from 'react';
import './login.css'
import Regast from './regast'
import Gologin from './goLogin'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                formType:'login',
                name:'',
                password:'',
          }
    }
    // 去注册页面
    switch=(value)=>{
        this.setState({
            formType:value
        })
    }
    // 注册
    zhuce=(value)=>{
        this.setState({
            formType:'login',
            name:value.userName,
            password:value.passWord,
        },()=>{
            
        })
    }
    // 登录
    submit=()=>{

    }
    render() { 
        return ( 
            <Fragment>
                {
                    this.state.formType==='login'?<Gologin switch={this.switch} submit={this.submit}></Gologin>:<Regast subZC={this.zhuce}></Regast>
                }
                
            </Fragment>
         );
    }
}
 
export default Login;