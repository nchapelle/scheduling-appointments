import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alerts from './components/layouts/Alerts';
import Scheduling from './components/pages/Scheduling';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import ApptState from './context/appt/ApptState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ApptState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Scheduling} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ApptState>
    </AuthState>
  );
};

export default App;
