import React,{useContext} from 'react'
import JobProviderContext from '../../../store/Customer/JobProviderContext'
import ContentContainer from '../../UI/ContentContainer';
import Availablejobs from './Availablejobs'


function CustomerAvailablejobs() {
    const Context = useContext(JobProviderContext);

  return (
    <ContentContainer>     
   {Context.availablejobs .map((item) => 
      <Availablejobs
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
   
  )
}

export default CustomerAvailablejobs