import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ContentContainer(props) {
  return <Container fluid style={{height:"87vh ",overflowY:"scroll",overflowX:"hidden"}}><Row className="justify-content-center">
      <Col sm={8} md={10} className=" mb-2 rounded   ">{props.children}</Col>
  </Row></Container>;
}

export default ContentContainer;
