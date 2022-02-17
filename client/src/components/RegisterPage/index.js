import React from "react";
import RegisterForm from "./RegisterForm";
import HeaderTitle from "../HeaderTitle";
import BackgroundImage from "../../assets/backgroundMain.png";

export default function RegisterPage() {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      className="lessThan-sm-screens"
    >
      <HeaderTitle />
      <RegisterForm />
    </div>
  );
}
