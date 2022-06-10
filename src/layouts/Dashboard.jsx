import React from 'react'
import { Button, GridColumn, Icon, Label, Grid, Container, GridRow } from 'semantic-ui-react'
import SideMenu from './SideMenu';
import InfoPanel from './InfoPanel';
import Navi from './Navi';
import { Route, Routes } from 'react-router-dom'
import PitchDetail from '../pages/PitchDetail';
import PitchAdd from '../pages/PitchAdd';
import TestPage from '../pages/TestPage';

export default function Dashboard(props) {


    return (
            <Container className="main">
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <SideMenu />
                        </GridColumn>
                        <GridColumn width={12}>
                                <InfoPanel/>   
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Container>
    )
}
