import { Outlet } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
export function App() {
  return (
    <>
      <div className="app grotesk">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
