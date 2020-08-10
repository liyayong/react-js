import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import DashBoard from './view/dashboard/index'
// 引入组件
// import Home from './view/home/home'
import About from './view/about/about'
import Login from './view/login/login'
//引入私有组件
import ProviteRouter from './view/proviter/index'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        {/**
          * 私有化组件：provite
          * 
          * 
          *  */}
        {/**
         * 路由语法：
         * 1、component={Login}
         * 2、render={()=><Login />}    这种表达式的可以加个三元运算去判断路由只指向哪儿
         * 
         *  */}
     
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/about' component={About}></Route>
                {/* <Route path='/dashBoard' component={DashBoard}></Route> */}
                <ProviteRouter path='/dashBoard' component={DashBoard} />
            </Switch>
        </HashRouter>
      </div>
     );
  }
}
 

export default App;
