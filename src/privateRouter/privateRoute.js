import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { globalContext } from './../context/globalStore'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { userData } = useContext(globalContext);
    return (
        <Route
        {...rest}
        render={ props => userData.logged ? <Component {...props} /> : <Redirect to="/"/> }
        >
            
        </Route>
    )
}

export default PrivateRoute
