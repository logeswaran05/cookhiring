import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";

export default function Jobseekernavigation(props) {
  const navigator=useNavigate();
  const onLogout=()=>{
      navigator('/user/login');
  }

  return (
    <React.Fragment>
      <nav className="p-3 d-flex  justify-content-around bg-primary text-white">
        <Col>
          <h3 className="white">Cooking expert</h3>
        </Col>
        <Col className="d-flex justify-content-around ">
          <Link className="text-decoration-none text-light" id="userHomeButton" to="dashboard">
            Home
          </Link>

          <Link className="text-decoration-none text-light" id="userAppliedJobs" to="appliedjobs">
            Applied jobs
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
