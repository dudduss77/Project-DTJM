import React, {useContext} from "react";
import "./LayoutView.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { routes } from "../../routes";

import {globalContext} from '../../context/globalStore'
import * as AuthService from './../../services/authService.js';

import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import PopupComponent from '../../components/popupComponent/PopupComponent'
import ChatView from "../chatView/ChatView";
import PrivateRoute from "../../privateRouter/privateRoute";

const LayoutView = () => {
  const {appData, chatVisibility, userData : { logged }, setUserData} = useContext(globalContext);

  // there we can get data for context
  AuthService.observeUserLoginState(user => {
    setUserData({type: "LOG-IN"});
  },
  () => {
    setUserData({type: "LOG-OUT"});
  });



  return (
    <div className="layoutView">
      <Router>
        <HeaderComponent />
        <div className="layoutView__content">
          <Switch>
            {routes.map((route, i) => (
              route.private ?
              <PrivateRoute exact key={i} {...route} />
              :
              <Route exact key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
      {appData.showPopup && (<PopupComponent/>)}
      {chatVisibility && logged && (<ChatView/>)}

      <NotificationContainer/>
    </div>
  );
};

export default LayoutView;
