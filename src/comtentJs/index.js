import React from 'react';
import {Switch, Route} from 'react-router-dom'

//导入自动化工程
import allData from '../comtentJs/autoRouter'

class ContentMaiin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
              <Switch>
                  {
                      allData.map(item=>{
                        return <Route exact key={item.path} path={item.path}  component={item.component}></Route>
                      })
                  }
                  {/* <Route exact path='/'  component={DashBoard}></Route>
                  <Route exact path='/dashBoard/department/list'  component={User}></Route>
                  <Route exact path='/dashBoard/department/add'  component={UserAdd}></Route> */}
              </Switch>
       );
    }
  }
   
  
  export default ContentMaiin;