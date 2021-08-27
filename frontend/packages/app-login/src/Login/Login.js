import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { setUserSession } from '@packages/app-login';
import { NavLink } from 'react-router-dom';
export const Login=(props)=> {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3000/user/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.username);
      window.close('http://localhost:8080');
      window.open('http://localhost:8080/dashboard');
    }).catch(error => {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    });
  }

  return (
      
    <div className="container">
     <label for="uname"><b>Email</b></label><br/>
    <input type="text" placeholder="Enter Email" {...email} required />
    <br />
    <label for="psw"><b>Password</b></label>
    <br/>
    <input type="password" placeholder="Enter Password" {...password} required />

    <button type="submit" onClick={handleLogin}>Login</button>
    <div className="registerdiv">
            <NavLink exact to="/Register">Not a user? Register</NavLink>
    </div>
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
};