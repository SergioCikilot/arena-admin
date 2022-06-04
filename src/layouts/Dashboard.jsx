import React from 'react'
import { Button, GridColumn, Icon, Label, Grid, Container, GridRow } from 'semantic-ui-react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PitchDetail from '../pages/PitchDetail';
import TestPage from '../pages/TestPage';
import SideMenu from './SideMenu';
import PitchAdd from '../pages/PitchAdd';
import LoginPage from '../pages/LoginPage';

export default function Dashboard() {


    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <SideMenu />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Container className='dashboard'>
                            <Routes>
                                <Route exact path="/admin/" element={<TestPage />} />
                                <Route exact path="/admin/pitch" element={<PitchDetail />} />
                                <Route exact path="/admin/addPitch" element={<PitchAdd />} />
                                <Route exact path="/admin/login" element={<LoginPage />} />
                            </Routes>
                        </Container>
                    </GridColumn>
                </Grid.Row>
            </Grid></div>
    )
}
