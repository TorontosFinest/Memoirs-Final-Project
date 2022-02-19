import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyDropdown from "../../DashboardPage/DropdownComponent";

export default function EditMemoir() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const user_session = localStorage.getItem("user_id");
  const memory_session = localStorage.getItem("memory_id");
  const create = function (e) {
    e.preventDefault();
    axios
      .patch(`/edit/${user_session}/${memory_session}`, { title, description })
      .then((res) => {
        console.log(
          "This is EDIT data coming from the axios EDIT form ----->",
          res.data
        );
        navigate(`/dashboard/${user_session}`);
        localStorage.removeItem("memory_id");
      });
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImage(base64);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const cancel = function (e) {
    navigate(`/dashboard/${user_session}`);
    localStorage.removeItem("memory_id");
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2 w-screen sm:px-4 md:px-6 2xl:px-24">
        <div className="w-screen">
          <h1 className="text-2xl lg:text-3xl 2xl:text-6xl 2xl:mt-1 text-white font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            Edit Memoir!
          </h1>
        </div>
        <MyDropdown />
      </div>
      <div className="flex justify-center items-center">
        <form className="flex flex-col justify-center items-center gap-y-2 mt-10 sm:gap-y-4 md:mt-40 lg:mt-10 xl:gap-y-6 2xl:mt-56 2xl:float-right 2xl:mr-20 2xl:gap-y-10 3xl:float-none 3xl:ml-20 3xl:mt-42 3xl:gap-y-3 4xl:gap-y-10 4xl:mt-96 ">
          <input
            required
            className="rounded-xl mt-0 border-cyan-400 hover:border-dotted bg-white text-black w-48  text-sm sm:w-64 md:w-80 lg:w-96 xl:w-96 2xl:text-3xl 2xl:w-3/5  3xl:text-4xl 3xl:w-3/5 4xl:text-5xl 4xl:w-3/5 4xl:mt-20"
            type="file"
            id="myFile"
            name="filename"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-no-repeat w-40 h-20"
          ></div>
          <input
            required
            className="rounded-xl border-cyan-400 hover:border-dotted bg-transparent text-white w-50 
            sm:w-64 md:w-80 lg:w-96 xl:w-96 2xl:text-3xl
            2xl:w-3/5 3xl:w-96 3xl:text-4xl 4xl:text-5xl 
            4xl:w-3/5 4xl:mt-20 shadow-2xl"
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
            className="rounded-xl border-cyan-400 hover:border-dotted bg-transparent text-white w-50 h-20 2xl:h-44 3xl:h-44 sm:w-64 md:w-80 lg:w-96 xl:w-96 2xl:w-3/5 2xl:text-3xl 3xl:text-4xl 3xl:w-full 4xl:text-5xl 4xl:w-3/5 shadow-2xl"
            type="text"
            name="description"
            placeholder="desription"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <div className="flex flex-col items-center space-y-2 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:space-y-0 2xl:w-96 2xl:space-x-1">
            <button
              onClick={create}
              type="submit"
              className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32 space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44 lg:w-96 xl:w-96  2xl:h-16 3xl:text-3xl 3xl:w-96 4xl:text-5xl 4xl:p-2"
            >
              Edit Memoir
            </button>
            <button
              onClick={cancel}
              type="button"
              className="transition ease-in-out delay-150  bg-rose-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white font-bold p-1 rounded-lg  text-center items-center w-32  space-x-6 shadow-xl shadow-cyan-500/50 sm:w-44 lg:w-96 xl:w-96 2xl:w-3/5 2xl:h-16 3xl:text-3xl 3xl:w-96 4xl:text-5xl 4xl:p-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
