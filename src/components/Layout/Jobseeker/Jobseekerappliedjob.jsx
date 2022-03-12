import React, { Fragment, useContext } from 'react';
import JobSeekerContext from '../../../store/jobseeker/JobSeekerContext';
import ContentContainer from '../../UI/ContentContainer';
import Appliedjobs from './Appliedjobs';
function Jobseekerappliedjob() {
   
const Context=useContext(JobSeekerContext);
  return <ContentContainer>
       {Context.Appliedjobs.map((item) => 
        <Appliedjobs
          key={item.id}
          Id={item.id}
          id={`userGrid${item.id}`}
          job_discription={item.job_discription}
          wage_for_day={item.wage_for_day}
          from_date={item.from_date}
          to_date={item.to_date}
          job_location={item.job_location}
          phone_number={item.phone_number}
          isAvailable={item.isAvailable}
        />
      )}
     

     </ContentContainer>;
}

export default Jobseekerappliedjob;
