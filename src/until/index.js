import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.REACT_APP_API,
    timeout:5000,
    // headers:{}
})

instance.interceptors.request.use(function(config){
     // 在发送请求之前做些什么


    return config;
},function(error){
    // 对请求错误做些什么


    return Promise.reject(error)
})

instance.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export default instance