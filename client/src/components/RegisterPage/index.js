import React from "react";
import RegisterForm from "./RegisterForm";
import HeaderTitle from "../HeaderTitle";

export default function RegisterPage() {
  return (
    <div className="background lessThan-sm-screens">
      <HeaderTitle />
      <RegisterForm />
    </div>
  );
}
