import React from "react"

 const JobProviderContext = React.createContext({
     availablejobs:[],
     appliedCandidates:[],
     addNewJobs:()=>{},
 }) 
 export default JobProviderContext;