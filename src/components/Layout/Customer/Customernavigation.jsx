import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";


function Customernavigation(props) {
    const navigator=useNavigate();
    const onLogout=()=>{
        navigator('/user/login');
    }
  
    return (
      <React.Fragment>
        <nav className="p-3 d-flex  justify-content-around bg-primary text-white">
          <Col >
            <h3 className="white">Cooking expert</h3>
          </Col>
          <Col xs={6} className="d-flex justify-content-around  ">
          <Link className="text-decoration-none text-light p-1" id="userHomeButton" to="dashboard">
              Home
            </Link>
            <Link className="text-decoration-none text-light p-1" id="userAddOpenings" to="addjob">
              Add Openings
            </Link>
  
            <Link className="text-decoration-none text-light p-1" id="userAppliedJobs" to="viewAppliedCandidates">
              Applied Candidates
            </Link>
          </Col>
  
          <Col className="text-center">
            <Button variant="light " id="logout" onClick={onLogout}>
              Logout
            </Button>
          </Col>
        </nav>
      </React.Fragment>
    );
}

export default Customernavigation;
