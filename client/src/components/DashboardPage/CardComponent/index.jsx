import React from "react";
import { useNavigate } from "react-router-dom";
export default function CardComponent(props) {
  const navigate = useNavigate();
  const user_session = localStorage.getItem("user_id");
  const { dashboardData } = props;
  console.log("PROPS ARE", props);
  const edit = function (e, data) {
    e.preventDefault();
    localStorage.setItem("memory_id", data.id);
    const memory_id = localStorage.getItem("memory_id");
    navigate(`/edit/${user_session}/${memory_id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-col-5 2xl:p-20 2xl:mt-20 mt-10 lg:p-10 lg:mt-0">
      {dashboardData.map((data) => {
        return (
          <div
            key={data.id}
            className=" flex justify-center items-center px-10 py-2 lg:p-3"
          >
            <div className="bg-gradient-to-br from-gray-400 to-transparent p-0.5 bg-opacity-20 backdrop-blur-sm shadow-xl rounded-md ">
              <div className="w-full h-50 ">
                <img
                  className="rounded-lg"
                  src={data.image_url}
                  alt="memoir"
                />
                <h1 className="text-2xl text-white font-thin">{data.title}</h1>
                <span className="inline-block w-full text-sm text-white font-thin ">
                  {data.description}
                </span>
                <div className="flex justify-between items-center p-2">
                    <span  onClick={(e) => {
                        edit(e, data);
                      }}>
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
                  </span>
                  <span onClick={(e) => props.removeMemoir(e, data)}>
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
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
