import React from 'react';
import { getUser, removeUserSession } from '@packages/app-login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {Login} from '@packages/app-login';
export const Dashboard=(props) =>{
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    if (window.confirm('You are logged out.Login'))
    {
    window.open('http://localhost:8080/');
    }
    else
    { 
      alert("You are logged out.")
      window.open('http://localhost:8080/');
    }
    ;
  }
 
 
  return (
    <div>
      Welcome { user }!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
