import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from '../../UI/Card';
import classes from "./Availablejobs.module.css";

function Availablejobs(props) {
  return  <Card>
  <Container fluid>
    <Row>
      <Col>
      <table className={classes.table}>
          <tbody>
            <tr>
              <td>Job Description :</td>
              <td>{props.job_discription}</td>
            </tr>
            <tr>
              <td>From Date :</td>
              <td>{props.from_date}</td>
            </tr>
            <tr>
              <td>Job Location :</td>
              <td>{props.job_location}</td>
            </tr>
            <tr>
              <td>Members Needed :</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col  >
        <table className={classes.table}> 
          <tbody>
            <tr>
              <td>Wage Per Day :</td>
              <td>{props.wage_for_day}</td>
            </tr>
            <tr>
              <td>To Date :</td>
              <td>{props.to_date}</td>
            </tr>
            <tr>
              <td>Phone Number :</td>
              <td>{props.phone_number}</td>
            </tr>
            <tr>
              <td>job Status :</td>
              <td>Handovered</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  </Container>
</Card>;
}

export default Availablejobs;
