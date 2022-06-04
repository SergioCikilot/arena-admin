import React from 'react'
import { Button, GridColumn, Icon, Label,Grid, Container } from 'semantic-ui-react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PitchDetail from '../pages/PitchDetail';
import TestPage from '../pages/TestPage';
import SideMenu from './SideMenu';
import PitchAdd from '../pages/PitchAdd';

export default function Dashboard() {

    
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <SideMenu/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path="/" element={<TestPage/>} />
                            <Route exact path="/pitch" element={<PitchDetail/>} />
                            <Route exact path="/addPitch" element={<PitchAdd/>} />
                        </Routes>
                    </GridColumn>
                </Grid.Row>
            </Grid></div>
    )
}
