import Link from "next/link";
import {
  ContactIcon,
  DashboardIcon,
  ExitIcon,
  LogoTweak,
  ProfileIcon,
} from "./Icons";

const Sidebar = () => {
  return (
    <div className="w-60 h-full bg-indigo-500 text-white rounded-3xl relative">
      <div className="w-full flex justify-center p-5">
        <div className="w-20 h-5">
          <LogoTweak />
        </div>
      </div>
      <div className="p-5">
        <Link href="/dashboard" passHref>
          <a className="px-5 py-2 bg-indigo-400 rounded-xl flex items-center space-x-2">
            <div className="w-5">
              <DashboardIcon />
            </div>
            <div>Dashboard</div>
          </a>
        </Link>
        <Link href="/contacts" passHref>
          <a className="px-5 py-2 rounded-xl flex items-center space-x-2">
            <div className="w-5">
              <ContactIcon />
            </div>
            <div>Contacts</div>
          </a>
        </Link>
        <div className="px-5 py-2 rounded-xl">Notes</div>
      </div>
      <div className="p-5 absolute bg-indigo-400 bottom-0 w-full rounded-3xl grid grid-cols-2">
        <div className="-mt-10">
          <div className="w-12 h-12 bg-indigo-900 rounded-full">
            <div className="w-full h-full flex items-center justify-center text-indigo-500">
              <ProfileIcon />
            </div>
          </div>
          <div className="mt-2">John D.</div>
        </div>
        <div className="my-5 flex justify-end">
          <div className="w-12 h-12 rounded-full bg-indigo-900">
            <div className="w-full h-full flex items-center justify-center text-indigo-500">
              <ExitIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
