import React from "react";
import {useNavigate} from "react-router-dom";

export default function CardComponent(props) {
  const navigate = useNavigate();
  const user_session = localStorage.getItem('user_id');
  const { dashboardData } = props;
  console.log("PROPS ARE", props);
  const edit = function (e,data){
    e.preventDefault();
    localStorage.setItem('memory_id',data.id);
    const memory_id = localStorage.getItem('memory_id');
    navigate(`/edit/${user_session}/${memory_id}`);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dashboardData.map((data) => {
        return (
          <div key={data.id} className="container gap-x-2 flex justify-center items-center p-10 ">
            <div className="bg-gradient-to-br from-gray-400 to-transparent p-4 bg-opacity-20 backdrop-blur-sm rounded-md ">
              <div className="w-full h-50 space-y-2">
                <img
                  className="fuji-bg-css"
                  src={
                    "https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?b=1&k=20&m=1226241649&s=170667a&w=0&h=lXhD5bdn_YT50-ItctUnqB2WiGZ8Jye1GZHjvDsb2Xo="
                  }
                  alt="memoir"
                />
                <h1 className="text-2xl text-white font-thin">{data.title}</h1>
                <p className="text-sm text-white font-thin ">
                  {data.description}
                </p>
                <div className="flex justify-between items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-20 text-white hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path onClick={(e)=>{edit(e,data)}}
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
          </div>
        );
      })}
    </div>
  );
}
