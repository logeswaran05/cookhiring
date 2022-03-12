import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../../asserts/DeleteIcon';
import EditIcon from '../../../asserts/EditIcon';
import { useContext } from 'react';
import AdminContext from '../../../store/Admin/AdminContext';


const TableRow=(props)=>{
  const Context=useContext(AdminContext);
    const Navigate=useNavigate();
    const onEditUser=()=>{
     Context.userEditdata=props.item;
    //  console.log( Context.userEditdata);
      Navigate(`/admin/editUser/${props.index}`);
    }
     function OnDelete() {
         }
    
      
    return<tr>
    <th scope="row">{props.index+1}</th>
    <td>{props.Id}</td>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td>{props.phone_number}</td>
    <td>{props.password}</td>
    <td><button className='btn' onClick={onEditUser}>{EditIcon}</button></td>
    <td><button className='btn' onClick={OnDelete}>{DeleteIcon}</button></td>
  

  </tr>
  
}
export default TableRow;