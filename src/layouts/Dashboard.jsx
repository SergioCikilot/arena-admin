import React from "react";
import {
  Button,
  GridColumn,
  Icon,
  Label,
  Grid,
  Container,
  GridRow,
} from "semantic-ui-react";
import SideMenu from "./SideMenu";
import InfoPanel from "./InfoPanel";
import Navi from "./Navi";
import { Route, Routes } from "react-router-dom";
import PitchDetail from "../pages/PitchDetail";
import PitchAdd from "../pages/PitchAdd";
import TestPage from "../pages/TestPage";

export default function Dashboard(props) {
  return (
    <Container className="main">
      <Grid>
        <Grid.Row>
          <GridColumn width={2}>
            <SideMenu />
          </GridColumn>
          <GridColumn width={14}>
            <InfoPanel />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
