import React from 'react';

const JobSeekerContext=React.createContext({
    Appliedjobs:[],
    Availablejobs:[],
    applyJob:()=>{},

})
export default JobSeekerContext;
