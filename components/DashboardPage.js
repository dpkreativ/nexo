import React from "react";
import Sidebar from "./General/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0 bg-gray-50">
        <Sidebar overview />
      </div>
      <main className="w-full relative">
        <div className="sticky top-0 p-5 bg-gray-50">
          <h1 className="font-bold text-2xl">Hello Divine 👋</h1>
        </div>
        <section className="p-5 bg-gray-50 flex flex-col space-y-10">
          <div className="bg-white shadow-xl w-full h-96 rounded-3xl flex items-center justify-center">
            <h2 className="font-bold text-5xl">Upcoming Events</h2>
          </div>
          <div className="bg-white shadow-xl w-full h-96 rounded-3xl flex items-center justify-center">
            <h2 className="font-bold text-5xl">Frequent contacts</h2>
          </div>
          <div className="bg-white shadow-xl w-full h-96 rounded-3xl flex items-center justify-center">
            <h2 className="font-bold text-5xl">Recent notes</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
