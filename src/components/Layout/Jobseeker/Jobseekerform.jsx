import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function Jobseekerform(props) {
  return (
    <form className="m-3">
      <Col>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Type here to search for jobs"
            />
          </Form.Group>
        </Col>
        <Col>
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
