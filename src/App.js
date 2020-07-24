import React from 'react';
import './App.css';
import {Switch, Route,hashHistory,Link, HashRouter} from 'react-router-dom'
// 引入组件
// import Home from './view/home/home'
import About from './view/about/about'
import Login from './view/login/login'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        </HashRouter>
      </div>
     );
  }
}
 

export default App;
