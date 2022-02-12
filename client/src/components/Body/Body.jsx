import React from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import RegisterForm from "../RegisterForm/RegisterForm";
export default function Body() {
  return (
    <div className="body lessThan-sm-screens">
      <HeaderTitle />
      <RegisterForm />
    </div>
  );
}
