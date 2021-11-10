import React from "react";
import Sidebar from "./General/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar overview />
      </div>
      <main className="w-full relative">
        <div className="mb-10 sticky top-0 p-5 bg-white">
          <h1 className="font-bold text-2xl">Hello Divine 👋</h1>
        </div>
        <section className="p-5">
          <div className="bg-gray-100 w-full h-96"></div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
