import React from "react";
import Sidebar from "./General/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar />
      </div>
      <main className="custom-container">
        Hello Divine, this is the dashboard
      </main>
    </div>
  );
};

export default DashboardPage;
