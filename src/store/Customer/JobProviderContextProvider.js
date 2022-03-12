import React, { useState } from "react";
import JobProviderContext from "./JobProviderContext";
const candidates = [
  {
    id: 0,
    name: "kaviya",
    address: "xxxxxx",
    phone_number: "8763287454",
    yearOfExperience: "4",
    email: "123q@gmail.com",
  },
  {
    id: 1,
    name: "ram",
    address: "xxxxxx",
    phone_number: "8763877454",
    yearOfExperience: "3",
    email: "1234q@gmail.com",
  },
  {
    id: 2,
    name: "ram",
    address: "xxxxxx",
    phone_number: "8763877454",
    yearOfExperience: "3",
    email: "1234q@gmail.com",
  },
  {
    id: 3,
    name: "ram",
    address: "xxxxxx",
    phone_number: "8763877454",
    yearOfExperience: "3",
    email: "1234q@gmail.com",
  },
  {
    id: 4,
    name: "ram",
    address: "xxxxxx",
    phone_number: "8763877454",
    yearOfExperience: "3",
    email: "1234q@gmail.com",
  },
  {
    id: 5,
    name: "ram",
    address: "xxxxxx",
    phone_number: "8763877454",
    yearOfExperience: "3",
    email: "1234q@gmail.com",
  },
];
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
const JobProviderContextProvider=(props)=>{
    const [AvailableJobs,setAvailableJobs]=useState(Available_jobs);
    const [AppliedCandidates,setAppliedCandidates]=useState(candidates);

    return<JobProviderContext.Provider value={{
        availablejobs:AvailableJobs,
     appliedCandidates:AppliedCandidates,
     addNewJobs:()=>{},
    }}>
{props.children}
    </JobProviderContext.Provider>

}
export default JobProviderContextProvider;