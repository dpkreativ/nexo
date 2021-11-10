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
          <h1 className="font-bold text-2xl">Contacts 📒</h1>
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
              <ContactCard firstName="Drake" lastName="Aubrey" />
            </div>
            <div>
              <ContactCard firstName="Jet" lastName="Lee" />
            </div>
            <div>
              <ContactCard firstName="Lois" lastName="Lane" />
            </div>
            <div>
              <ContactCard firstName="Giannis" lastName="Antetokounmpo" />
            </div>
            <div>
              <ContactCard firstName="Divine" lastName="Orji" />
            </div>
            <div>
              <ContactCard firstName="David" lastName="Orji" />
            </div>
            <div>
              <ContactCard firstName="Kate" lastName="Adaobi" />
            </div>
            <div>
              <ContactCard firstName="Sochika" lastName="Nokson" />
            </div>
            <div>
              <ContactCard firstName="Ngozi" lastName="Erondu" />
            </div>
            <div>
              <ContactCard firstName="Triumph" lastName="Ugoji" />
            </div>
            <div>
              <ContactCard firstName="Leah" lastName="Ibeka" />
            </div>
            <div>
              <ContactCard firstName="Nneoma" lastName="Orji" />
            </div>
            <div>
              <ContactCard firstName="Ezinne" lastName="Orji" />
            </div>
            <div>
              <ContactCard firstName="Joseph" lastName="Ezebuiro" />
            </div>
            <div>
              <ContactCard firstName="Jill" lastName="Prince" />
            </div>
            <div>
              <ContactCard firstName="Uche" lastName="Nwaubani" />
            </div>
            <div>
              <ContactCard firstName="Benedict" lastName="Obiadi" />
            </div>
            <div>
              <ContactCard firstName="Precious" lastName="Ezinne" />
            </div>
            <div>
              <ContactCard firstName="Johnson" lastName="Okpan" />
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
