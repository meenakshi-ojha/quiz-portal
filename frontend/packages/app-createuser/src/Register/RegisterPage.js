import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import React from 'react';
import {Register} from './Register'
export const RegisterPage=()=> {
  const login = () => {
    window.close('http://localhost:8080/Register')
    window.open('http://localhost:8080');
  }
  const register = () => {
    window.close('http://localhost:8080/Register')
    window.open('http://localhost:8080/Register');
  }
return(
    <div>
      <Header 
      link1={login} link1data="Login"
      link2={register} link2data="Register" /> 
      <Footer />
      <Image desc ="Not yet registered? No worries. Register now and get to quizzing. "/>
      <Register />
     
    </div>

);
}