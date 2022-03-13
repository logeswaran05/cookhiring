import React from 'react';
import { Col, Form, Row, Button } from "react-bootstrap";
import Card from '../../UI/Card';

function Customersearchform() {
  return <Card>
    <form >
  
  <Row >
    <Col sm={6}>
      <Form.Group >
        <Form.Control
          type="text"
          placeholder="Type here to search for jobs"
        />
      </Form.Group>
    </Col>
    <Col >
      <Button variant="secondary" id="search">
        search
      </Button>
    </Col>
   
  </Row>

  
  
  
</form>
</Card>
}

export default Customersearchform;
