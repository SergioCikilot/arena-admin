import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Navi from './Navi';
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import axios from 'axios';
import UserService from '../services/userService';

export default function BringPage(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()

  function handleLogin(e) {
    

    var service = new UserService();

    service.Login(e.target[0].value,
                  e.target[1].value).then(function (resp) {
                    console.log(resp)
                    setIsAuthenticated(false)
                    navigate("/")
                  }).catch(function (error) {
                    // handle error
                    console.log(error);
                  });
  }
  function handleLogut() {

    setIsAuthenticated(true)

  }
  return (
    <div>
      
        {
        isAuthenticated ? 
        <LoginPage signIn = {handleLogin} />:
        <><Navi signOut={handleLogut} />
        <Dashboard/></>} 
    </div>
  )
}
