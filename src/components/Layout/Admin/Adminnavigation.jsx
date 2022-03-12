import React from "react";
import {  Col } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import Profile from "../../UI/Profile";

function Adminnavigation( props) {
    const navigator=useNavigate();
    const onLogout=()=>{
        navigator('/user/login');
    }
  
    return (
      <React.Fragment>
        <nav className="p-3 d-flex  justify-content-around bg-primary text-white position-fixed-top ">
          <Col>
            <h3 className="white">Cooking expert</h3>
          </Col>
          <Col className="d-flex justify-content-around ">
          <Link className="text-decoration-none text-light" id="Users" to="Users/jobproviderData">
              Users
            </Link>
            <Link className="text-decoration-none text-light" id="AdminOpenings" to="getAllJobs">
              Openings
            </Link>
  
            <Link className="text-decoration-none text-light" id="AdminCandidates" to="profile">
            Candidates
            </Link>
          </Col>
  
          <Col className="text-center">
            <Profile/>
          </Col>
        </nav>
      </React.Fragment>
    );
}

export default Adminnavigation;
