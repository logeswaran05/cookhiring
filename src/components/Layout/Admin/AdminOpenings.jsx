import React, { useContext } from "react";
import Openings from "./Openings";
import AdminContext from "../../../store/Admin/AdminContext";
import ContentContainer from "../../UI/ContentContainer";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Card from "../../UI/Card";
import SearchFrom from "../../UI/SearchForm";

function AdminOpenings(props) {
  const Context = useContext(AdminContext);

  return (
    <ContentContainer
      style={{ width: "100%", height: " 85vh ", overflowY: "scroll" }}
    >
      <Card>
        <Row className="justify-content-around" >
          <Col  >
            {" "}
            <SearchFrom />
          </Col>{" "}
          <Col sm={2}>
            <Link to="/#" className="btn btn-secondary w-3">
              Add opening
            </Link>
          </Col>
        </Row>
      </Card>

      {Context.openings.map((item) => (
        <Openings
          key={item.id}
          Id={item.id}
          id={`adminOpeningrid${props.id}`}
          job_discription={item.job_discription}
          wage_for_day={item.wage_for_day}
          from_date={item.from_date}
          to_date={item.to_date}
          job_location={item.job_location}
          phone_number={item.phone_number}
        />
      ))}
    </ContentContainer>
  );
}

export default AdminOpenings;
