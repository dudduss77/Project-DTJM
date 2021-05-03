import React from 'react'
import './LayoutView.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {routes} from '../../routes'

import HeaderComponent from '../../components/headerComponent/HeaderComponent'

const LayoutView = () => {
  return (
    <div className="layoutView">
      <Router>
        <HeaderComponent/>
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route}/>)}
        </Switch>
      </Router>
    </div>
  )
}

export default LayoutView
