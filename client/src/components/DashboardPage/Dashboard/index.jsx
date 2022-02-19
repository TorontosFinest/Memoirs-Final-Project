import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent";
import CardComponent from "../CardComponent";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchDashboard, setSearchDashboard] = useState("");
  const [dashboardData, setDashboardData] = useState([]);
  const [displayEditDelete, setDisplayEditDelete] = useState(true);
  const user_session = localStorage.getItem("user_id");
  const search = useLocation().search;
  const description = new URLSearchParams(search).get("description");

  localStorage.removeItem("memory_id");
  const create = function (e) {
    e.preventDefault();
    navigate(`?description=${searchDashboard}`);
  };

  useEffect(() => {
    load();
  }, [description]);

  const load = () => {
    console.log("description is ", description);
    if (!description) {
      axios.get(`/dashboard/${user_session}`).then((res) => {
        setDashboardData(res.data.rows);
        setDisplayEditDelete(true);
        console.log("UR DATA IS ", res.data.rows);
      });
    } else {
      axios.post(`/search`, { search: description }).then((res) => {
        console.log("your search response is ", res);
        setDashboardData(res.data.rows);
        setDisplayEditDelete(false);
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
      <div className="flex flex-col items-center absolute inset-x-0 top-0 mt-16 sm:mt-20 2xl:mt-28 space-y-1">
        <input
          value={searchDashboard}
          onChange={(event) => {
            setSearchDashboard(event.target.value);
          }}
          className="border-2 border-gray-300 bg-white h-10  rounded-lg text-sm lg:w-60 2xl:w-96 focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          onClick={(event) => create(event)}
          className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32 space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44  3xl:text-4xl 4xl:text-5xl 4xl:p-2 lg:w-60 xl:w-60"
        >
          search
        </button>
      </div>
      <CardComponent
        removeMemoir={removeMemoir}
        dashboardData={dashboardData}
        displayEditDelete={displayEditDelete}
      />
    </div>
  );
}
