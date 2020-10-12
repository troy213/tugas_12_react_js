import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Form,
  Checkbox,
  Button,
  Header,
  Segment,
  Input
 } from 'semantic-ui-react';
const vcenter = {
  height: '90vh',
  alignItems: 'center',
}

function App() {
  return (
    <div>
      <Grid textAlign='center' style={vcenter}>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4}>
            <Header as='h2' color='teal' image='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' content='Member Login' />
            <Segment stacked>
              <Form>
                <Form.Field>
                  <Input icon='user' iconPosition='left' placeholder='E-mail address' />
                </Form.Field>
                <Form.Field>
                  <Input icon='lock' iconPosition='left' placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button color='teal' type='submit' fluid>Login</Button>
              </Form>
            </Segment>
            <Segment secondary>
              <p>Tidak Punya Akun ? Silakan <a href="/">Register</a></p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
