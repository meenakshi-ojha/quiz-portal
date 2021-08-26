//import logo from './logo.svg';
import './App.css';
// import { Button } from "@packages/app-components";
import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import { Dashboard } from '@packages/app-home';
import { BrowserRouter, Switch, NavLink } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import {Login} from './Login';
import {Register} from'@packages/app-createuser';
function App() {
  return (
    <div className="App">
      <div className="LoginPage">
      <BrowserRouter>
      <Header /> 
      {/* <Button>Hello world</Button> */}
      <Footer />
      <Image desc ="Time to get quizzing. Login now to Create quizzes to share and play and have fun with friends. "/>
     
        
          <div className="login">
          
            <Switch >
              <PublicRoute exact path="/" component={Login} />
              <PublicRoute exact path="/Register" component={Register} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              
            </Switch>
            <div className="registerdiv">
            <NavLink exact to="/Register">Not a user? Register</NavLink>
            </div>
          </div>
        
      
     
      
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
