import { useRef,useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Variable } from "../../../Variable";


const AddNewUser = (props) => {
  const [Err_msg, setErr_msg] = useState(false);
  const [msg, setmsg] = useState("");
  var phoneno = /^\d{10}$/;
  const User = useRef();
  const Email = useRef();
  const Username = useRef();
  const Phone_num = useRef();
  const Password = useRef();

  let formData = {};
  async function postUserData() {
    try {
      const response = await fetch(Variable.API_URL + "user/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      alert(data);
     
    } catch {
      return false;
    }
  }
  const onAddUser = (event) => {
    event.preventDefault();
    formData.userRole = User.current.value;
    formData.email = Email.current.value;
    formData.username = Username.current.value;
    formData.mobileNumber = Phone_num.current.value;
    formData.password = Password.current.value;
   
    //console.log(formData.userRole);
    setErr_msg(false);
    if (
      !(
        formData.userRole &&
        formData.email &&
        formData.username &&
        formData.mobileNumber &&
        formData.password 
      )
    ) {
      setmsg("Please fill all the input feilds");
      setErr_msg(true);
      return;
    }

  
    if (!formData.mobileNumber.match(phoneno)) {
      setmsg( "invalid phone number");
      setErr_msg(true);
      return;
    }
   
     postUserData();
   
  };
  return (
   
     
        <Container  className=" mb-2 rounded  bg-light  ">
          
          <form className="text-left mx-4 bg-light p-3 rounded " onSubmit={onAddUser}>
          <h3>New User</h3>
            <Form.Group className="mb-2">
              <Form.Label>Enter Jobprovider/Jobseeker</Form.Label>
              <Form.Control ref={User} as="select" id="jobProvider/jobSeeker">
                <option value="Jobprovider">Job Provider</option>
                <option value="Jobseeker">Job Seeker</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={Email}
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={Username}
                id="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                ref={Phone_num}
                id="mobileNumber"
                type="tel"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={Password}
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            
            {Err_msg && (
              <div className="alert alert-danger alert-dismissible fade show m-3">
                <strong>Error!</strong> {msg}
              </div>
            )}
            <div className="text-center">
              <Button id="addUserButton" variant="primary" type="submit">
                Add User
              </Button>
            </div>
          </form>
        </Container>
     
    
  );
};
export default AddNewUser;
