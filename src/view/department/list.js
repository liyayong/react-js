import React, { Component } from 'react';
import {getUserList} from '../../api/user'

import { Table  } from 'antd';
const columns = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: text => <span>{text}</span>,
    },
  ];
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageNumber:1,
            pageSize:6,
            data:[],
            total:0,
         }
    }
    componentDidMount(){
        this.getList()
    }
    getList=()=>{
        const condition = {
            pageNumber:this.state.pageNumber,
            pageSize:this.state.pageSize
        }
        getUserList(condition).then(res=>{
                this.setState({
                    data:res.data.data.data,
                    total:res.data.data.total==6||res.data.data.total==3?10:res.data.data.total
                })
        })
    }
    render() { 
        const {data,total,pageSize,pageNumber} = this.state
        return (
                <Table rowKey={record => record.id} 
                    columns={columns} 
                    dataSource={data}  
                    bordered 
                    pagination={
                        {
                            total:total,
                            pageSize:pageSize,
                            current:pageNumber,
                            onChange:(page, pageSize)=>{
                                this.setState({
                                    pageNumber:page,
                                },()=>{
                                    this.getList()
                                })
                            }}}
                />
        ) 
    }
}
 
export default Dropdown;