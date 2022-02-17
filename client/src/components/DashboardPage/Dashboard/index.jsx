import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent";
import CardComponent from "../CardComponent";
import axios from "axios";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const user_session = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`/dashboard/${user_session}`).then((res) => {
      console.log("RESPONSE FROM SERVER:", res);
      setDashboardData(res.data.rows);
      console.log("RES.DATA.ROWS", res.data.rows);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <CardComponent dashboardData={dashboardData} />
    </div>
  );
}
