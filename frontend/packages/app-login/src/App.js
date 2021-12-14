//import logo from './logo.svg';
import "./App.css";
// import { Button } from "@packages/app-components";
import { Dashboard } from "@packages/app-home";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { LoginPage } from "./Login/LoginPage";
import { RegisterPage } from "@packages/app-createuser";
import { CreateQuiz } from "@packages/page-quiz";
import { AddTextQuestion } from "@packages/page-quiz";
import { AddMCQuestion, AddMCQOption } from "@packages/page-quiz";

import { Quiz } from "@packages/app-home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PublicRoute exact path="/Register" component={RegisterPage} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          <PrivateRoute exact path={`/quiz/:quizid`} component={Quiz} />
          <PrivateRoute exact path="/createquiz" component={CreateQuiz} />
          <PrivateRoute
            exact
            path={`/quiz/:quizid/text`}
            component={AddTextQuestion}
          />
          <PrivateRoute
            exact
            path={`/quiz/:quizid/mcq`}
            component={AddMCQuestion}
          />
          <PrivateRoute
            exact
            path={`/quiz/:quizid/mcq/:quesid`}
            component={AddMCQOption}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
