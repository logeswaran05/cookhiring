import { useState } from "react";

import AdminContext from "./AdminContext";
const jobseekers = [
  {
    id: 1001,
    name: "ram",
    phone_number: "8763877454",
    email: "1234q@gmail.com",
    password: "123!qwe",
  },
  {
    id: 1002,
    name: "ravi",
    phone_number: "8983877454",
    email: "123hsihs@gmail.com",
    password: "1235!nhguqwe",
  },
];

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
const openings = [
  {
    id: "1",
    job_discription: "cook",
    wage_for_day: "1000",
    from_date: "2022-02-24",
    to_date: "2022-02-27",
    job_location: "salem",
    phone_number: "8765445675",
  },
  {
    id: "2",
    job_discription: "cook",
    wage_for_day: "1500",
    from_date: "2022-02-24",
    to_date: "2022-02-24",
    job_location: "salem",
    phone_number: "8765445675",
  },
  {
    id: "3",
    job_discription: "cook",
    wage_for_day: "1000",
    from_date: "2-05-2022",
    to_date: "9-05-2022",
    job_location: "salem",
    phone_number: "8765445675",
  },
  {
    id: "4",
    job_discription: "cook",
    wage_for_day: "1000",
    from_date: "12-05-2022",
    to_date: "15-05-2022",
    job_location: "salem",
    phone_number: "8765445675",
  },
];

const AdminContextProvider = (props) => {
  let [Candidates, setCandidates] = useState(candidates);
  let [Openings, setOpenings] = useState(openings);
  let [Jobproviders, setJobproviders] = useState([]);
  let [Jobseekers, setJobseeker] = useState(jobseekers);
  const candidateDeleteHandler = (id) => {
    setCandidates(
      Candidates.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const candidateEditHandeler = (data, id) => {
    setCandidates(
      (Candidates = Candidates.map((item) => {
        if (item.id === id) {
          return { ...data };
        }

        return item;
      }))
    );
  };
  const openingDeleteHandler = (id) => {
    setOpenings(
      Openings.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const openingEditHandler = (data, id) => {
    setOpenings(
      (Openings = Openings.map((item) => {
        if (item.id === id) {
          return { ...data };
        }

        return item;
      }))
    );
  };
  const GetJobSeekerData=()=>{
  
  }
  const GetJobProviderData=()=>{

  }
  const UserEditHander = () => {}
  const DeleteUserData=()=>{}
  const AddnewUser=()=>{}


  return (
    <AdminContext.Provider
      value={{
        openings: Openings,
        candidates: Candidates,
        candidateEditData: {},
        openingEditData: {},
        userEditData: {},
        jobSeekers: Jobseekers,
        jobProviders: Jobproviders,
        openingDelete: openingDeleteHandler,
        openingEdit: openingEditHandler,
        candidateDelete: candidateDeleteHandler,
        candidateEdit: candidateEditHandeler,
        addNewUser:  AddnewUser,
        editUser: UserEditHander ,
        deleteUser:  DeleteUserData,
        getjobProviderData: GetJobProviderData,
        getjobSeekerData: GetJobSeekerData,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
