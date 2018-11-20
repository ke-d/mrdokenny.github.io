import * as React from 'react';
import {
  Button,
  Grid,
  Jumbotron,
} from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Redirect extends React.Component {
  public render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Thanks</h1>
          <p>Thank you for your comments and feedback</p>
          <p>
            <LinkContainer to="/">
              <Button bsStyle="primary">Go Back</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
      </Grid>
    );
  }
}
export default Redirect;
