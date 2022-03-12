import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./Appliedjobs.module.css"
import Card from "../../UI/Card";

export default function Appliedjobs(props) {
  const navigate=useNavigate();

  return (
  
    <Card>
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
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" p-2 ">
          <Col ><div className={props.isAvailable==="1"?classes.available:classes.notavailable}>{props.isAvailable==="1"?"Applied":"Completed"}</div></Col>
          <Col>
            <Button className='m-1' variant="info" >edit</Button>
            
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
