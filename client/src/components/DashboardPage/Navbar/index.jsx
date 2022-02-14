import React, { useState } from "react";

export default function Navbar() {
  const [boolean, setBoolean] = useState(false);

  const toggle = () => {
    boolean ? setBoolean(false) : setBoolean(true);
  };
  return (
    <div className="container flex items-center justify-between p-2">
      <div>
        <p className="text-2xl text-white tracking-wider">mmemoirs</p>
      </div>
      {boolean ? (
        <div className="text-white">hello</div>
      ) : (
        <div className="text-white">hi</div>
      )}
      <button
        onClick={toggle}
        className="text-xl text-white bg-cyan-500 font-Bungee rounded"
      >
        M
      </button>
    </div>
  );
}
