// import login component for the route

import React from "react";
import LoginForm from "./LoginForm";
import HeaderTitle from "../HeaderTitle";

export default function LoginPage() {
  return (
    <div className="background lessThan-sm-screens">
      <HeaderTitle />
      <LoginForm />
    </div>
  );
}
