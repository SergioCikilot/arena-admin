import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import BringPage from "../layouts/BringPage";
import SignedIn from "../layouts/SignedIn";
import SignedOut from "../layouts/SignedOut";

const LoginPage = ({ signIn, setIsChecked }) => {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Login to your account
          </Header>
          <Form size="large" onSubmit={signIn}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button class="button--loading" color="teal" fluid size="large">
                Login
              </Button>
              <Form.Group></Form.Group>
              <Form.Group>
                <div class="ui checkbox">
                  <input
                    type="checkbox"
                    name="example"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <label>Beni hatırla</label>
                </div>
              </Form.Group>
            </Segment>
          </Form>
          <Message>Don't have an account?</Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default LoginPage;
