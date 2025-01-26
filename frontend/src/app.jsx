import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./app.css";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Components/Footer";
export function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        dispatch(setUser(null));
        localStorage.removeItem("user");
      }, 60 * 60 * 1000);
      return () => clearTimeout(timer);
    }

  }, [user, dispatch]);

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
