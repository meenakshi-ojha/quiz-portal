//import logo from './logo.svg';
import './App.css';
// import { Button } from "@packages/app-components";
import { Header } from '@packages/app-components';
import { Footer } from '@packages/app-components';
import { Image } from '@packages/app-components';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Login';
import {Register} from'@packages/app-createuser';
function App() {
  return (
    <div className="App">
      <Header /> 
      {/* <Button>Hello world</Button> */}
      <Footer />
      <Image desc ="Time to get quizzing. Login now to Create quizzes to share and play and have fun with friends. "/>
      <BrowserRouter>
        
          <div className="login">
          
            <Switch>
              <Route path="/Register" component={Register} />
              <Route path="/" component={Login} />
            </Switch>
            
          </div>
          <div className="registerdiv">
        <NavLink exact ClassName="register" to="/Register">Not a user? Register</NavLink></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
