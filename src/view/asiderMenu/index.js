import React, { Component,Fragment } from 'react';
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import '../../index.css'
import router from '../../router/index'

const { SubMenu } = Menu
class Asider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //子级菜单
    renderSubmenu=({title,key,child})=>{
        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title+'1'}>
                {
                    child&&child.map(item=>{
                       return item.child&&item.child.length>0?this.renderSubmenu(item):this.renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }
    //无子级的
    renderMenu=({title,key})=>{
         return (
            <Menu.Item key={key}>
                <Link to={key}> {title}</Link>
            </Menu.Item>
         )
    }
    render() { 
        return ( 
            <Fragment>
                <h1  className='logo'>
                    <span className='logospan'>控制台</span>
                </h1>
                <Menu
                    theme='dark'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            router&&router.map(fristItem=>{
                                return fristItem.child&&fristItem.child.length>0?this.renderSubmenu(fristItem):this.renderMenu(fristItem)
                            })
                        }
                </Menu>
            </Fragment>
         );
    }
}
 
export default Asider;