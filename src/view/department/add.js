import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,Radio, message  } from 'antd';
import { addData } from '../../api/user'
import { withRouter } from 'react-router-dom'
import resolve from 'resolve';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const { TextArea } = Input;
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            status:0
        }
    }
    componentDidMount(){
        console.log(this.state.status)
    }
    //提交成功的回调
    onFinish=(value)=>{
        console.log(value)
        addData(value).then(res=>{
            message.success('添加成功')
            this.props.history.push('list')
        })
    }
    //提交失败的回调
    onFinishFailed=({ values, errorFields, outOfDate })=>{

    }
    onChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            status:e.target.value
        })
    }
    render() { 
        const {status } =  this.state
        return ( 
            <Form
            initialValues={{status:0,number:0}}
            {...layout}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="部门名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入部门名称',
                },
              ]}
            >
              <Input placeholder='请输入部门名称' />
            </Form.Item>
      
            <Form.Item
              label="部门人数"
              name="number"
              rules={[
                {
                  required: true,
                  message: '请输入部门人数',
                },
                ({getFieldValue})=>({
                    validator(rule,value){
                        console.log(!value)
                        if(value!==0&&getFieldValue('number')===value){
                            return Promise.resolve()
                        }else{
                            return Promise.reject('部门人数不能为零')
                        }
                    }
                })
              ]}
            >
             <Input placeholder="请输入部门人数" type='number' />
            </Form.Item>
            <Form.Item
              label="禁启用"
              name="status"
            >
              <Radio.Group onChange={this.onChange} value={status} >
                <Radio value={0}>启用</Radio>
                <Radio value={1}>禁用</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item
              label="介绍"
              name="content"
              rules={[
                {
                  required: true,
                  message: '请输入内容',
                },
              ]}
            >
             <TextArea placeholder="请输入内容" rows={3} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
         );
    }
}
 
export default withRouter(Dropdown);