import React, {  useContext } from "react";
import JobSeekerContext from "../../../store/jobseeker/JobSeekerContext";
import ContentContainer from "../../UI/ContentContainer";
import AvailableJobs from "./AvailableJobs";
import Jobseekerform from "./Jobseekerform";

export default function JobseekerAvailablejobs(props) {
  const Context=useContext(JobSeekerContext);
 
  return (
    <ContentContainer>      
      
      <Jobseekerform />
     
      {Context.Availablejobs.map((item) => 
        <AvailableJobs
          key={item.id}
          Id={item.id}
          job_discription={item.jobdis}
          wage_for_day={item.wage}
          from_date={item.fromdate}
          to_date={item.todate}
          job_location={item.joblocation}
          phone_number={item.phone}
          isAvailable={item.isAvailable}
        />
      )}
     
     </ContentContainer>

  );
}
