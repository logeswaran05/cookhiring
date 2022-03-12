import React from "react";

const AdminContext = React.createContext({
  openings: [],
  candidates: [],
  candidateEditData: {},
  openingEditData: {},
  jobSeekers: [],
  jobProviders: [],
  candidateDelete: () => {},
  candidateEdit: () => {},
  openingDelete: () => {},
  openingEdit: () => {},
  addNewUser: () => {},
  editUser: () => {},
  deleteUser: () => {},
});
export default AdminContext;
