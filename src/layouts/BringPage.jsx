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

import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


export default function BringPage(props) {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()


  function handleLogin(e) {
    
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    var service = new UserService();

    service.Login(e.target[0].value,
                  e.target[1].value).then(function (resp) {
                    console.log(resp)
                    setIsAuthenticated(true);
                    navigate("/")
                  }).catch(function (error) {
                    // handle error
                    toast.error('Kullanıcı Adı veya Şifre Hatalı', {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });
                    setIsAuthenticated(false);
                  });
  }
  function handleLogut() {

    setIsAuthenticated(false)

  }
  return (
    <div>
      <ToastContainer
         position="bottom-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         
         /> 
      
        {
        !isAuthenticated ? 
       <div>
        <LoginPage signIn = {handleLogin} />
       </div> 
       :
        <><Navi signOut={handleLogut} />
        <Dashboard/></>} 
    </div>
  )
}
