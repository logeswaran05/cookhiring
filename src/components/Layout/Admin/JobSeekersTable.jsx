import React from 'react';
import { useEffect } from 'react';
import { useContext } from "react";
import AdminContext from '../../../store/Admin/AdminContext';

import TableRow from './TableRow';


function JobSeekersTable() {
 
 const Context=useContext(AdminContext);
 useEffect(()=>{
   Context.getjobSeekerData();
 },[])
  return (
    
      
    <table className="table bg-white  rounded">
    <thead>
      <tr>
       <th scope="col">No</th>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Password</th>
        <th scope='col'>Edit</th>
        <th scope='col'>Delete</th>

        
      </tr>
    </thead>
    <tbody>
    { Context.jobSeekers.map((item,index)=><TableRow key={item.id}
          Id={item.id}
          item={item}
          name={item.username}
          password={item.password}
          phone_number={item.mobileNumber}
          index={index}
          email={item.email}/>) }
    </tbody>
  </table>
  
  );
}

export default JobSeekersTable;