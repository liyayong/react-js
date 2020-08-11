import server from '../until/index'

export function getUserList(data){
    return server.request({
        url:'/department/list/',
        method:'post',
        data
    })
}
export function addData(data){
   return server.request({
        url:'/department/add/',
        method:'post',
        data
    })
}