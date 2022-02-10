import React from "react";
const facebook = require("../../assets/facebook.png");
const google = require("../../assets/google.png");

export default function Form() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-Poppins font-normal text-right mr-72 mt-20">
        Log-in
      </h1>
      <div className="space-x-10 ml-auto mr-20 mt-16">
        <button className="transition ease-in-out delay-150 bg-white hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold py-2 px-4 rounded-lg inline-flex items-center w-60 space-x-6 shadow-2xl shadow-cyan-500/50">
          <img
            className="w-10 h-10 bg-white rounded-lg"
            src={facebook}
            alt="google-logo"
          />
          <span className="font-Poppins font-normal">With Facebook</span>
        </button>
        <button className="transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 bg-white hover:bg-gray-400 hover:text-white font-bold py-2 px-4 rounded-lg inline-flex items-center w-60 space-x-6 shadow-2xl shadow-cyan-500/50">
          <img
            className="w-10 h-10  rounded-sm"
            src={google}
            alt="google-logo"
          />
          <span className="font-Poppins font-normal">With Google</span>
        </button>
      </div>
      <h1 className="text-xl font-Poppins font-normal text-right mr-80 mt-20">
        -OR-
      </h1>
      <form
        method="POST"
        className="flex flex-col justify-evenly items-center ml-auto mr-40 mt-5"
      >
        <input
          className="w-96 h-10 rounded-lg outline-pink-500"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-96 h-10 mt-4 border-rose-500 rounded-lg"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-96 h-10 mt-4 border-rose-500 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="transition ease-in-out delay-150 bg-white hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300  font-bold py-2 px-4 rounded-lg  items-center w-60 space-x-2.5 shadow-2xl shadow-cyan-500/50 mt-6 hover:text-white">
          <span className="text-center font-Poppins font-normal ">
            Register
          </span>
        </button>
      </form>
    </div>
  );
}
