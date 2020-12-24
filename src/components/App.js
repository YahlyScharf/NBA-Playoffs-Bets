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
import NewBet from './NewBet'
import Transition from '../addOns/Transition'
import LoadingPage from '../addOns/LoadingPage';

function App() {

  const AppRoutes = () => {
    return (
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/..." component={LoadingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/placeBet" component={Transition} />
        <Route path="/place-bet" component={NewBet} />
        <Route path="/standings" component={Standings} />
       
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
