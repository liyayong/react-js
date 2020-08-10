const router = [
    {   
        title:'首页',
        icon:'bar',
        key:'/dashBoard',
    },
    {   
        title:'部门管理',
        icon:'bar',
        key:'/department',
        child:[
            {title:'部门列表',key:'/dashBoard/department/list',icon:''},
            {title:'添加部门',key:'/dashBoard/department/add',icon:''},
        ],
    },
]
export default router