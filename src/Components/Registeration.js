import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import '../Components/Regi.css'
import Login from "./Login";

function Registration() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if ( !fname || !lname || !email || !password || !repeatpassword  ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("fname", JSON.stringify(fname));
      localStorage.setItem("lname", JSON.stringify(lname));
      localStorage.setItem("password",JSON.stringify(password) );
      localStorage.setItem("repeatpassword",JSON.stringify(repeatpassword) );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
        <div>
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3 style={{justifyContent:"center"}}>Create account</h3>
              <p onClick={handleClick} style={{marginTop:-10, justifyContent:"center" ,marginLeft:70,fontSize:14}}>
                      Already have an account ?<span style={{color:"skyblue"}}>log in</span> 
            </p>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div style={{display:"flex" , marginTop:10}}>
              
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="fname"
                  onChange={(event) => setFname(event.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lname"
                  onChange={(event) => setLname(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder=" Repeat Password"
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
              </div>
              <Button type="submit" className="btn" variant="contained">
                Sign UP
              </Button>
              
              <p  style={{marginTop:10,fontSize:13}}>
              <Checkbox/>I have read and agreed to the<span style={{color:"skyblue"}}>Terms of Service</span> 
    </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Please fill all Field beacause every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;
