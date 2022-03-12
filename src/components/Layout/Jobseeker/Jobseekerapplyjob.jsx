import React, { useContext, useRef, useState } from "react";
import {  Col, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ContentContainer from "../../UI/ContentContainer";
import JobSeekerContext from "../../../store/jobseeker/JobSeekerContext";

export default function Jobseekerapplyjob(props) {
  const [isError, setIsError] = useState(false);
  const Context = useContext(JobSeekerContext);
  const Name = useRef();
  const Email = useRef();
  const Phone = useRef();
  const Address = useRef();
  const YearOfExperience = useRef();
  const { id } = useParams();
  let appliedjobSeekerdata = {};
  const navigator = useNavigate();
  const onApply = (event) => {
    event.preventDefault();
    setIsError(false);
    if (
      !(
        Name.current.value &&
        Phone.current.value &&
        Address.current.value &&
        YearOfExperience.current.value &&
        Email.current.value
      )
    ) {
      setIsError(true);
      return;
    }
  };
  const onCancel = () => {
    navigator(-1);
  };
  return (
   
      <ContentContainer  >
        <form onSubmit={onApply} className="m-4 bg-light p-3 rounded ">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  ref={Name}
                  id="enter Name"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  ref={Phone}
                  id="enter Phone Number"
                  type="tel"
                  placeholder="Enter number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Year of experience</Form.Label>
                <Form.Control
                  ref={YearOfExperience}
                  id="enterYearOfExperience"
                  type="text"
                  placeholder="Enter your year of experience "
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  ref={Address}
                  id="enterAddress"
                  type="text"
                  placeholder="Enter Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={Email}
                  id="enterEmail"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {isError && (
              <div className="alert alert-danger alert-dismissible fade show m-3">
                Please fill all the input feilds
              </div>
            )}
            <Col className="text-center">
              <Button onClick={onCancel} variant="danger">
                Cancel
              </Button>
            </Col>{" "}
            <Col className="text-center">
              <Button id="applyButton" type="submit" variant="success">
                Apply job
              </Button>{" "}
            </Col>{" "}
          </Row>
        </form>
      </ContentContainer>
   
  );
}
