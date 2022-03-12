import React from 'react';
import Customersearchform from './Customersearchform';

function Customerhome() {
  return <div>
      <Customersearchform/>
      {     <AvailableJobs
          key={item.id}
          Id={item.id}
          job_discription={item.jobdis}
          wage={item.wage}
          from_date={item.fromdate}
          to_date={item.todate}
          job_location={item.joblocation}
          phone_number={item.phone}
        />}
  </div>;
}

export default Customerhome;
