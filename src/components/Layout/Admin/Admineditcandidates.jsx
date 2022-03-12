import React, { useRef, useContext ,useState} from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import AdminContext from "../../../store/Admin/AdminContext";


function Admineditcandidates(props) {
 const [isError,setIsError]= useState(false)
  
  const Context = useContext(AdminContext);
  let form_val = Context.candidateEditData;
  const navigate = useNavigate();
  const Name = useRef();
  const PhoneNumber = useRef();
  const Email = useRef();
  const YearOfExperience = useRef();
  const Address = useRef();

 
// update function
  const onUpdate = (event) => {
    event.preventDefault();
   
    setIsError(false);
    if(!(Name.current.value && PhoneNumber.current.value && YearOfExperience.current.value && Address.current.value && Email.current.value))
    {
      setIsError(true);
      return;
    }
  
    form_val.name = Name.current.value;
    form_val.phone_number= PhoneNumber.current.value;
    form_val.yearOfExperience= YearOfExperience.current.value;
    form_val.address = Address.current.value;
    form_val.email = Email.current.value;
    Context.candidateEdit(form_val,form_val.id);
    navigate("/admin/profile");
    
  };
  //cancel function
  const onCancel = () => {
    navigate(-1);
  };
  return (
   
      <form  className="m-5 bg-light p-3 rounded " onSubmit={onUpdate}>
        <h3>Edit Candidate</h3>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={Name}
               
                id="editName"
                type="text"
                placeholder="Enter name"
               defaultValue={form_val.name}
               
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
               defaultValue={form_val.phone_number}
                ref={PhoneNumber}
                id="editPhoneNumber"
                type="tel"
                placeholder="Enter mobile number"
                
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Year of Experiance</Form.Label>
              <Form.Control
                ref={YearOfExperience}
              defaultValue={form_val.yearOfExperience}
                id="editYearOfExperience"
                type="number"
                min="0"
                max="60"
                placeholder="Enter Year of Experiance"
               
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
             defaultValue={form_val.address}
                ref={Address}
                id="editAddress"
                type="text"
                placeholder="Enter address"
              
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               defaultValue={form_val.email}
                ref={Email}
                id="editEmail"
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
            <Button onClick={onCancel} variant="secondary">
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
   
  );
}

export default Admineditcandidates;
