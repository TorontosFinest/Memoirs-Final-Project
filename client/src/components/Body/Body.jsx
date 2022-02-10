import React from "react";
// import Form from "../Form/Form";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import RegisterForm from "../RegisterForm/RegisterForm";
export default function Body() {
  return (
    <div className="body lessThan-sm-screens">
      {/* <Form /> */}
      <HeaderTitle />
      <RegisterForm />
    </div>
  );
}
