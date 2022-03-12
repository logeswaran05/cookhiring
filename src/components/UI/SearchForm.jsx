import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function SearchForm(props) {
  return (
    <form >
      <Col>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Type here to search for jobs"
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Button variant="secondary" id="logout">
            search
          </Button>
        </Col>
      </Row>
      </Col>
      <Col></Col>
      
    </form>
  );
}
