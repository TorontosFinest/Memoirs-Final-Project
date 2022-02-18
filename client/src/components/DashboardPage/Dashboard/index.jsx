import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent";
import CardComponent from "../CardComponent";
import axios from "axios";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const user_session = localStorage.getItem("user_id");

  localStorage.removeItem("memory_id");

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    axios.get(`/dashboard/${user_session}`).then((res) => {
      setDashboardData(res.data.rows);
    });
  };

  const removeMemoir = (e, data) => {
    e.preventDefault();
    localStorage.setItem("memory_id", data.id);
    const memory_id = localStorage.getItem("memory_id");
    axios.delete(`/dashboard/${user_session}/${memory_id}`).then(() => {
      load();
      localStorage.removeItem("memory_id");
    });
  };
  return (
    <div>
      <Navbar />
      <CardComponent
        removeMemoir={removeMemoir}
        dashboardData={dashboardData}
      />
    </div>
  );
}
