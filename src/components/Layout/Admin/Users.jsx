import { Link, Route ,Routes} from 'react-router-dom';
import ContentContainer from '../../UI/ContentContainer';
import  "./Users.module.css";
import JobSeekersTable from './JobSeekersTable';
import JobProviderTable from './jobProviderTable';
import AddNewUser from './AddNewUser';
import EditUser from './EditUser';
const Users=(props)=>{
    return<ContentContainer>
     <div className='container p-2 bg-light white my-1 rounded d-flex justify-content-around'>
         <Link to='jobproviderData' className="btn btn-secondary">Job Providers</Link> 
         <Link to="jobseekerData" className="btn btn-secondary">Job Seekers</Link>
         <Link to="addNewUser" className="btn btn-secondary">Add User</Link>
        
    </div>
        
        
        
        <Routes>
            <Route path='jobseekerData/*' element={<JobSeekersTable/>}/>
            <Route path='jobproviderData/*' element={<JobProviderTable/>}/>
            <Route path='addNewUser' element={<AddNewUser/>}/>
            <Route path='editUser/:id' element={<EditUser/>}/>
        </Routes>
    </ContentContainer>
    
}
export default Users;