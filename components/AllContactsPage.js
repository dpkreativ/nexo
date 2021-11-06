import React from "react";
import ContactCard from "./General/Cards/ContactCard";
import Sidebar from "./General/Sidebar";

const AllContactsPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar />
      </div>
      <main className="p-5 w-full bg-gray-50">
        <div className="mb-10">
          <h1 className="font-bold text-2xl text-indigo-500">2 Contacts</h1>
        </div>
        <div>
          <div className="grid lg:grid-cols-6 gap-6">
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
            <div>
              <ContactCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllContactsPage;
