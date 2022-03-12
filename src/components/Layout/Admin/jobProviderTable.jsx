import { useContext ,useEffect} from "react";
import TableRow from "./TableRow";

import AdminContext from "../../../store/Admin/AdminContext";
function JobProviderTable() {
  
const Context=useContext(AdminContext);

useEffect(()=>{
  Context.getjobSeekerData();
},[])
  return (
    <table className="table bg-light  rounded">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {Context.jobProviders.map((item, index) => (
          <TableRow
            key={item.id}
            item={item}
            Id={item.id}
            name={item.username}
            password={item.password}
            phone_number={item.mobileNumber}
            index={index}
            email={item.email}
           
          />
        ))}
      </tbody>
    </table>
  );
}

export default JobProviderTable;
