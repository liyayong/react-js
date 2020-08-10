import React from 'react';
import {Switch, Route} from 'react-router-dom'
//组件导入
import DashBoard from '../view/dashboard/index'
import User from '../view/department/list'
import UserAdd from '../view/department/add'
class ContentMaiin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
              <Switch>
                  <Route exact path='/'  component={DashBoard}></Route>
                  <Route exact path='/dashBoard/department/list'  component={User}></Route>
                  <Route exact path='/dashBoard/department/add'  component={UserAdd}></Route>
              </Switch>
       );
    }
  }
   
  
  export default ContentMaiin;