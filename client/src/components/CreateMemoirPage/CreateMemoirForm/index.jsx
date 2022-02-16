import axios from 'axios';
import React , {useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function CreateMemoir(){
    const navigate = useNavigate();
    const [title,setTitle] = useState("");  
    const [description,setDescription] = useState("")
    const user_session = localStorage.getItem('user_id');

    const create = function(e){
        e.preventDefault();
        axios
        .post(`/create/:${user_session}`, {title,description})
        .then((res)=>{
            console.log("This is coming from the axios LoginForm ----->", res.data);
            navigate(`/dashboard/${res.data.user_id}`);
        })
    }

    return (
        <div>
      <form className="flex flex-col justify-center items-center mt-20 gap-y-2 sm:gap-y-4 md:mt-72 lg:mt-10 xl:gap-y-6 2xl:mt-56 2xl:float-right 2xl:mr-20 2xl:gap-y-10 3xl:float-none 3xl:ml-20 3xl:mt-42 3xl:gap-y-3 4xl:gap-y-10 4xl:mt-96 ">
        <input
          required
          className="rounded-xl   border-cyan-400 hover:border-dotted bg-transparent text-white   w-50 sm:w-64 md:w-80 xl:w-96 3xl:text-3xl 4xl:text-5xl 4xl:w-3/5 4xl:mt-20"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          required
          className="rounded-xl border-cyan-400 hover:border-dotted bg-transparent text-white w-50 sm:w-64 md:w-80 xl:w-96 3xl:text-3xl 4xl:text-5xl 4xl:w-3/5"
          type="text"
          name="description"
          placeholder="desription"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <div className="flex justify-center items center">
          <button onClick={create}
            type="submit"
            className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32 space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44 xl:w-56 3xl:text-4xl 4xl:text-5xl 4xl:p-2"
          >
            Create Memoir
          </button>
           <button
            className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32 space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44 xl:w-56 3xl:text-4xl 4xl:text-5xl 4xl:p-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    )
}