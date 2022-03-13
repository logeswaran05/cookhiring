
import React,{useContext} from "react";
import JobProviderContext from '../../../store/Customer/JobProviderContext';

import ContentContainer from "../../UI/ContentContainer";
import AppliedCandidates from "./AppliedCandidates";
import MyJobs from "./Myjobs";

function CustomerAppliedCandidates(props) {
  const Context=useContext(JobProviderContext);
  return (
    <ContentContainer >
      <MyJobs/>
      { Context.appliedCandidates.map((item) => 
        <AppliedCandidates
          key={item.id}
          Id={item.id}
          name={item.name}
          address={item.address}
          phone_number={item.phone_number}
          yearOfExperience={item.yearOfExperience}
          email={item.email}
          // id={`adminsCandidatesGrid${props.id}`}
          
        />
      ) }
    </ContentContainer>
  )
}

export default CustomerAppliedCandidates