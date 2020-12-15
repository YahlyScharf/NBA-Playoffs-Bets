import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { FetchProvider } from '../context/FetchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app.css";
import * as jwt from 'jsonwebtoken';
import SignIn from './Signin';
import SignUp from './Signup'
import Dashboard from './Dashboard';
import Standings from "./Standings"
import Hub from './Hub'

function App() {

  const AppRoutes = () => {
    return (
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/standings" component={Standings} />
        <Route path="/hub" component={Hub} />
      </Switch>
    );
  }

  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div className="App">

            <div className="auth-wrapper">
              <div className="auth-inner">
                <AppRoutes />
              </div>
            </div>
          </div>
        </FetchProvider>

      </AuthProvider>

    </Router>
  );
}

export default App;
