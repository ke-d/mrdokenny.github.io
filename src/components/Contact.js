import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Contact = () => {

  return (
    <Grid>
      <Row>
        <Col xs={12} sm={12}>
          <h2>Get in Touch</h2>
          <h3>I look forward to discussing business with you.</h3>
          <h3>contact@kennydo.com</h3>
        </Col>
      </Row>
    </Grid>
  );
}

const styles = {
  center: {
    textAlign: 'center',
  },
};
export default Contact;
