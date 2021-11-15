import React from "react";
import { getUser, removeUserSession } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Shell } from "./Shell";
import "./Dashboard.css";
import { AllQuizzes } from "./AllQuizzes";
export const Dashboard = () => {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    window.close("http://localhost:8080/dashboard");
    window.open("http://localhost:8080/");
  };

  return (
    <div className="Dashboard">
      <Header
        link1="#"
        link1data={user}
        link2={handleLogout}
        link2data="Logout"
      ></Header>
      <Shell />
      <div className="main">
        <h2>All Quizzes by {user}</h2>
        <AllQuizzes />
      </div>
      <Footer />
    </div>
  );
};
