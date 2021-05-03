import React, {useContext} from "react";
import "./LayoutView.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "../../routes";

import {globalContext} from '../../context/globalStore'

import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import PopupComponent from '../../components/popupComponent/PopupComponent'

const LayoutView = () => {
  const {appData} = useContext(globalContext)
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
      {appData.showPopup && (<PopupComponent/>)}
    </div>
  );
};

export default LayoutView;
