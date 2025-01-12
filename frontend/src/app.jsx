import { Outlet } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function App() {
  
  return (
    <>
      <div className="app grotesk">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
