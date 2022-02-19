import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent";
import CardComponent from "../CardComponent";
import {useLocation} from "react-router-dom";
import axios from "axios";

export default function Dashboard() {

  const [dashboardData, setDashboardData] = useState([]);
  const user_session = localStorage.getItem("user_id");
  const search = useLocation().search;
  const description = new URLSearchParams(search).get('description');

  localStorage.removeItem("memory_id");

  useEffect(() => {
    load();
  }, [description]);

  const load = () => {
    console.log("description is ",description);
    if(!description){
    axios.get(`/dashboard/${user_session}`).then((res) => {
      setDashboardData(res.data.rows);
      console.log("UR DATA IS ",res.data.rows);
    });
  }else{
      axios
      .post(`/search`, {search: description})
      .then((res) => {
        console.log("your search response is ", res);
        setDashboardData(res.data.rows);
      });
  }
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
