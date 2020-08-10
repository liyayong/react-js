import React, { Component,Fragment } from 'react';
import './index.css'
import { Layout } from 'antd'
//组件
import Asider from './comment/asider'
import Headers from './comment/header'
import ContentMain from '../../comtentJs/index'
const { Sider,Header,Content } = Layout
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFold:false,
        }
    }
    changeAsider=(value)=>{
        this.setState({
            isFold:value
        })
    }
    render() { 
        const {isFold} = this.state
        return ( 
            <Fragment>
                 <Layout className='contain'>
                    <Sider width={isFold?'150px':'250px'}>
                        <Asider />
                    </Sider>
                    <Layout>
                        <Header className='layout_header'>
                            <Headers isFold={this.changeAsider} />
                        </Header>
                        <Content className='layout_content'>
                            <ContentMain />
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
         );
    }
}
 
export default DashBoard;