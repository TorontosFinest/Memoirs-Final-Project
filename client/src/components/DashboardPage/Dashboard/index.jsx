import React from "react";
import Navbar from "../NavbarComponent";
import DashboardHeaderTitle from "../HeaderComponent";
import CardComponent from "../CardComponent";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardHeaderTitle />
      <CardComponent />
    </div>
  );
}
