import React, { useState } from "react";
import Navbar from "../Navbar";

export default function Dashboard() {
  const [hamburger, setHamburger] = useState("false");

  return (
    <div>
      <Navbar />
    </div>
  );
}
