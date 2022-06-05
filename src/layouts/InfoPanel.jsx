import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import LoginPage from '../pages/LoginPage';
import TestPage from '../pages/TestPage';
import PitchDetail from '../pages/PitchDetail';
import PitchAdd from '../pages/PitchAdd';
import Dashboard from './Dashboard';

export default function InfoPanel() {
    return (
        <div>
            <Container className='dashboard'>
                <Routes>
                    <Route exact path="/" element={<TestPage />} />
                    <Route exact path="/admin" element={<TestPage />} />
                    <Route path="/admin/addPitch" element={<PitchAdd />} />
                    <Route path="/admin/detailPitch" element={<PitchDetail />} />
                </Routes>
            </Container>

        </div>
    )
}
