import React from "react";
import Sidebar from "./General/Sidebar";

const AllContactsPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar />
      </div>
      <main className="p-5 w-full bg-gray-50">
        <h1>All Contacts</h1>
      </main>
    </div>
  );
};

export default AllContactsPage;
