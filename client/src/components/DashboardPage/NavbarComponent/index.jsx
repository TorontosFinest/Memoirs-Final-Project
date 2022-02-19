import MyDropdown from "../DropdownComponent";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [search,setSearch] = useState("");

  const create = function (e) {
    e.preventDefault();
    axios
      .post(`/search`, {search})
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <div className="flex items-center justify-between p-2 w-screen sm:px-4 md:px-6 2xl:px-24">
      <div className="w-screen">
        <h1 className="text-2xl lg:text-3xl 2xl:text-6xl 2xl:mt-1 text-white font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          Your Memoirs!
        </h1>
      </div>
      <div>
      <input
      value={search}
       onChange={(event) => {
            setSearch(event.target.value);
          }}
       className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
       type="search" name="search" placeholder="Search"/> 
       <button onClick={(event) =>create(event)}type="submit">search</button>
       </div>
      <MyDropdown />
    </div>
  );
}
