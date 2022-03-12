import React, { useContext, useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminContext from "../../../store/Admin/AdminContext";
import ContentContainer from "../../UI/ContentContainer";

function Admineditopenings() {
  const [isError, setIsError] = useState(false);
  const Context = useContext(AdminContext);
  const navigate = useNavigate();
  const JobDiscription = useRef();
  const FromDate = useRef();
  const WageForDay = useRef();
  const ToDate = useRef();
  const PhoneNumber = useRef();
  const JobLocation = useRef();
  let form_data = Context.openingEditData;
  const onUpdate = (event) => {
    event.preventDefault();
    if (
      !(
        FromDate.current.value &&
        ToDate.current.value &&
        JobDiscription.current.value &&
        JobLocation.current.value &&
        PhoneNumber.current.value &&
        WageForDay.current.value
      )
    ) {
      setIsError(true);
      return;
    }
    form_data.from_date = FromDate.current.value;
    form_data.to_date = ToDate.current.value;
    form_data.job_discription = JobDiscription.current.value;
    form_data.job_location = JobLocation.current.value;
    form_data.phone_number = PhoneNumber.current.value;
    form_data.wage_for_day = WageForDay.current.value;

    Context.openingEdit(form_data, form_data.id);

    navigate("/admin/getalljobs");
  };
  const onCancel = () => {
    navigate(-1);
  };
  return (
   <ContentContainer>
      <form className="m-4 bg-light p-3 rounded " onSubmit={onUpdate}>
        <Row>
          <h3>Edit Openings</h3>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                ref={JobDiscription}
                id="editJobDiscription"
                type="text"
                placeholder="Enter Job Discription"
                defaultValue={form_data.job_discription}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>From Date</Form.Label>
              <Form.Control
                ref={FromDate}
                id="editFromDate"
                type="date"
                placeholder="Enter from date"
                defaultValue={form_data.from_date}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Wage For Day</Form.Label>
              <Form.Control
                ref={WageForDay}
                id="editWageForDay"
                type="number"
                placeholder="Enter Wage For Day"
                defaultValue={form_data.wage_for_day}
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
                defaultValue={form_data.job_location}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>To Date</Form.Label>
              <Form.Control
                ref={ToDate}
                id="editToDate"
                type="date"
                placeholder="Enter from date"
                defaultValue={form_data.to_date}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                ref={PhoneNumber}
                id="editPhoneNumber"
                type="number"
                placeholder="Enter Phone Number"
                defaultValue={form_data.phone_number}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <div className="bg-secondary w-100 border border-2  my-2"></div>
          {isError && (
            <div className="alert alert-danger alert-dismissible fade show m-3">
              Please fill all the input feilds
            </div>
          )}
          <Col className="text-center m-2">
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
          </Col>
          <Col className="text-center">
            <Button id="applyButton" type="submit" variant="success">
              Update
            </Button>
          </Col>
        </Row>
      </form>
      </ContentContainer>
     
      
  );
}

export default Admineditopenings;
