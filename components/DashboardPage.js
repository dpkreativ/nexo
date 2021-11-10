import React from "react";
import Sidebar from "./General/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar overview />
      </div>
      <main className="p-5 w-full bg-gray-50">
        <div>
          <h1 className="font-bold text-2xl">Hello Divine</h1>
        </div>
        <section>
          <h2>A section</h2>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
