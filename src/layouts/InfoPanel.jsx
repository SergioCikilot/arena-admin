import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import LoginPage from '../pages/LoginPage';
import TestPage from '../pages/TestPage';
import PitchDetail from '../pages/PitchDetail';
import PitchAdd from '../pages/PitchAdd';
import Dashboard from './Dashboard';
import CommunicationPage from '../pages/CommunicationPage';
import ReservationPage from '../pages/ReservationPage';
import PhotoAdd from '../pages/PhotoAdd';

export default function InfoPanel() {
    return (
        <div>
            <Container className='dashboard'>
                <Routes>
                    <Route exact path="/" element={<TestPage />} />
                    <Route exact path="/admin" element={<TestPage />} />
                    <Route path="/admin/addPitch" element={<PitchAdd />} />
                    <Route path="/admin/detailPitch" element={<PitchDetail />} />
                    <Route path="/admin/communication" element={<CommunicationPage />} />
                    <Route path="/admin/reservations" element={<ReservationPage />} />
                    <Route path="/admin/photos" element={<PhotoAdd />} />
                </Routes>
            </Container>

        </div>
    )
}
