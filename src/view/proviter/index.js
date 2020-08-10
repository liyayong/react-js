import React from 'react';
import { Route } from 'react-router-dom';

const ProviterRouter = ({component:Component, ...rest})=>{
    return(
        // {...rest}  es6的 剩余参数方法   

        <Route
            {...rest}
            render={routeProps => (<Component {...routeProps} />)}
        />
    )
}
export default ProviterRouter