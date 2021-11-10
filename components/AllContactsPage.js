import React from "react";
import ContactCard from "./General/Cards/ContactCard";
import Sidebar from "./General/Sidebar";

const AllContactsPage = () => {
  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0">
        <Sidebar contacts />
      </div>
      <main className="w-full relative">
        <div className="mb-10 sticky top-0 p-5 bg-white flex justify-between items-center">
          <h1 className="font-bold text-2xl">Contacts</h1>
          <div>
            <form>
              <div className="border border-black rounded-md p-2">
                <input
                  type="search"
                  name="searchContact"
                  id="searchContact"
                  placeholder="Search contact..."
                  className="outline-none"
                />
              </div>
            </form>
          </div>
        </div>
        <section className="p-5">
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
            <div>
              <ContactCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllContactsPage;
