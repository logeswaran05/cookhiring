import React, { useRef,useState } from 'react';
import {Form,Row,Col,Button} from "react-bootstrap";
import ContentContainer from '../../UI/ContentContainer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 
function Customeraddjob() {
  const [FromDate, setStartDate] = useState(new Date());
  const [ToDate, setStartToDate] = useState(FromDate);
   const JobDiscription= useRef();
   const WageForDay=useRef();
   const JobLocation=useRef();
   const PhoneNumber=useRef();
  const OnAddjob=(event)=>{
    event.preventDefault();
   let formData={}
   formData.from_date=FromDate;
   formData.to_date=ToDate;
   formData.wage_for_day=WageForDay.current.value;
   formData.job_location=JobLocation.current.value;
   formData.phone_number=PhoneNumber.current.value;
   formData.job_description=JobDiscription.current.value;
   console.log(formData);
  }
   
  return <ContentContainer>
       <form className="m-4 bg-light p-3 rounded " onSubmit={OnAddjob}>

<Row>
  <h3>Add Openings</h3>
  <Col>
    <Form.Group className="mb-3">
      <Form.Label>Job Description</Form.Label>
      <Form.Control
        ref={JobDiscription}
        id="JobDiscription"
        type="text"
        placeholder="Enter Job Discription"
       // defaultValue={form_data.job_discription}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>From Date</Form.Label>
      <DatePicker selected={FromDate}
      minDate={new Date()}
      
      onChange={(date) => {setStartDate(date);  setStartToDate(date);} }/>

    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Wage For Day</Form.Label>
      <Form.Control
        ref={WageForDay}
        id="WageForDay"
        type="text"
        placeholder="Enter Wage For Day"
     // defaultValue={form_data.wage_for_day}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Members Needed</Form.Label>
      <Form.Control
        ref={PhoneNumber}
        min="1"
        id="members needed"
        type="number"
        placeholder="Enter number of members needed"
        //defaultValue={form_data.phone_number}
      />
    </Form.Group>
  </Col>
  <Col>
    <Form.Group className="mb-3">
      <Form.Label>Job Location</Form.Label>
      <Form.Control
        ref={JobLocation}
        id="Location"
        type="text"
        placeholder="Enter Job Location"
     // defaultValue={form_data.job_location}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>To Date</Form.Label>
      <DatePicker selected={ToDate}
      minDate={FromDate}
     
      onChange={(date) => setStartToDate(date)} />

    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        ref={PhoneNumber}
        id="PhoneNumber"
        type="tele"
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
