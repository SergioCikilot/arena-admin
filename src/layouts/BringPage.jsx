import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Navi from './Navi';
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';

export default function BringPage(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()

  function handleLogin() {

    setIsAuthenticated(false)
    navigate("/")

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
