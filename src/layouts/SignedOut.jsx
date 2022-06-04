import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import { Container } from 'semantic-ui-react';
import Dashboard from './Dashboard';
import Navi from './Navi';

export default function SignedOut(props) {
    return (
        <div>
            <Navi />
            <Container className="main">
                <Dashboard />
            </Container></div>
    )
}
