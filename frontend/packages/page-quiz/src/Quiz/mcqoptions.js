import React from "react";
import { getUser, removeUserSession, getToken } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Shell } from "@packages/app-home";
import { useFormInput } from "../util/utils";

export const AddMCQOption = (props) => {
  const option = useFormInput("");

  const user = getUser();
  const [ans, setAns] = React.useState(null);

  const [done, setDone] = React.useState(false);

  const [opt, setOpt] = React.useState([]);

  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);

  const handleOption = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: AuthStr },
      body: JSON.stringify({ option: option.value }),
    };
    const response = await fetch(
      `http://localhost:3001/quiz/${props.location.pathname.slice(6)}/opt`,
      requestOptions
    );
    const ans = await response.json();
    window.location.href = `http://localhost:8080/dashboard`;
  };

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    window.close("http://localhost:8080/dashboard");
    window.open("http://localhost:8080/");
  };

  return (
    <div className="Dashboard">
      <Header
        link1={null}
        link1data={user}
        link2={handleLogout}
        link2data="Logout"
      ></Header>
      <Shell />
      <div className="container" style={{ width: "75%" }}>
        <h1>Add Option</h1>
        <label htmlFor="otionname">
          <b>Option</b>
        </label>
        <br />
        <input type="text" placeholder="Enter option" {...option} required />
        <br />
        <button type="submit" onClick={handleOption} disabled={done}>
          Option
        </button>
      </div>
      <Footer />
    </div>
  );
};
