import React, { useState } from "react";
import JobSeekerContext from "./JobSeekerContext";
const Available_jobs = [
    {
      id: 1,
      jobdis: "cook",
      wage: "1000",
      fromdate: "21/2/2022",
      todate: "29/2/2022",
      joblocation: "salem",
      phone: "87654456787",
      isAvailable:"1"
    },
    {
      id: 2,
      jobdis: "cook",
      wage: "1000",
      fromdate: "dd/mm/yyyy",
      todate: "dd/mm/yyyy",
      joblocation: "XXXXx",
      phone: "87654456787",
      isAvailable:"0"
    },
    {
      id: 3,
      jobdis: "cook",
      wage: "1000",
      fromdate: "dd/mm/yyyy",
      todate: "dd/mm/yyyy",
      joblocation: "XXXXx",
      phone: "87654456787",
      isAvailable:"1",
    },
  ];
  const Applied_jobs = [
    {
      id: "1",
      job_discription: "cook",
      wage_for_day: "1000",
      from_date: "2-05-2022",
      to_date: "5-05-2022",
      job_location: "salem",
      phone_number: "8765445675",
      isAvailable:"0"
    },
    {
      id: "2",
      job_discription: "cook",
      wage_for_day: "1500",
      from_date: "12-05-2022",
      to_date: "15-05-2022",
      job_location: "salem",
      phone_number: "8765445675",
      isAvailable:"1"
    },]
function JobSeekerContextProvider(props) {
    const[Appliedjobs,setAppliedjob]=useState(Applied_jobs);
    const AddAppliyedJob=(data)=>{
        setAppliedjob(Appliedjobs.push(data));
    }
  return (
    <JobSeekerContext.Provider value={{ Appliedjobs: Appliedjobs, Availablejobs: Available_jobs,applyJob:AddAppliyedJob, }}>
      {props.children}
    </JobSeekerContext.Provider>
  );
}

export default JobSeekerContextProvider;
