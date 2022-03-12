import React, { useContext } from "react";
import Card from "../../UI/Card";
import { Col, Row, Button } from "react-bootstrap";
import  EditIcon  from "../../../asserts/EditIcon";
import  DeleteIcon  from "../../../asserts/DeleteIcon";
import classes from "./Candidates.module.css";
import { useNavigate } from "react-router-dom";
import AdminContext from "../../../store/Admin/AdminContext";
function Candidates(props) {
  const Context = useContext(AdminContext);
  const navigator = useNavigate();
  const onEdit = () => {
    Context.candidateEditData = {
      id: props.Id,
      name: props.name,
      address: props.address,
      phone_number: props.phone_number,
      yearOfExperience: props.yearOfExperience,
      email: props.email,
    };
    navigator(`/admin/editprofile/${props.Id}`);
  };
  const onDelete = () => {
    Context.candidateDelete(props.Id);
  };
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
              <tr>
                <td>Jobs Applied :</td>
                <td>{}</td>
              </tr>
            </tbody>
          </table>
          
        </Col>
      </Row>
      <div className="w-100 border  bg-secondary border-1 mt-2"></div>
      <Row  className="text-center">
           <Col>
              <Button className="m-1" onClick={onEdit}>
                { EditIcon}
              </Button>
              </Col>
              <Col>
              <Button className="m-1" onClick={onDelete}>
               {DeleteIcon}
              </Button>
              </Col>
          </Row>
    </Card>
  );
}

export default Candidates;
