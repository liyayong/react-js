import React, { Component,Fragment } from 'react';
import { Menu, Dropdown } from 'antd';
import {MenuFoldOutlined, FullscreenExitOutlined, CaretDownOutlined} from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFold:false,
            fullscreen:false
         }
    }
    leftClick=()=>{
        this.setState({
            isFold:!this.state.isFold
        },()=>{
            this.props.isFold(this.state.isFold)
        })
    }
    rightClick=()=>{
        const ele = document.documentElement
        if(this.state.fullscreen){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }else{
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullScreen) {
                ele.webkitRequestFullScreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                // IE11
                ele.msRequestFullscreen();
            }
        }
        this.setState({
            fullscreen:!this.state.fullscreen
        })
    }
    goOut=()=>{
        this.props.history.push('/')
    }
    render() { 
        const menu  = (
            <Menu>
                <Menu.Item>
                <span onClick={this.goOut}>
                    退出登录
                </span>
                </Menu.Item>
            </Menu>
        )
        return ( 
            <Fragment>
                <div className='headerFlex'>
                    <div className='leftBtn' onClick={this.leftClick}>
                        <MenuFoldOutlined />     
                    </div>
                    <div >
                        <div className='rightBtn' onClick={this.rightClick}>
                            <FullscreenExitOutlined style={{fontSize:'24px',lineHeight:'75px'}}/>
                        </div>
                        <div className='rightBtn'>
                            <Dropdown overlay={menu} trigger={['hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                     <CaretDownOutlined style={{fontSize:'24px',lineHeight:'75px'}}/>
                                </a>
                            </Dropdown>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default withRouter(Header);