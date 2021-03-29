
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../context/AuthContext';
import NavBar from './NavbarDashboard';
import Bracket from './BracketDashboard'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import UserLoading from '../addOns/UserLoading';




function Dashboard() {

  const authContext = useContext(AuthContext);
  const {
    userInfo
  } = authContext.authState;


  const userAuthentication = authContext.isAuthenticated();

  if (userAuthentication === true) {
    console.log('Hello');
  } else {
    window.location.href = "/signin"
  }

  function redirectOnEmptyBetArray() {
    if (userInfo.hasBet === false || userInfo.bet.finals[0].value === 0 || userInfo.bet.finals[1].value === 0) {
      localStorage.clear();
      return <Redirect to="/bet-err" />
    } else {
      return (
        <div>
          <NavBar />
          <h1 className="text-left-h1">  Hello {userInfo.firstName}!</h1>
          <Bracket />
        </div>
      )
    }
  }

  return (

    <>

      {userInfo ? redirectOnEmptyBetArray() : <UserLoading />}

    </>
  );




}

export default Dashboard;