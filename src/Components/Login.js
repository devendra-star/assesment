import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from '@mui/material/Button';
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("password").replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
          
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              autoComplete="new-password"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
         
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <Button type="submit" className="btn" variant="contained">
            Login
          </Button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info please trying again correct email and password.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
