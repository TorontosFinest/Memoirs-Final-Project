import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // create state to keep track of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // create a function to handle post request from the client-end
  const loginform = () => {
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((res) => {
        console.log("This is coming from the axios LoginForm ----->", res);
      });
  };
  // jsx
  return (
    <div>
      <form className="flex flex-col justify-center items-center mt-20 gap-y-2 sm:gap-y-4 md:mt-72 lg:mt-10 xl:gap-y-6 2xl:mt-56 2xl:float-right 2xl:mr-20 2xl:gap-y-10 3xl:float-none 3xl:ml-20 3xl:mt-42 3xl:gap-y-3 4xl:gap-y-10 4xl:mt-96 ">
        <input
          className="rounded-xl   border-cyan-400 hover:border-dotted bg-transparent text-white   w-50 sm:w-64 md:w-80 xl:w-96 3xl:text-3xl 4xl:text-5xl 4xl:w-3/5 4xl:mt-20"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="rounded-xl border-cyan-400 hover:border-dotted bg-transparent text-white w-50 sm:w-64 md:w-80 xl:w-96 3xl:text-3xl 4xl:text-5xl 4xl:w-3/5"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p className="text-white 4xl:text-3xl">Dont have an account yet?</p>
        <Link className="text-cyan-500 underline 4xl:text-4xl" to="/register">
          Register
        </Link>
        <div className="flex justify-center items center">
          <button
            type="submit"
            onClick={loginform}
            className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32 space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44 xl:w-56 3xl:text-4xl 4xl:text-5xl 4xl:p-2"
          >
            Log-in
          </button>
        </div>
      </form>
    </div>
  );
}
