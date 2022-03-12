import React,{useContext} from "react";
import AdminContext from "../../../store/Admin/AdminContext";
import ContentContainer from "../../UI/ContentContainer";
import Candidates from "./Candidates";



function Admincandidates(props) {
  const Context=useContext(AdminContext);  
  return (
    <ContentContainer >
     
      { Context.candidates.map((item) => 
        <Candidates
          key={item.id}
          Id={item.id}
          name={item.name}
          address={item.address}
          phone_number={item.phone_number}
          yearOfExperience={item.yearOfExperience}
          email={item.email}
          id={`adminsCandidatesGrid${props.id}`}
          
        />
      ) }
    </ContentContainer>
  );
}

export default Admincandidates;
