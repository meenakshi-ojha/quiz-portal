import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Image } from "@packages/app-components";
import React from "react";
import { Register } from "./Register";
export const GuestRegisterPage = () => {
  const login = () => {
    window.close("http://localhost:8080/GuestRegister");
    window.open("http://localhost:8080");
  };
  const register = () => {
    window.close("http://localhost:8080/GuestRegister");
    window.open("http://localhost:8080/GuestRegister");
  };
  return (
    <div>
      <Header
        link1={login}
        link1data="Login"
        link2={register}
        link2data="Register"
      />
      <Footer />
      <Image desc="Hi Guest.Here to quiz? Register and start" />
      <Register />
    </div>
  );
};
