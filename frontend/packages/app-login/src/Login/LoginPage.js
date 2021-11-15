import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import React from 'react';
import { Login } from './Login'
import './LoginPage.css';
export const LoginPage=()=> {
  const login = () => {
    window.close('http://localhost:8080')
    window.open('http://localhost:8080');
  }
  const register = () => {
    window.close('http://localhost:8080')
    window.open('http://localhost:8080/Register');
  }
return(
    <div className="LoginPage">
      <Header link1={login} link1data="Login"
      link2={register} link2data="Register"  /> 
      <Footer />
      <Image desc ="Login Now to create and share exiting quizzes. "/>
      <Login />
     
    </div>

);
}