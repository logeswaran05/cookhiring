import React, { useRef } from 'react';
import {Form,Row,Col,Button} from "react-bootstrap";
import ContentContainer from '../../UI/ContentContainer';
 
function Customeraddjob() {
   const JobDiscription= useRef();
   const FromDate=useRef();
   const ToDate=useRef();
   const WageForDay=useRef();
   const JobLocation=useRef();
   const PhoneNumber=useRef();

  return <ContentContainer>
       <form className="m-4 bg-light p-3 rounded " >

<Row>
  <h3>Add Openings</h3>
  <Col>
    <Form.Group className="mb-3">
      <Form.Label>Job Description</Form.Label>
      <Form.Control
        ref={JobDiscription}
        id="editJobDiscription"
        type="text"
        placeholder="Enter Job Discription"
       // defaultValue={form_data.job_discription}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>From Date</Form.Label>
      <Form.Control
        ref={FromDate}
        id="editFromDate"
        type="date"
        placeholder="Enter from date"
    //  defaultValue={form_data.name}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Wage For Day</Form.Label>
      <Form.Control
        ref={WageForDay}
        id="editWageForDay"
        type="text"
        placeholder="Enter Wage For Day"
     // defaultValue={form_data.wage_for_day}
      />
    </Form.Group>
  </Col>
  <Col>
    <Form.Group className="mb-3">
      <Form.Label>Job Location</Form.Label>
      <Form.Control
        ref={JobLocation}
        id="editLocation"
        type="text"
        placeholder="Enter Job Location"
     // defaultValue={form_data.job_location}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>To Date</Form.Label>
      <Form.Control
        ref={ToDate}
        id="editToDate"
        type="date"
        placeholder="Enter from date"
      //  defaultValue={form_data.to_date}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        ref={PhoneNumber}
        id="editPhoneNumber"
        type="number"
        placeholder="Enter Phone Number"
        //defaultValue={form_data.phone_number}
      />
    </Form.Group>
  </Col>
</Row>
<Row>
  <Col className="text-center">
    <Button variant="secondary">Cancel</Button>
  </Col>
  <Col className="text-center">
    <Button id="applyButton" type="submit" variant="success">
      Add job
    </Button>
  </Col>
</Row>
</form>
</ContentContainer>;
}

export default Customeraddjob;
