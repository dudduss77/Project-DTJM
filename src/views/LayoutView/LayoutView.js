import React, {useContext} from "react";
import "./LayoutView.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { routes } from "../../routes";

import {globalContext} from '../../context/globalStore'

import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import PopupComponent from '../../components/popupComponent/PopupComponent'
import ChatView from "../chatView/ChatView";

const LayoutView = () => {
  const {appData, chatVisibility, userData : { logged }} = useContext(globalContext)
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
      {chatVisibility && logged && (<ChatView/>)}

      <NotificationContainer/>
    </div>
  );
};

export default LayoutView;
