import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import React from 'react';
import {Register} from './Register'
export const RegisterPage=()=> {
return(
    <div>
      <Header /> 
      <Footer />
      <Image desc ="Not yet registered? No worries. Register now and get to quizzing. "/>
      <Register />
     
    </div>

);
}