import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Navi from './Navi';
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';

export default function BringPage(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()

  function handleSignOut(params) {
    setIsAuthenticated(false)
    navigate("/admin")
  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  return (

    <div>
      <LoginPage>
      </LoginPage>
      {
        isAuthenticated ?
          <SignedIn signOut={handleSignIn} /> :
          <SignedOut signIn={handleSignOut} />
      }
    </div>

  )
}
