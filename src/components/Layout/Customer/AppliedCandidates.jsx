import Card from "../../UI/Card";
import { Col, Row, Button } from "react-bootstrap";
import classes from "./AppliedCandidates.module.css";
import React from 'react';

function AppliedCandidates(props) {
  return (
    <Card>
<Row>
  <Col>
    <table className={classes.table}>
      <tbody>
        <tr className="textcenter">
          <td>Candidate Name :</td>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>Phone Number :</td>
          <td>{props.phone_number}</td>
        </tr>
        <tr>
          <td>Year of Experience :</td>
          <td>{props.yearOfExperience}</td>
        </tr>
      </tbody>
    </table>
  </Col>
  <Col>
    <table className={classes.table}>
      <tbody>
        <tr>
          <td>Address :</td>

          <td>{props.address}</td>
        </tr>
        <tr>
          <td>Email :</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
    
  </Col>
</Row>
<Col><Button id="chatButton">chat</Button></Col>


</Card>
  )
}

export default AppliedCandidates;
