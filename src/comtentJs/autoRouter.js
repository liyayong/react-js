//自动化工程  ，读取文件，拿到文件path路径和component引用组件
const allData = []

const files = require.context('../view/',true,/\.js$/)    //第一个参数，表示要检查的文件路径，第二个布尔值是否要全部检索，第三个正则末尾为js的文件才会被检索
files.keys().map(item=>{
    //或者组件路径 path
    if(item.includes('./about')||item.includes('./asiderMenu')||item.includes('./dashboard')||item.includes('./home')||item.includes('./login')||item.includes('./proviter')||item.includes('./automation')) return false
    const fileName = item.split('.')
    const path = `/dashboard${fileName[1].toLowerCase()}`
    const component = files(item).default    //拿到每个模块组件
    const obj = {}
    obj.path = path
    obj.component = component
    allData.push(obj)
})

export default allData