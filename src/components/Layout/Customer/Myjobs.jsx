import DeleteIcon from "../../../asserts/DeleteIcon";
import EditIcon from "../../../asserts/EditIcon";
import Card from "../../UI/Card";
const MyJobs=()=>{
return(<Card>
<table className="table bg-light  rounded">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">job id</th>
          <th scope="col">Members Needed</th>
          <th scope="col">Members Applied</th>
          <th scope="col">selected</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr>
    <th scope="row">1</th>
    <td>101</td>
    <td>1 Candidate</td>
    <td><button className='btn btn-primary' >1 Candidate</button></td>
    <td><button className='btn btn-primary' >1 Candidate</button></td>
   
    <td><button className='btn btn-primary' >{EditIcon}</button></td>
    <td><button className='btn btn-primary' >{DeleteIcon}</button></td>
  

  </tr>
      </tbody>
</table>
</Card>)
}
export default MyJobs;