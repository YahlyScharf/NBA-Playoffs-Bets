import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { FetchProvider } from '../context/FetchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import * as jwt from 'jsonwebtoken';
import SignIn from './Signin';
import SignUp from './Signup'
import Dashboard from './Dashboard';
import Standings from "./Standings"
import NewBet from './NewBet'
import LoadingPage from '../addOns/LoadingPage';
import UserBet from './UserBet';
import Home from './Home';
import NotFound from './NotFound'

function App() {

  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div >
          <Switch>
          <Route exact path='/' component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/..." component={LoadingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/place-bet" component={NewBet} />
            <Route path="/standings" component={Standings} />
            <Route path="/user-bet/:id" component={UserBet} />
            <Route component={NotFound} />
          </Switch>

           
          </div>
        </FetchProvider>

      </AuthProvider>

    </Router>
  );
}

export default App;
