import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetDashboardQuery } from "../state/userData/dashboard";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const { data, error, isLoading } = useGetDashboardQuery();
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, user]);
  return (
    <>
      {error && (
        <div
          className="bg-red-100 border h-screen border-red-400 text-red-700 px-4 py-3 rounded relative flex justify-center items-center flex-col gap-4"
          role="alert"
        >
          <strong className="font-bold text-4xl">404 Error!</strong>
          <span className="block sm:inline">Unauthorized...</span>
          <h2>
            Please{" "}
            <Link className="text-xl text-blue-500" to={"/signin"}>
              Signin
            </Link>{" "}
            to access
          </h2>
        </div>
      )}
      {user && (
        <div className="min-h-screen bg-gray-100">
          {/* Dashboard Header */}
          <header className="bg-blue-500 text-white py-4 shadow-lg">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm">Welcome to your dashboard!</p>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Placeholder Cards */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Dashboard;
