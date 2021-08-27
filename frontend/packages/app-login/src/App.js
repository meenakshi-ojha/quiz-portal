//import logo from './logo.svg';
import './App.css';
// import { Button } from "@packages/app-components";
import { Dashboard } from '@packages/app-home';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import {LoginPage} from './Login/LoginPage';
import {RegisterPage} from'@packages/app-createuser';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          
          
            <Switch >
              <PublicRoute exact path="/" component={LoginPage} />
              <PublicRoute exact path="/Register" component={RegisterPage} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              
            </Switch>
            
         
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
