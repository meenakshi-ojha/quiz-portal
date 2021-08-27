import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import React from 'react';
import { Login } from './Login'
export const LoginPage=()=> {
return(
    <div>
      <Header /> 
      <Footer />
      <Image desc ="Login Now to create and share exiting quizzes. "/>
      <Login />
     
    </div>

);
}