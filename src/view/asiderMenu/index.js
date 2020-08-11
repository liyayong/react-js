import React, { Component,Fragment } from 'react';
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import '../../index.css'
import router from '../../router/index'

const { SubMenu } = Menu
class Asider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedKeys:['/dashBoard/department/add'],
            openKeys:['/dashBoard/department']
         }
    }
    componentDidMount(){
        const pathName = this.props.location.pathname
        const arr = pathName.split('/').slice(0,3).join('/')
        const heightLight = {
            selectedKeys:pathName,
            openKeys:arr
        }
        this.lightHeight(heightLight)
    }
    //子级菜单
    renderSubmenu=({title,key,child})=>{
        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title}>
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
    onOpenMenu = (openKeys) =>{
        console.log(openKeys)
        this.setState({
            openKeys:openKeys[openKeys.length-1]
        })
    }
    onMenuSelect=({ item, key, keyPath, domEvent })=>{
            const heightLight = {
                selectedKeys:key,
                openKeys:keyPath[keyPath.length-1]
            }
            this.lightHeight(heightLight)
    }

    lightHeight=({selectedKeys,openKeys  })=>{
        this.setState({
            selectedKeys:[selectedKeys],
            openKeys:[openKeys]
        })
    }
    render() { 
        const {selectedKeys , openKeys} = this.state
        return ( 
            <Fragment>
                <h1  className='logo'>
                    <span className='logospan'>控制台</span>
                </h1>
                <Menu
                    theme='dark'
                    mode="inline"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onClick={this.onMenuSelect}
                    onOpenChange = {this.onOpenMenu}
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
 
export default withRouter(Asider);