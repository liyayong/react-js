import server from '../until/index'

export function login(data){
   return server.request({
        url:'/login/',
        method:'post',
        // params:data,  //请求为get时
        data:data,  //请求为post时
    })
}
export function getSms(data){
    return server.request({
        url:'/getSms/',
        method:'post',
        data
    })
}