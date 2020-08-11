import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = localStorage.getItem('token')
const ProviterRouter = ({component:Component, ...rest})=>{
    return(
        // {...rest}  es6的 剩余参数方法   

        <Route
            {...rest}
            render={routeProps => (token?<Component {...routeProps} />:<Redirect to='/' />)}
        />
    )
}
export default ProviterRouter