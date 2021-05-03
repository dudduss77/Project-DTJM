import React from "react";
import "./LayoutView.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "../../routes";

import HeaderComponent from "../../components/headerComponent/HeaderComponent";

const LayoutView = () => {
  return (
    <div className="layoutView">
      <Router>
        <HeaderComponent />
        <div className="layoutView__content">
          <Switch>
            {routes.map((route, i) => (
              <Route exact key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default LayoutView;
