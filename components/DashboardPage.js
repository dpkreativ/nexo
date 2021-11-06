import React from "react";
import Sidebar from "./General/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar />
      </div>
      <main className="p-5 w-full bg-gray-50">
        <div>
          <h1>Hello Divine</h1>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
