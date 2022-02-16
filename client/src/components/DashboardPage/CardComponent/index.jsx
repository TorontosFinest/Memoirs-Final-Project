import React from "react";

const norway = require("../../../assets/Norway.jpg");
const fuji = require("../../../assets/Fuji.jpg");
const images = [
  {
    id: 1,
    url: `${norway}`,
  },
  {
    id: 1,
    url: `${fuji}`,
  },
];

export default function CardComponent() {
  return images.map((image) => {
    <div className="container gap-x-2 flex justify-center items-center p-4">
      <div className="bg-gradient-to-br from-gray-400 to-transparent p-4 bg-opacity-20 backdrop-blur-sm rounded-md ">
        <div className="w-full h-full space-y-2">
          <img className="fuji fuji-bg-css" />
          <h1 className="text-xl text-white font-thin">Mount Fuji</h1>
          <p className="text-sm text-white font-thin ">
            Mount Fuji is a very distinctive feature of the geography of Japan.
          </p>
          <div className="flex justify-between items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-20 text-white hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-20 text-white hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>;
  });
}
