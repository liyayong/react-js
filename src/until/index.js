import axios from 'axios'
import {message} from 'antd'

const instance = axios.create({
    baseURL:process.env.REACT_APP_API,
    timeout:5000,
    // headers:{}
})

instance.interceptors.request.use(function(config){
     // 在发送请求之前做些什么
    config.headers['Token'] = localStorage.getItem('token')
    config.headers['Username'] = localStorage.getItem('userName')

    return config;
},function(error){
    // 对请求错误做些什么


    return Promise.reject(error)
})

instance.interceptors.response.use(function(response){
    const res = response.data
    if(res.resCode==0){  //成功
        return response
    }else if(res.resCode==500){
        message.info(res.message)
       return Promise.reject(response)
    }
  
},function(error){
    return Promise.reject(error)
})

export default instance